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
            <main className="mx-auto w-full z-40 relative">
                {children}
            </main>
        </div>
    );
};

export default MarketingLayout
