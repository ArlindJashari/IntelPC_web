import React from 'react';

export default function CircuitBackground() {
  const leftPaths = [
    { id: 'l1', d: 'M 415,120 H 380 L 350,90 H 220 L 190,60 H 100', dot: [100, 60], duration: '2.5s', delay: '0s' },
    { id: 'l2', d: 'M 415,140 H 370 L 340,110 H 260 L 230,80 H 120', dot: [120, 80], duration: '2.2s', delay: '0.4s' },
    { id: 'l3', d: 'M 415,160 H 350 L 320,130 H 150 L 130,110 H 80', dot: [80, 110], duration: '2.8s', delay: '1.2s' },
    { id: 'l4', d: 'M 415,180 H 300 L 270,150 H 180 L 160,130 H 140', dot: [140, 130], duration: '2.0s', delay: '0.8s' },
    { id: 'l5', d: 'M 415,200 H 320 L 290,230 H 200 L 180,210 H 90', dot: [90, 210], duration: '2.6s', delay: '0.2s' },
    { id: 'l6', d: 'M 415,220 H 360 L 330,250 H 240 L 210,280 H 110', dot: [110, 280], duration: '2.4s', delay: '1.5s' },
    { id: 'l7', d: 'M 415,240 H 390 L 360,270 H 160 L 130,300 H 70', dot: [70, 300], duration: '3.0s', delay: '0.6s' },
    { id: 'l8', d: 'M 415,260 H 400 L 370,290 H 280 L 250,320 H 130', dot: [130, 320], duration: '2.7s', delay: '1.0s' }
  ];

  const rightPaths = [
    { id: 'r1', d: 'M 585,120 H 620 L 650,90 H 780 L 810,60 H 900', dot: [900, 60], duration: '2.4s', delay: '0.2s' },
    { id: 'r2', d: 'M 585,140 H 630 L 660,110 H 740 L 770,80 H 880', dot: [880, 80], duration: '2.6s', delay: '0.7s' },
    { id: 'r3', d: 'M 585,160 H 650 L 680,130 H 850 L 870,110 H 920', dot: [920, 110], duration: '2.1s', delay: '1.1s' },
    { id: 'r4', d: 'M 585,180 H 700 L 730,150 H 820 L 840,130 H 860', dot: [860, 130], duration: '2.8s', delay: '0.3s' },
    { id: 'r5', d: 'M 585,200 H 680 L 711,230 H 800 L 820,210 H 910', dot: [910, 210], duration: '2.3s', delay: '1.4s' },
    { id: 'r6', d: 'M 585,220 H 640 L 670,250 H 760 L 790,280 H 890', dot: [890, 280], duration: '2.5s', delay: '0.5s' },
    { id: 'r7', d: 'M 585,240 H 610 L 640,270 H 840 L 870,300 H 930', dot: [930, 300], duration: '2.9s', delay: '0.9s' },
    { id: 'r8', d: 'M 585,260 H 600 L 630,290 H 720 L 750,320 H 870', dot: [870, 320], duration: '2.7s', delay: '1.3s' }
  ];

  return (
    <svg 
      className="circuit-bg-svg" 
      viewBox="0 0 1000 360" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="circuit-glow-blue" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="circuit-glow-red" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Gradients */}
        <linearGradient id="circuit-grad-left" x1="415" y1="180" x2="70" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A923F1" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#1E1EFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00C4FF" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="circuit-grad-right" x1="585" y1="180" x2="930" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A923F1" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FE5A80" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D32F2F" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="circuit-grad-left-dormant" x1="415" y1="180" x2="70" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A923F1" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#1E1EFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00C4FF" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="circuit-grad-right-dormant" x1="585" y1="180" x2="930" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A923F1" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#FE5A80" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D32F2F" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Grid Lines for Tech Overlay */}
      <g opacity="0.05">
        <path d="M 0,90 H 1000 M 0,180 H 1000 M 0,270 H 1000" stroke="#ffffff" strokeWidth="1" strokeDasharray="5 5" />
        <path d="M 250,0 V 360 M 500,0 V 360 M 750,0 V 360" stroke="#ffffff" strokeWidth="1" strokeDasharray="5 5" />
      </g>

      {/* ================= LEFT SIDE CIRCUIT BOARD ================= */}
      <g className="circuit-group-left">
        {/* Dormant Background Paths */}
        {leftPaths.map((p) => (
          <path
            key={`dormant-${p.id}`}
            d={p.d}
            stroke="url(#circuit-grad-left-dormant)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Animated Active Pulse Paths */}
        {leftPaths.map((p) => (
          <path
            key={`pulse-${p.id}`}
            d={p.d}
            stroke="url(#circuit-grad-left)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#circuit-glow-blue)"
            className="circuit-pulse-line-left"
            style={{
              '--pulse-duration': p.duration,
              '--pulse-delay': p.delay
            }}
          />
        ))}

        {/* Solder Pad Circles */}
        {leftPaths.map((p) => (
          <g key={`node-${p.id}`} className="circuit-node-pulse">
            <circle
              cx={p.dot[0]}
              cy={p.dot[1]}
              r="4"
              fill="#00C4FF"
              filter="url(#circuit-glow-blue)"
            />
            <circle
              cx={p.dot[0]}
              cy={p.dot[1]}
              r="2.5"
              fill="#ffffff"
            />
          </g>
        ))}
      </g>

      {/* ================= RIGHT SIDE CIRCUIT BOARD ================= */}
      <g className="circuit-group-right">
        {/* Dormant Background Paths */}
        {rightPaths.map((p) => (
          <path
            key={`dormant-${p.id}`}
            d={p.d}
            stroke="url(#circuit-grad-right-dormant)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Animated Active Pulse Paths */}
        {rightPaths.map((p) => (
          <path
            key={`pulse-${p.id}`}
            d={p.d}
            stroke="url(#circuit-grad-right)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#circuit-glow-red)"
            className="circuit-pulse-line-right"
            style={{
              '--pulse-duration': p.duration,
              '--pulse-delay': p.delay
            }}
          />
        ))}

        {/* Solder Pad Circles */}
        {rightPaths.map((p) => (
          <g key={`node-${p.id}`} className="circuit-node-pulse">
            <circle
              cx={p.dot[0]}
              cy={p.dot[1]}
              r="4"
              fill="#FE5A80"
              filter="url(#circuit-glow-red)"
            />
            <circle
              cx={p.dot[0]}
              cy={p.dot[1]}
              r="2.5"
              fill="#ffffff"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
