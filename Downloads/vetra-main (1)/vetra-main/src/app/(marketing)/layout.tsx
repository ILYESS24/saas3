"use client";

import Footer from "@/components/marketing/footer";
import React from 'react';

interface Props {
    children: React.ReactNode
}

export const dynamic = 'force-dynamic';

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen w-full relative bg-white">
            {/* Soft Yellow Glow */}
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at center, #FFF991 0%, transparent 70%)
                    `,
                    opacity: 0.6,
                    mixBlendMode: "multiply",
                }}
            />
            <main className="mx-auto w-full z-40 relative">
                {children}
            </main>
        </div>
    );
};

export default MarketingLayout
