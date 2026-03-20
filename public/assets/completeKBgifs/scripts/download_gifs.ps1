# ============================================================
# download_gifs.ps1
# First-pass script: downloads all 52 kettlebell GIFs from
# kettlebellsworkouts.com into the parent folder.
#
# HOW IT WORKS:
#   - Builds a list of every GIF URL found by scraping the page
#   - Most GIFs live under /wp-content/uploads/2019/08/
#   - One GIF (renegade row) lives under /wp-content/uploads/2024/08/
#   - Uses System.Net.WebClient with browser-like headers to
#     avoid basic bot detection
#   - Loops through every URL, downloads to $dest, prints OK/FAIL
#   - Reports a final success count and lists any failures
#
# RUN:
#   powershell -ExecutionPolicy Bypass -File download_gifs.ps1
# ============================================================

$dest = "C:\Users\romvp\github\Romi110.github.io\httpskettlebellsworkouts gifs"
$base  = "https://kettlebellsworkouts.com/wp-content/uploads/2019/08/"
$base2 = "https://kettlebellsworkouts.com/wp-content/uploads/2024/08/"

# Full list of GIFs scraped from the page, in page order
$gifs = @(
  @{url="$base`01_slingshot.gif";                name="01_slingshot.gif"},
  @{url="$base`02_halo.gif";                     name="02_halo.gif"},
  @{url="$base`03_good_morning.gif";             name="03_good_morning.gif"},
  @{url="$base`17_overhead_warm_up.gif";         name="17_overhead_warm_up.gif"},
  @{url="$base`19_bottoms_up_clean.gif";         name="19_bottoms_up_clean.gif"},
  @{url="$base`04_single_arm_deadlift.gif";      name="04_single_arm_deadlift.gif"},
  @{url="$base`06_two_handed_swing.gif";         name="06_two_handed_swing.gif"},
  @{url="$base`18_clean.gif";                    name="18_clean.gif"},
  @{url="$base`05_single_leg_deadlift.gif";      name="05_single_leg_deadlift.gif"},
  @{url="$base`07_single_handed_swing.gif";      name="07_single_handed_swing.gif"},
  @{url="$base`08_alternating_swing.gif";        name="08_alternating_swing.gif"},
  @{url="$base`41_side_stepping_swing.gif";      name="41_side_stepping_swing.gif"},
  @{url="$base`52_lateral_swings.gif";           name="52_lateral_swings.gif"},
  @{url="$base`49_one_legged_clean.gif";         name="49_one_legged_clean.gif"},
  @{url="$base`39_snatch.gif";                   name="39_snatch.gif"},
  @{url="$base`11_goblet_squat.gif";             name="11_goblet_squat.gif"},
  @{url="$base`12_racked_squat.gif";             name="12_racked_squat.gif"},
  @{url="$base`13_racked_reverse_lunge.gif";     name="13_racked_reverse_lunge.gif"},
  @{url="$base`21_bob_and_weave.gif";            name="21_bob_and_weave.gif"},
  @{url="$base`45_tactical_lunge.gif";           name="45_tactical_lunge.gif"},
  @{url="$base`23_lunge_with_rotation.gif";      name="23_lunge_with_rotation.gif"},
  @{url="$base`24_double_lunge.gif";             name="24_double_lunge.gif"},
  @{url="$base`22_side_lunge.gif";               name="22_side_lunge.gif"},
  @{url="$base`46_overhead_squat.gif";           name="46_overhead_squat.gif"},
  @{url="$base`36_overhead_reverse_lunge.gif";   name="36_overhead_reverse_lunge.gif"},
  @{url="$base`37_overhead_walking_lunge.gif";   name="37_overhead_walking_lunge.gif"},
  @{url="$base`50_side_lunge_and_clean.gif";     name="50_side_lunge_and_clean.gif"},
  @{url="$base`44_pistol_squat.gif";             name="44_pistol_squat.gif"},
  @{url="$base`14_regular_row.gif";              name="14_regular_row.gif"},
  @{url="$base`15_suitcase_row.gif";             name="15_suitcase_row.gif"},
  @{url="$base2`04-renegade-row.gif";            name="04-renegade-row.gif"},
  @{url="$base`20_high_pulls.gif";               name="20_high_pulls.gif"},
  @{url="$base`27_overhead_press.gif";           name="27_overhead_press.gif"},
  @{url="$base`31_two_handed_squat_and_press.gif"; name="31_two_handed_squat_and_press.gif"},
  @{url="$base`28_push_press.gif";               name="28_push_press.gif"},
  @{url="$base`25_tall_kneeling_press.gif";      name="25_tall_kneeling_press.gif"},
  @{url="$base`26_half_kneeling_press.gif";      name="26_half_kneeling_press.gif"},
  @{url="$base`32_thruster.gif";                 name="32_thruster.gif"},
  @{url="$base`30_clean_and_push_press.gif";     name="30_clean_and_push_press.gif"},
  @{url="$base`34_lunge_and_press.gif";          name="34_lunge_and_press.gif"},
  @{url="$base`33_static_lunge_and_press.gif";   name="33_static_lunge_and_press.gif"},
  @{url="$base`35_clean_squat_and_press.gif";    name="35_clean_squat_and_press.gif"},
  @{url="$base`42_bottoms_up_press.gif";         name="42_bottoms_up_press.gif"},
  @{url="$base`43_farmers_carry.gif";            name="43_farmers_carry.gif"},
  @{url="$base`38_sit_and_press.gif";            name="38_sit_and_press.gif"},
  @{url="$base`29_windmill.gif";                 name="29_windmill.gif"},
  @{url="$base`16_turkish_get_up.gif";           name="16_turkish_get_up.gif"},
  @{url="$base`40_hip_thrust.gif";               name="40_hip_thrust.gif"},
  @{url="$base`47_reverse_turkish_get_up.gif";   name="47_reverse_turkish_get_up.gif"},
  @{url="$base`48_deck_squat.gif";               name="48_deck_squat.gif"},
  @{url="$base`09_swing_snatch.gif";             name="09_swing_snatch.gif"},
  @{url="$base`10_clean_press.gif";              name="10_clean_press.gif"}
)

# WebClient with browser-like headers to avoid basic bot detection
$client = New-Object System.Net.WebClient
$client.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
$client.Headers.Add("Referer", "https://kettlebellsworkouts.com/")

$success = 0
$failed  = @()

foreach ($gif in $gifs) {
  $outPath = Join-Path $dest $gif.name
  try {
    $client.DownloadFile($gif.url, $outPath)
    Write-Host "OK: $($gif.name)"
    $success++
  } catch {
    Write-Host "FAIL: $($gif.name) — $($_.Exception.Message)"
    $failed += $gif.name
  }
}

Write-Host ""
Write-Host "Downloaded: $success / $($gifs.Count)"
if ($failed.Count -gt 0) {
  Write-Host "Failed (run retry_gifs.ps1 next):"
  $failed | ForEach-Object { Write-Host "  $_" }
}
