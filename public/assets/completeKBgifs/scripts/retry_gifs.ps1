# ============================================================
# retry_gifs.ps1
# Second-pass script: retries the GIFs that failed in
# download_gifs.ps1 due to rate limiting or connection drops.
#
# HOW IT WORKS:
#   Two failure types needed different strategies:
#
#   1. "Connection closed unexpectedly" (rate limited mid-session)
#      - The server accepted the connection then dropped it
#      - Fix: wait 2–4 seconds between requests, use Invoke-WebRequest
#        (which sends a fuller HTTP/1.1 request than WebClient) and
#        add more browser-like headers (Accept, Accept-Language)
#
#   2. "(400) Bad Request" (wrong URL / year path)
#      - The 2019/08/ path returned a 400 for some files,
#        meaning those files were uploaded in a different month/year
#      - Fix: loop through years 2018–2024 and all 12 months,
#        try each combination, keep the first response > 1 KB
#        (tiny responses are error pages, not real GIFs)
#      - Uses a .tmp file so a bad download never overwrites a
#        good one — only renamed to .gif once size is confirmed
#
#   3. Special case — renegade row
#      - Page source showed its path is /2024/08/04-renegade-row.gif
#        (different year AND a dash instead of underscore in the name)
#      - Handled explicitly after the main loops
#
#   Files already present are skipped (idempotent — safe to re-run)
#
# RUN:
#   powershell -ExecutionPolicy Bypass -File retry_gifs.ps1
# ============================================================

$dest = "C:\Users\romvp\github\Romi110.github.io\httpskettlebellsworkouts gifs"

# --- Group 1: connection-aborted files — retry with delay + richer headers ---
$retryAborted = @(
  "29_windmill.gif",
  "16_turkish_get_up.gif",
  "40_hip_thrust.gif",
  "47_reverse_turkish_get_up.gif",
  "10_clean_press.gif"
)

$headers = @{
  "User-Agent"      = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
  "Referer"         = "https://kettlebellsworkouts.com/kettlebell-exercises/"
  "Accept"          = "image/gif,image/webp,*/*"
  "Accept-Language" = "en-US,en;q=0.9"
}

foreach ($name in $retryAborted) {
  $outPath = Join-Path $dest $name
  if (Test-Path $outPath) { Write-Host "SKIP (exists): $name"; continue }
  Start-Sleep -Seconds 2
  $url = "https://kettlebellsworkouts.com/wp-content/uploads/2019/08/$name"
  try {
    Invoke-WebRequest -Uri $url -Headers $headers -OutFile $outPath -TimeoutSec 30
    Write-Host "OK: $name"
  } catch {
    Write-Host "STILL FAIL: $name"
  }
}

# --- Group 2: 400 errors — brute-force year/month combinations ---
# These files exist on the server but not under /2019/08/.
# We try every year from 2018–2024 and every month until we get
# a response larger than 1 KB (real GIF, not an error page).
$retry400 = @(
  "01_slingshot.gif",
  "02_halo.gif",
  "03_good_morning.gif",
  "04_single_arm_deadlift.gif",
  "06_two_handed_swing.gif",
  "05_single_leg_deadlift.gif",
  "07_single_handed_swing.gif",
  "08_alternating_swing.gif",
  "09_swing_snatch.gif",
  "10_clean_press.gif"
)

$client = New-Object System.Net.WebClient
$client.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
$client.Headers.Add("Referer", "https://kettlebellsworkouts.com/")

foreach ($name in $retry400) {
  $outPath = Join-Path $dest $name
  if (Test-Path $outPath) { Write-Host "SKIP (exists): $name"; continue }
  $found = $false
  foreach ($year in @("2018","2020","2021","2022","2023","2024")) {
    if ($found) { break }
    foreach ($month in @("01","02","03","04","05","06","07","08","09","10","11","12")) {
      Start-Sleep -Milliseconds 1500
      $url    = "https://kettlebellsworkouts.com/wp-content/uploads/$year/$month/$name"
      $tmpPath = "$outPath.tmp"
      try {
        $client.DownloadFile($url, $tmpPath)
        $size = (Get-Item $tmpPath).Length
        if ($size -gt 1000) {
          # Real GIF — keep it
          Rename-Item $tmpPath $outPath
          Write-Host "OK ($year/$month): $name"
          $found = $true
          break
        } else {
          # Tiny response = error page — discard
          Remove-Item $tmpPath -ErrorAction SilentlyContinue
        }
      } catch { }
    }
  }
  if (-not $found) { Write-Host "NOT FOUND anywhere: $name" }
}

# --- Special case: renegade row is under /2024/08/ with a dash, not underscore ---
$rnPath = Join-Path $dest "04-renegade-row.gif"
if (-not (Test-Path $rnPath)) {
  Start-Sleep -Seconds 2
  try {
    $client.DownloadFile(
      "https://kettlebellsworkouts.com/wp-content/uploads/2024/08/04-renegade-row.gif",
      $rnPath
    )
    Write-Host "OK: 04-renegade-row.gif"
  } catch {
    Write-Host "FAIL renegade row: $($_.Exception.Message)"
  }
}

Write-Host ""
Write-Host "Total GIFs now in folder: $((Get-ChildItem $dest -Filter '*.gif').Count)"
