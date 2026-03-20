// ── Helper functions ────────────────────────────────────────────────────────
export function getScoreColor(s) {
  return s >= 9 ? '#D85A30' : s >= 7 ? '#BA7517' : '#888780';
}

export function getMuscleAccent(m) {
  return { hinge:'#D85A30', squat:'#378ADD', push:'#1D9E75', pull:'#BA7517', core:'#534AB7', total:'#D4537E' }[m] || '#888';
}

export function getTagClass(t) {
  if (t === 'Form Builder') return 'tag-form';
  if (t === 'Essential') return 'tag-essential';
  if (t === 'Technical' || t === 'Advanced' || t === 'Mastery Move') return 'tag-technical';
  return 'tag-default';
}

// ── Exercise data ────────────────────────────────────────────────────────────
export const EXERCISES = [
  { id:'deadlift', name:'Two-Hand Kettlebell Deadlift', muscle:'hinge', score:10, tag:'Form Builder', gif:'/assets/gifs/deadlift.gif',
    desc:'The single most important lift to learn first. Stand with the kettlebell between your feet, push your hips back like closing a car door with your butt, grab the handle, then drive your hips forward to stand tall. You are picking up the bell with your hips and legs — not your back.',
    form:'Keep your chest up and back flat. The bell should travel close to your legs. Think "hip hinge" not "squat down." Your shins stay nearly vertical throughout.' },
  { id:'swing', name:'Kettlebell Swing', muscle:'hinge', score:10, tag:'Essential', gif:'/assets/gifs/swing.gif',
    desc:'The king of kettlebell exercises. Hike the bell back between your legs like hiking a football, then explosively snap your hips forward to send it swinging to chest height. The power comes entirely from your hips and glutes — not your arms.',
    form:'At the top, squeeze your glutes hard and stand tall. The arms are just a guide — they do not pull. Keep your shoulders packed down and back. Master the deadlift before attempting this.' },
  { id:'rdl', name:'Single-Leg Romanian Deadlift', muscle:'hinge', score:8, tag:'Balance & Stability', gif:'/assets/gifs/rdl.gif',
    desc:'Hold the bell in one hand, shift your weight to the opposite foot, and hinge forward letting the bell hang as your free leg floats back behind you like a seesaw. Incredible for building hamstrings, glutes, and balance all at once.',
    form:'Keep your hips square to the floor — do not rotate open. A slight bend in the standing knee is fine. Move slowly and with full control. Start without a weight to learn the pattern first.' },
  { id:'clean', name:'Kettlebell Clean', muscle:'hinge', score:9, tag:'Technical', gif:'/assets/gifs/clean.gif',
    desc:'The clean pulls the bell from between your legs up to your shoulder in one smooth arc. At the top, the bell "racks" on your forearm and shoulder — this position is key for pressing exercises. Think of it as a swing that ends at your shoulder instead of chest height.',
    form:'Guide the bell in a tight arc close to your body. The bell should land softly on your arm — if it bangs your wrist, the arc is too wide. Spend time just practicing the rack position before adding speed.' },
  { id:'goblet', name:'Goblet Squat', muscle:'squat', score:10, tag:'Form Builder', gif:'/assets/gifs/goblet.gif',
    desc:'Hold the kettlebell at your chest like a goblet and squat down. This is the best squat for beginners because the weight in front naturally keeps your torso upright. You should be able to get your hips below your knees comfortably.',
    form:'Keep your elbows inside your knees at the bottom — use them to push your knees out. Chest stays tall. Drive through your heels to stand. Try a 3-second descent to build control.' },
  { id:'frontRack', name:'Front Rack Squat', muscle:'squat', score:8, tag:'Intermediate', gif:'/assets/gifs/front-rack.gif',
    desc:'One or two bells held in the "rack" position (resting on your forearms at shoulder height) while you squat. More demanding than a goblet squat because it requires significant core stability and upper back strength to keep upright.',
    form:'The bells rest on your forearms and upper arms — not held by your wrists alone. Elbows stay high. Breathe in at the top, brace your core hard, squat, then exhale on the way up.' },
  { id:'singleLegBox', name:'Single-Leg Box Squat', muscle:'squat', score:7, tag:'Balance', gif:'/assets/gifs/single-leg-box.gif',
    desc:'Stand in front of a chair or low box, extend one leg forward, and slowly lower yourself down on one leg — then stand back up. A superb exercise for single-leg strength that you can do with just bodyweight before adding a bell.',
    form:'Lower slowly and with full control — touch the box gently, do not crash into it. Lean your torso slightly forward as you descend. Drive through your heel to stand. Hold a light bell at your chest for counterbalance.' },
  { id:'lateralSquat', name:'Lateral Squat', muscle:'squat', score:7, tag:'Hip Mobility', gif:'/assets/gifs/lateral-squat.gif',
    desc:'Stand wide with toes turned out slightly. Shift your weight to one side, bending that knee deeply while the other leg stays straight. You will feel a stretch through the inner thigh of the straight leg — great for hip mobility alongside leg strength.',
    form:'Keep the bent-knee foot flat on the floor. Hold the bell at your chest for balance. Chest stays up. Alternate sides each rep or do all reps on one side before switching.' },
  { id:'press', name:'Single-Arm Overhead Press', muscle:'push', score:9, tag:'Essential', gif:'/assets/gifs/press.gif',
    desc:'Hold the kettlebell in the rack position at your shoulder, brace your core, and press it straight overhead until your arm is fully extended and your bicep is next to your ear. Lower back slowly under full control.',
    form:'Pack your shoulder down and back before pressing — do not shrug. Your wrist stays straight (not cocked back). Squeeze your glutes and brace your abs throughout. This is a full-body tension exercise, not just an arm movement.' },
  { id:'floorPress', name:'Kettlebell Floor Press', muscle:'push', score:8, tag:'Chest Focus', gif:'/assets/gifs/floor-press.gif',
    desc:'Lie on your back with knees bent, hold a kettlebell in one hand, and press it up from chest height toward the ceiling. Like a bench press but on the floor — the floor limits elbow depth, which actually protects your shoulder.',
    form:'Keep your elbow at about 45 degrees from your body — not flared straight out. Full pause at the top with a locked elbow, then a slow controlled descent back to the floor. Switch hands between sets.' },
  { id:'pushPress', name:'Push Press', muscle:'push', score:8, tag:'Power', gif:'/assets/gifs/push-press.gif',
    desc:'Like the overhead press, but you use a quick knee-dip to generate momentum that assists getting the bell overhead. This lets you work with heavier weight and builds explosive upper-body power you cannot train with a strict press.',
    form:'The knee dip is shallow and fast — a slight pop, not a full squat. Your legs straighten before the bell leaves shoulder height. Lock out the arm fully overhead and hold for one second before lowering.' },
  { id:'row', name:'Single-Arm Row', muscle:'pull', score:9, tag:'Form Builder', gif:'/assets/gifs/row.gif',
    desc:'Place one hand and same-side knee on a bench or chair for support. Hold a kettlebell in the other hand and pull it toward your hip — like starting a lawnmower. This targets the back muscles responsible for upright posture.',
    form:'Lead with your elbow, not your hand. Think "tuck your elbow toward your back pocket." Keep your spine flat — do not rotate to heave the weight. Squeeze the back muscles hard at the top and lower slowly.' },
  { id:'pullover', name:'Kettlebell Pullover', muscle:'pull', score:7, tag:'Lats & Chest', gif:'/assets/gifs/pullover.gif',
    desc:'Lie on your back, hold the kettlebell above your chest, then slowly arc it back overhead toward the floor behind you. Return under control. This stretches and strengthens the lats and opens up a tight chest.',
    form:'Keep your elbows slightly bent throughout — never locked straight. Your lower back stays pressed against the floor. Move slowly through the full range of motion. This is about quality of movement, not speed.' },
  { id:'halos', name:'Halo', muscle:'pull', score:6, tag:'Shoulder Health', gif:'/assets/gifs/halos.gif',
    desc:'Hold the kettlebell upside down (by the ball, not the handle) at chest height and rotate it in a large circle around your head — one way, then the other. An excellent shoulder warm-up and mobility drill that also quietly works your core.',
    form:'Circle wide and smooth. Keep your core braced so you are not swaying. Move slowly — this is about mobility, not speed. Use a light bell. An essential warm-up move for anyone doing overhead pressing.' },
  { id:'deadbug', name:'Kettlebell Dead Bug', muscle:'core', score:9, tag:'Form Builder', gif:'/assets/gifs/deadbug.gif',
    desc:'Lie on your back, hold the kettlebell above your chest with both hands, knees bent at 90 degrees. Slowly lower one leg toward the floor while keeping your lower back pressed flat against the ground. Return and switch sides. Teaches deep core control essential for protecting your back during all other lifts.',
    form:'Your lower back MUST stay flat on the floor at all times — if it arches, you have gone too far. Breathe out as you lower the leg. Move slowly. This seemingly easy exercise is the foundation of all safe lifting.' },
  { id:'farmersCarry', name:"Farmer's Carry", muscle:'core', score:10, tag:'Essential', gif:'/assets/gifs/farmers-carry.gif',
    desc:"Pick up a heavy kettlebell (or two) and walk. Deceptively simple, yet one of the most effective exercises in existence for core strength, grip, posture, and real-world fitness. If your shoulder tips to one side, your core is working overtime to stop it.",
    form:"Stand tall — do not lean away from the bell. Shoulders back and down. Small deliberate steps. Start with a single bell held at your side (suitcase carry) before using two bells. Go heavier than you think you should." },
  { id:'windmill', name:'Windmill', muscle:'core', score:8, tag:'Obliques', gif:'/assets/gifs/windmill.gif',
    desc:'Press a kettlebell overhead with one arm, feet wide and turned out. Slowly hinge to the side, reaching your free hand down your inner leg toward the floor, while keeping the bell locked overhead. One of the best oblique and hip mobility exercises available.',
    form:'Your eyes stay on the bell the entire time — this is what keeps it locked safely. The hinge is lateral (to the side), not forward. Start without a weight or with a very light bell. A challenging but rewarding movement.' },
  { id:'tgu', name:'Turkish Get-Up', muscle:'core', score:10, tag:'Mastery Move', gif:'/assets/gifs/tgu.gif',
    desc:'Start lying on your back with the bell pressed to the ceiling, then use a series of deliberate steps to stand up — all while keeping the bell locked overhead. Then reverse back to the floor. Complex, but it trains every part of your body simultaneously and is considered by many coaches to be the single greatest kettlebell exercise.',
    form:'Go extremely slow — there is no rushing this. Learn each step as its own standalone move first. Eyes on the bell always. Once you can do this with a shoe balanced on your fist instead of a bell, you are ready for weight.' },
  { id:'snatch', name:'Kettlebell Snatch', muscle:'total', score:9, tag:'Advanced', gif:'/assets/gifs/snatch.gif',
    desc:'A one-arm swing that continues in one fluid motion overhead into a locked-out position above your head. Combines the explosive power of the swing with an overhead lockout. Burns enormous calories, builds total-body power, and is the benchmark lift of kettlebell sport.',
    form:'This is all hip drive — not a muscle move. The bell should float at the top before flipping over your hand. Master the swing and the clean completely before attempting this. Let the bell rest in your open hand at the top.' },
  { id:'complex', name:'Clean + Press Combo', muscle:'total', score:9, tag:'Conditioning', gif:'/assets/gifs/complex.gif',
    desc:'Two moves linked into one sequence: clean the bell to your shoulder, then press it overhead. Lower back to rack, then swing back down. Repeat. Linking movements doubles the work per set and builds both strength and serious conditioning.',
    form:'Breathe in before the clean, exhale at the top of the press. Treat each phase as its own careful movement until the pattern is ingrained — do not rush to link them. This combo reveals any weakness in either the clean or the press.' },
  { id:'thruster', name:'Kettlebell Thruster', muscle:'total', score:8, tag:'Cardio-Strength', gif:'/assets/gifs/thruster.gif',
    desc:'A goblet squat directly connected to an overhead press. Hold the bell at your chest, squat down, and as you drive up use the momentum to press the bell overhead in one fluid movement. Extremely challenging and one of the most efficient full-body conditioning exercises that exists.',
    form:'Time the press so you are still rising from the squat as you begin pressing — not after you have fully stood up. The leg drive feeds the press. Keep the bell close to your body throughout the entire movement.' },
];
