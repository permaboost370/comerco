// Flat botanical SVG illustrations for each crop — free to use, no external deps

export function TomatoSVG() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tomato">
      <circle cx="40" cy="50" r="26" fill="#e74c3c" />
      <circle cx="40" cy="50" r="26" fill="url(#tomatoShine)" />
      <path d="M40 28 Q37 20 30 19 Q38 22 36 28 Q40 20 44 19 Q42 23 44 28 Q46 19 52 21 Q44 23 40 28Z" fill="#27ae60" />
      <line x1="40" y1="28" x2="40" y2="24" stroke="#27ae60" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="33" cy="43" r="5" fill="rgba(255,255,255,0.18)" />
      <defs>
        <radialGradient id="tomatoShine" cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function OliveSVG() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Olive branch">
      {/* Branch */}
      <path d="M20 62 Q40 40 60 20" stroke="#6b7c3f" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Leaves */}
      <ellipse cx="50" cy="28" rx="11" ry="5" fill="#7da741" transform="rotate(-45 50 28)" />
      <ellipse cx="38" cy="40" rx="11" ry="5" fill="#5e8e32" transform="rotate(-45 38 40)" />
      <ellipse cx="27" cy="52" rx="10" ry="4.5" fill="#7da741" transform="rotate(-45 27 52)" />
      {/* Olives */}
      <ellipse cx="55" cy="22" rx="7" ry="9" fill="#3d5a1f" />
      <ellipse cx="55" cy="22" rx="3" ry="4" fill="rgba(255,255,255,0.12)" transform="translate(-2,-2)" />
      <ellipse cx="33" cy="46" rx="6" ry="8" fill="#4a6e26" />
      <circle cx="42" cy="33" r="5.5" fill="#3d5a1f" />
    </svg>
  );
}

export function GrapeSVG() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grape cluster">
      {/* Stem */}
      <path d="M40 10 Q40 16 40 18" stroke="#7c5c3e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Leaf */}
      <path d="M40 10 Q28 4 22 14 Q32 12 40 10Z" fill="#5a9e6f" />
      <path d="M40 10 Q52 4 58 14 Q48 12 40 10Z" fill="#4a8e5f" />
      {/* Grapes — row 1 */}
      <circle cx="40" cy="24" r="8" fill="#7b4ea6" />
      {/* Row 2 */}
      <circle cx="30" cy="36" r="8" fill="#8b5cb8" />
      <circle cx="50" cy="36" r="8" fill="#7b4ea6" />
      {/* Row 3 */}
      <circle cx="23" cy="49" r="7.5" fill="#6a3d9a" />
      <circle cx="40" cy="49" r="7.5" fill="#8b5cb8" />
      <circle cx="57" cy="49" r="7.5" fill="#7b4ea6" />
      {/* Row 4 */}
      <circle cx="31" cy="61" r="7" fill="#7b4ea6" />
      <circle cx="49" cy="61" r="7" fill="#6a3d9a" />
      {/* Shine on each */}
      <circle cx="36" cy="21" r="2.5" fill="rgba(255,255,255,0.22)" />
      <circle cx="26" cy="33" r="2.5" fill="rgba(255,255,255,0.22)" />
      <circle cx="46" cy="33" r="2.5" fill="rgba(255,255,255,0.22)" />
    </svg>
  );
}

