import "./RobotAvatar.css";

function RobotAvatar() {
    return (
        <div className="robot-wrapper" aria-hidden="true">

            {/* Decorative rings */}
            <div className="robot-ring robot-ring--outer" />
            <div className="robot-ring robot-ring--mid" />

            {/* Decorative circuit lines */}
            <svg
                className="robot-circuits"
                viewBox="0 0 340 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Top-right circuit */}
                <path d="M220 60 L260 60 L260 90 L290 90" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
                <circle cx="220" cy="60" r="3" fill="rgba(59,130,246,0.4)" />
                <circle cx="290" cy="90" r="3" fill="rgba(59,130,246,0.4)" />

                {/* Bottom-left circuit */}
                <path d="M120 280 L80 280 L80 250 L50 250" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
                <circle cx="120" cy="280" r="3" fill="rgba(59,130,246,0.4)" />
                <circle cx="50" cy="250" r="3" fill="rgba(59,130,246,0.4)" />

                {/* Right side circuit */}
                <path d="M285 170 L310 170 L310 200 L295 200" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                <circle cx="295" cy="200" r="2.5" fill="rgba(59,130,246,0.35)" />

                {/* Left side circuit */}
                <path d="M55 160 L30 160 L30 190 L45 190" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                <circle cx="45" cy="190" r="2.5" fill="rgba(59,130,246,0.35)" />

                {/* Small dots scattered */}
                <circle cx="300" cy="130" r="2" fill="rgba(59,130,246,0.3)" />
                <circle cx="310" cy="145" r="1.5" fill="rgba(59,130,246,0.2)" />
                <circle cx="35" cy="210" r="2" fill="rgba(59,130,246,0.3)" />
                <circle cx="25" cy="225" r="1.5" fill="rgba(59,130,246,0.2)" />
            </svg>

            {/* Robot body */}
            <div className="robot-body">
                <svg
                    viewBox="0 0 160 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="robot-svg"
                >
                    {/* Antenna */}
                    <line x1="80" y1="18" x2="80" y2="5" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="80" cy="3" r="3.5" fill="#60a5fa" className="robot-antenna-dot" />

                    {/* Head */}
                    <rect x="38" y="18" width="84" height="68" rx="12" fill="#0f2044" stroke="#1e40af" strokeWidth="1.5" />

                    {/* Visor / face panel */}
                    <rect x="46" y="26" width="68" height="44" rx="8" fill="#0a1628" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />

                    {/* Eyes */}
                    <circle cx="67" cy="48" r="11" fill="#0a1628" stroke="#3b82f6" strokeWidth="1.5" />
                    <circle cx="67" cy="48" r="6" fill="#3b82f6" className="robot-eye" />
                    <circle cx="69" cy="46" r="2" fill="#93c5fd" />

                    <circle cx="93" cy="48" r="11" fill="#0a1628" stroke="#3b82f6" strokeWidth="1.5" />
                    <circle cx="93" cy="48" r="6" fill="#3b82f6" className="robot-eye" />
                    <circle cx="95" cy="46" r="2" fill="#93c5fd" />

                    {/* Mouth */}
                    <path d="M62 64 Q80 72 98 64" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" />

                    {/* Ear bolts */}
                    <rect x="28" y="34" width="12" height="22" rx="4" fill="#0f2044" stroke="#1e40af" strokeWidth="1" />
                    <rect x="120" y="34" width="12" height="22" rx="4" fill="#0f2044" stroke="#1e40af" strokeWidth="1" />

                    {/* Neck */}
                    <rect x="70" y="86" width="20" height="12" rx="3" fill="#0f2044" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />

                    {/* Body */}
                    <rect x="24" y="98" width="112" height="70" rx="10" fill="#0f2044" stroke="#1e40af" strokeWidth="1.5" />

                    {/* Chest panel */}
                    <rect x="34" y="108" width="92" height="48" rx="6" fill="#0a1628" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />

                    {/* Chest indicators */}
                    <circle cx="55" cy="124" r="5" fill="#3b82f6" className="robot-indicator" />
                    <circle cx="80" cy="124" r="5" fill="rgba(59,130,246,0.3)" />
                    <circle cx="105" cy="124" r="5" fill="rgba(59,130,246,0.3)" />

                    {/* Chest bar */}
                    <rect x="44" y="138" width="72" height="8" rx="4" fill="#0f2044" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                    <rect x="44" y="138" width="44" height="8" rx="4" fill="rgba(59,130,246,0.35)" className="robot-bar" />

                    {/* Arms */}
                    <rect x="4" y="102" width="22" height="52" rx="6" fill="#0f2044" stroke="#1e40af" strokeWidth="1" />
                    <rect x="134" y="102" width="22" height="52" rx="6" fill="#0f2044" stroke="#1e40af" strokeWidth="1" />

                    {/* Arm joints */}
                    <circle cx="15" cy="108" r="4" fill="#0a1628" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                    <circle cx="145" cy="108" r="4" fill="#0a1628" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />

                    {/* Legs */}
                    <rect x="42" y="168" width="28" height="10" rx="4" fill="#0f2044" stroke="#1e40af" strokeWidth="1" />
                    <rect x="90" y="168" width="28" height="10" rx="4" fill="#0f2044" stroke="#1e40af" strokeWidth="1" />
                </svg>
            </div>

        </div>
    );
}

export default RobotAvatar;