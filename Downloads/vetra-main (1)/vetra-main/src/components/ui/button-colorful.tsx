"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/index";
import { ArrowUpRight, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant?: "default" | "get-started" | "login" | "cta";
    showIcon?: boolean;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    variant = "default",
    showIcon = true,
    ...props
}: ButtonColorfulProps) {
    const getLabel = () => {
        if (label !== "Explore Components") return label;
        switch (variant) {
            case "get-started":
                return "Commencer Maintenant";
            case "login":
                return "Se Connecter";
            case "cta":
                return "Découvrir AURION";
            default:
                return "Explorer";
        }
    };


    return (
        <Button
            className={cn(
                "relative h-11 px-6 overflow-hidden",
                "bg-black border border-white/20",
                "hover:bg-white hover:text-black",
                "transition-all duration-200",
                "group",
                "font-semibold",
                className
            )}
            {...props}
        >
            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-white group-hover:text-black transition-colors">{getLabel()}</span>
                {variant === "login" ? (
                    <LogIn className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-black transition-colors" />
                )}
            </div>
        </Button>
    );
}

// Variantes pré-configurées pour faciliter l'utilisation
export function ButtonGetStarted({ className, href = "/login", ...props }: Omit<ButtonColorfulProps, "variant"> & { href?: string }) {
    const router = useRouter();
    return (
        <ButtonColorful 
            variant="get-started" 
            className={className} 
            onClick={() => {
                if (href) {
                    router.push(href);
                }
            }}
            {...props} 
        />
    );
}

export function ButtonLogin({ className, href = "/login", ...props }: Omit<ButtonColorfulProps, "variant"> & { href?: string }) {
    const router = useRouter();
    return (
        <ButtonColorful 
            variant="login" 
            className={className} 
            onClick={() => {
                if (href) {
                    router.push(href);
                }
            }}
            {...props} 
        />
    );
}

export function ButtonCTA({ className, href = "/login", ...props }: Omit<ButtonColorfulProps, "variant"> & { href?: string }) {
    const router = useRouter();
    return (
        <ButtonColorful 
            variant="cta" 
            className={cn("h-12 px-8 text-lg", className)} 
            onClick={() => {
                if (href) {
                    router.push(href);
                }
            }}
            {...props} 
        />
    );
}