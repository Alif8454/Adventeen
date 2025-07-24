
import React from 'react';

const LogInIllustration: React.FC = () => (
    <svg width="100%" height="100%" viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
        {/* Background elements */}
        <path d="M 20 280 L 100 250 L 70 320 Z" fill="#A5B4FC" opacity="0.6" />
        <path d="M 420 40 L 500 70 L 470 110 Z" fill="#A5B4FC" opacity="0.6" />

        {/* Main Tablet */}
        <rect x="50" y="70" width="400" height="250" rx="20" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
        <rect x="50" y="70" width="400" height="30" rx="0" fill="#F3F4F6" ry="0" />
        <path d="M 50 90 Q 50 70 70 70 L 430 70 Q 450 70 450 90 L 450 90 L 50 90 Z" fill="#F3F4F6" />
        <circle cx="70" cy="85" r="5" fill="#FECACA" />
        <circle cx="90" cy="85"r="5" fill="#FDE68A" />
        <circle cx="110" cy="85" r="5" fill="#A7F3D0" />

        {/* Content on Tablet */}
        <g transform="translate(80, 120)">
            {/* Chart */}
            <path d="M 0 150 L 200 150 M 0 0 L 0 150" stroke="#E5E7EB" strokeWidth="2" />
            <rect x="20" y="90" width="30" height="60" fill="#A78BFA" rx="4" />
            <rect x="60" y="60" width="30" height="90" fill="#F472B6" rx="4" />
            <rect x="100" y="110" width="30" height="40" fill="#60A5FA" rx="4" />
            <rect x="140" y="40" width="30" height="110" fill="#34D399" rx="4" />
            
            {/* Line graph */}
            <path d="M 20 90 C 40 70, 60 40, 80 60 S 120 100, 140 70 S 170 30, 180 40" stroke="#F97316" strokeWidth="3" fill="none" />
            <circle cx="20" cy="90" r="4" fill="#F97316" stroke="white" strokeWidth="2" />
            <circle cx="80" cy="60" r="4" fill="#F97316" stroke="white" strokeWidth="2" />
            <circle cx="140" cy="70" r="4" fill="#F97316" stroke="white" strokeWidth="2" />
            <circle cx="180" cy="40" r="4" fill="#F97316" stroke="white" strokeWidth="2" />

            {/* Checklist on the right */}
            <g transform="translate(250, 0)">
                <line x1="0" y1="15" x2="80" y2="15" stroke="#D1D5DB" strokeWidth="2"/>
                <circle cx="-15" cy="15" r="8" fill="#34D399"/>
                <path d="M -18 15 L -14 19 L -10 12" stroke="white" strokeWidth="2" fill="none" />

                <line x1="0" y1="55" x2="80" y2="55" stroke="#D1D5DB" strokeWidth="2"/>
                <circle cx="-15" cy="55" r="8" fill="#34D399"/>
                <path d="M -18 55 L -14 59 L -10 52" stroke="white" strokeWidth="2" fill="none" />
                
                <line x1="0" y1="95" x2="80" y2="95" stroke="#D1D5DB" strokeWidth="2"/>
                <circle cx="-15" cy="95" r="8" fill="#E5E7EB"/>

                <line x1="0" y1="135" x2="80" y2="135" stroke="#D1D5DB" strokeWidth="2"/>
                <circle cx="-15" cy="135" r="8" fill="#E5E7EB"/>
            </g>
        </g>

        {/* Floating elements */}
        <g transform="translate(30, 200)">
            <rect x="0" y="0" width="60" height="40" fill="#FBBF24" rx="5" />
            <path d="M 5 15 L 20 25 L 55 5" stroke="white" strokeWidth="3" fill="none"/>
        </g>
        <g transform="translate(380, 120)">
            <rect x="0" y="0" width="80" height="50" fill="#FDE68A" rx="5" />
            <path d="M 5 5 L 75 5 M 5 25 L 75 25 M 5 45 L 45 45" stroke="#FBBF24" strokeWidth="2" fill="none"/>
            <path d="M0,0 L40,25 L0,50 Z" fill="#FDBA74"/>
        </g>
         <g transform="translate(40, 40)">
             <rect x="0" y="0" width="40" height="40" fill="#F472B6" rx="20"/>
             <path d="M 12 20 L 20 28 L 28 12" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
    </svg>
);

export default LogInIllustration;
