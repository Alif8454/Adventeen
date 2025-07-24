
import React from 'react';

const SignUpIllustration: React.FC = () => (
    <svg width="100%" height="100%" viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
        {/* Background elements */}
        <circle cx="50" cy="100" r="30" fill="#E9D5FF" />
        <circle cx="450" cy="250" r="20" fill="#D1FAE5" />
        <path d="M 400 50 L 480 80 L 450 120 Z" fill="#A5B4FC" opacity="0.6" />

        {/* Main Tablet */}
        <rect x="50" y="70" width="400" height="250" rx="20" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
        <rect x="50" y="70" width="400" height="30" rx="0" fill="#F3F4F6" ry="0" />
        <path d="M 50 90 Q 50 70 70 70 L 430 70 Q 450 70 450 90 L 450 90 L 50 90 Z" fill="#F3F4F6" />
        <circle cx="70" cy="85" r="5" fill="#FECACA" />
        <circle cx="90" cy="85" r="5" fill="#FDE68A" />
        <circle cx="110" cy="85" r="5" fill="#A7F3D0" />

        {/* Content on Tablet */}
        <g transform="translate(70, 110)">
            {/* Person 1 */}
            <rect x="0" y="0" width="80" height="80" rx="10" fill="#F3F4F6"/>
            <circle cx="40" cy="30" r="15" fill="#C7D2FE" />
            <rect x="15" y="50" width="50" height="30" rx="5" fill="#E0E7FF" />

            {/* Person 2 */}
            <rect x="100" y="0" width="80" height="80" rx="10" fill="#F3F4F6"/>
            <circle cx="140" cy="30" r="15" fill="#FDBA74" />
            <rect x="115" y="50" width="50" height="30" rx="5" fill="#FFE4E6" />
            
            {/* Person 3 */}
            <rect x="0" y="100" width="80" height="80" rx="10" fill="#F3F4F6"/>
            <circle cx="40" cy="130" r="15" fill="#A5F3FC" />
            <rect x="15" y="150" width="50" height="30" rx="5" fill="#CFFAFE" />
            
            {/* Person 4 */}
            <rect x="100" y="100" width="80" height="80" rx="10" fill="#F3F4F6"/>
            <circle cx="140" cy="130" r="15" fill="#F9A8D4" />
            <rect x="115" y="150" width="50" height="30" rx="5" fill="#FCE7F3" />

            {/* Puzzle Pieces connecting them */}
            <path d="M 80 40 H 100 L 95 35 M 100 40 L 95 45" stroke="#6366F1" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 40 80 V 100 L 35 95 M 40 100 L 45 95" stroke="#0EA5E9" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 140 80 V 100 L 135 95 M 140 100 L 145 95" stroke="#F43F5E" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 80 140 H 100 L 95 135 M 100 140 L 95 145" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Main puzzle in center */}
            <g transform="translate(230, 40)">
                <path d="M 0 20 v -10 a 10 10 0 0 1 10 -10 h 10 v 10 a 10 10 0 0 0 -10 10 h -10 z" fill="#6366F1" />
                <path d="M 40 20 v -10 a 10 10 0 0 0 -10 -10 h -10 v 10 a 10 10 0 0 1 10 10 h 10 z" fill="#0EA5E9" />
                <path d="M 0 60 v 10 a 10 10 0 0 0 10 10 h 10 v -10 a 10 10 0 0 1 -10 -10 h -10 z" fill="#10B981" />
                <path d="M 40 60 v 10 a 10 10 0 0 1 -10 10 h -10 v -10 a 10 10 0 0 0 10 -10 h 10 z" fill="#F43F5E" />
            </g>
        </g>
        
        {/* Chat bubbles */}
        <path d="M 30 180 C 10 180, 10 150, 30 150 L 100 150 C 120 150, 120 180, 100 180 L 40 180 L 30 190 Z" fill="#A78BFA" />
        <path d="M 350 50 C 330 50, 330 20, 350 20 L 420 20 C 440 20, 440 50, 420 50 L 360 50 L 350 60 Z" fill="#818CF8" />

    </svg>
);

export default SignUpIllustration;