export function CornSVG() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Corn">
      {/* Husk leaves */}
      <path d="M35 65 Q20 50 25 25 Q30 45 40 50Z" fill="#6aad3d" />
      <path d="M45 65 Q60 50 55 25 Q50 45 40 50Z" fill="#5a9e30" />
      {/* Cob body */}
      <rect x="29" y="20" width="22" height="42" rx="11" fill="#f5c842" />
      {/* Kernel rows */}
      <circle cx="36" cy="27" r="3" fill="#e8a800" />
      <circle cx="44" cy="27" r="3" fill="#e8a800" />
      <circle cx="36" cy="34" r="3" fill="#f5c842" />
      <circle cx="44" cy="34" r="3" fill="#f5c842" />
      <circle cx="36" cy="41" r="3" fill="#e8a800" />
      <circle cx="44" cy="41" r="3" fill="#e8a800" />
      <circle cx="36" cy="48" r="3" fill="#f5c842" />
      <circle cx="44" cy="48" r="3" fill="#f5c842" />
      <circle cx="36" cy="55" r="3" fill="#e8a800" />
      <circle cx="44" cy="55" r="3" fill="#e8a800" />
      {/* Silks */}
      <path d="M40 20 Q38 12 34 8" stroke="#c8a100" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M40 20 Q41 11 44 7" stroke="#c8a100" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M40 20 Q43 13 48 10" stroke="#c8a100" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function CitrusSVG() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Citrus orange">
      {/* Outer fruit */}
      <circle cx="40" cy="42" r="28" fill="#f5821f" />
      <circle cx="40" cy="42" r="28" fill="url(#citrusGrad)" />
      {/* Slice lines */}
      <path d="M40 16 L40 68" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.3" />
      <path d="M14 42 L66 42" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.3" />
      <path d="M20 22 L60 62" stroke="#fff" strokeWidth="1.2" strokeOpacity="0.2" />
      <path d="M60 22 L20 62" stroke="#fff" strokeWidth="1.2" strokeOpacity="0.2" />
      {/* Segments highlight */}
      <circle cx="40" cy="42" r="16" fill="#f9a84d" fillOpacity="0.4" />
      <circle cx="40" cy="42" r="6" fill="#ffe082" fillOpacity="0.5" />
      {/* Stem */}
      <path d="M40 14 Q40 8 44 6" stroke="#4e7d2c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Leaf */}
      <ellipse cx="46" cy="8" rx="9" ry="4" fill="#5a9e30" transform="rotate(-20 46 8)" />
      <defs>
        <radialGradient id="citrusGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="rgba(255,220,100,0.25)" />
          <stop offset="100%" stopColor="rgba(180,70,0,0.15)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function WheatSVG() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wheat stalk">
      {/* Main stalk */}
      <line x1="40" y1="72" x2="40" y2="10" stroke="#c8a14f" strokeWidth="3" strokeLinecap="round" />
      {/* Grain kernels - main spike */}
      <ellipse cx="40" cy="14" rx="4.5" ry="6" fill="#e8b84b" />
      <ellipse cx="40" cy="23" rx="4.5" ry="6" fill="#d4a43a" />
      <ellipse cx="40" cy="32" rx="4.5" ry="6" fill="#e8b84b" />
      <ellipse cx="40" cy="41" rx="4.5" ry="6" fill="#d4a43a" />
      {/* Side branches left */}
      <line x1="40" y1="28" x2="28" y2="20" stroke="#c8a14f" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="25" cy="17" rx="3.5" ry="5" fill="#e8b84b" transform="rotate(-30 25 17)" />
      <line x1="40" y1="38" x2="26" y2="30" stroke="#c8a14f" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="23" cy="27" rx="3.5" ry="5" fill="#d4a43a" transform="rotate(-30 23 27)" />
      {/* Side branches right */}
      <line x1="40" y1="28" x2="52" y2="20" stroke="#c8a14f" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="55" cy="17" rx="3.5" ry="5" fill="#d4a43a" transform="rotate(30 55 17)" />
      <line x1="40" y1="38" x2="54" y2="30" stroke="#c8a14f" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="57" cy="27" rx="3.5" ry="5" fill="#e8b84b" transform="rotate(30 57 27)" />
      {/* Leaf */}
      <path d="M40 55 Q28 52 24 44" stroke="#7da741" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M40 62 Q52 59 56 52" stroke="#6b9430" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Awns */}
      <line x1="40" y1="10" x2="38" y2="4" stroke="#c8a14f" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="10" x2="41" y2="3" stroke="#c8a14f" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="10" x2="43" y2="5" stroke="#c8a14f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function VegetableSVG() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Broccoli vegetable">
      {/* Stem */}
      <rect x="35" y="52" width="10" height="22" rx="4" fill="#5a9a2a" />
      {/* Side stalks */}
      <path d="M37 60 Q26 55 22 46" stroke="#5a9a2a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M43 60 Q54 55 58 46" stroke="#5a9a2a" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Florets */}
      <circle cx="40" cy="34" r="16" fill="#4caf50" />
      <circle cx="24" cy="42" r="11" fill="#4caf50" />
      <circle cx="56" cy="42" r="11" fill="#4caf50" />
      {/* Floret texture bumps */}
      <circle cx="35" cy="30" r="5" fill="#45a045" />
      <circle cx="45" cy="28" r="5" fill="#3d9040" />
      <circle cx="40" cy="40" r="5" fill="#45a045" />
      <circle cx="20" cy="40" r="4" fill="#3d9040" />
      <circle cx="28" cy="44" r="4" fill="#45a045" />
      <circle cx="53" cy="40" r="4" fill="#45a045" />
      <circle cx="60" cy="44" r="4" fill="#3d9040" />
    </svg>
  );
}

export function FlowerSVG() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ornamental flower">
      {/* Stem */}
      <path d="M40 72 Q38 60 40 50" stroke="#5a9a2a" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Leaf */}
      <path d="M40 62 Q30 58 28 52 Q36 56 40 62Z" fill="#6aad3d" />
      {/* Petals */}
      <ellipse cx="40" cy="28" rx="7" ry="14" fill="#e91e8c" />
      <ellipse cx="40" cy="28" rx="7" ry="14" fill="#f06292" transform="rotate(45 40 38)" />
      <ellipse cx="40" cy="28" rx="7" ry="14" fill="#e91e8c" transform="rotate(90 40 38)" />
      <ellipse cx="40" cy="28" rx="7" ry="14" fill="#f06292" transform="rotate(135 40 38)" />
      <ellipse cx="40" cy="28" rx="7" ry="14" fill="#e91e8c" transform="rotate(180 40 38)" />
      <ellipse cx="40" cy="28" rx="7" ry="14" fill="#f06292" transform="rotate(225 40 38)" />
      <ellipse cx="40" cy="28" rx="7" ry="14" fill="#e91e8c" transform="rotate(270 40 38)" />
      <ellipse cx="40" cy="28" rx="7" ry="14" fill="#f06292" transform="rotate(315 40 38)" />
      {/* Center */}
      <circle cx="40" cy="38" r="10" fill="#ffcc02" />
      <circle cx="40" cy="38" r="6" fill="#f5a800" />
      <circle cx="37" cy="35" r="2" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

// Map crop label → illustration component
export const cropIllustrations: Record<string, React.ComponentType> = {
  "Ντομάτα": TomatoSVG,
  "Ελιά": OliveSVG,
  "Αμπέλι": GrapeSVG,
  "Καλαμπόκι": CornSVG,
  "Εσπεριδοειδή": CitrusSVG,
  "Σιτάρι": WheatSVG,
  "Λαχανικά": VegetableSVG,
  "Καλλωπιστικά": FlowerSVG,
};
