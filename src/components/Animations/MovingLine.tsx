export default function MovingLine(){
    return (
        <div className="max-w-full overflow-hidden">
            <svg width="1441" height="130" viewBox="0 0 1441 130" fill="none" className="max-w-full mx-auto transform scale-300 md:scale-100">
                <g clipPath="url(#line_svg__clip0)">
                    <path opacity="0.6" d="M1647 162c-511.36-196.843-865.657-3.286-1451.409-50.104-140.832-11.257-116.52-85.153-84.54-99.376 31.98-14.223 60.679 10.151 59.619 40.133-1.499 42.373-71.331 44.571-106.06 40.373-33.672-4.07-68.892-8.495-104.112-14.191" stroke="url(#line_svg__paint0_linear)" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 20" className="svg"></path>
                </g>
                <defs>
                    <linearGradient id="line_svg__paint0_linear" x1="1450" y1="110" x2="0" y2="133.898" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#395a3f" stopOpacity="0"></stop>
                        <stop offset="0.078" stopColor="#395a3f"></stop>
                        <stop offset="0.498" stopColor="#395a3f"></stop>
                        <stop offset="0.932" stopColor="#395a3f" stopOpacity="0.59"></stop>
                        <stop offset="1" stopColor="#395a3f" stopOpacity="0"></stop>
                    </linearGradient>
                    <clipPath id="line_svg__clip0">
                        <path fill="#fff" d="M-47 0h1642v130H-47z"></path>
                    </clipPath>
                </defs>
                <style jsx>{`
                @keyframes heartbeat {
                    0% {
                        stroke-dashoffset: 0
                    }
                    to { 
                        stroke-dashoffset: -100%
                    }
                }

                .svg {
                    animation: 70s linear 0s infinite normal none running heartbeat;
                }
                `}</style>
            </svg>
        </div>
    )
}