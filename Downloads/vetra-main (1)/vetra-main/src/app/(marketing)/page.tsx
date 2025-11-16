"use client";

export const dynamic = 'force-dynamic';

import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { useEffect } from "react";
import { renderCanvas } from "@/components/canvas-effect";

const HomePage = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const timer = setTimeout(() => {
            renderCanvas();
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-black min-h-screen relative">
            <canvas id="canvas" className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
            <div className="relative w-full h-screen z-[1] flex items-center justify-center">
                <GooeyText 
                    texts={["PROMPTING", "IS ALL", "YOU NEED"]}
                    morphTime={1}
                    cooldownTime={0.25}
                    className="w-full"
                    textClassName="text-white"
                />
            </div>
        </div>
    )
};

export default HomePage
