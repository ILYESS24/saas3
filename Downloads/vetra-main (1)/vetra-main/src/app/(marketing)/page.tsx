"use client";

export const dynamic = 'force-dynamic';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, ArrowUpRight, Play, Star } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/marketing/navbar";
import { useRouter } from "next/navigation";
import { LogoCloud } from "@/components/logo-cloud-4";
import { Footerdemo } from "@/components/ui/footer-section";

const HomePage = () => {
    const router = useRouter();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Composant de bouton avec le style moderne
    const ModernButton = ({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) => (
        <button
            onClick={onClick}
            className={`flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full font-semibold text-base hover:bg-gray-900 transition-colors shadow-lg ${className}`}
        >
            <span>{children}</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-black" />
            </div>
        </button>
    );

    const faqs = [
        {
            question: "What services does Awake Agency offer?",
            answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance."
        },
        {
            question: "How long does a typical project take?",
            answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance."
        },
        {
            question: "How is pricing structured at Awake Agency?",
            answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance."
        },
        {
            question: "Do you offer ongoing support after project completion?",
            answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance."
        },
        {
            question: "How often will I receive updates on my project?",
            answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance."
        },
        {
            question: "How do I get started with Awake Agency?",
            answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance."
        }
    ];

    return (
        <div className="min-h-screen w-full relative">
            {/* Bouton de connexion en haut à droite */}
            <button
                onClick={() => router.push("/login")}
                className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full font-semibold text-base hover:bg-gray-900 transition-colors shadow-lg"
            >
                <span>Let's Collaborate</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
            </button>

            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6" style={{
                background: "linear-gradient(135deg, #e0f2fe 0%, #fef3c7 50%, #fce7f3 100%)"
            }}>
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
                        Building bold brands with <span className="font-serif italic">thoughtful design</span>
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                        At Awake, we help small startups tackle the world's biggest challenges with tailored solutions, guiding you from strategy to success in a competitive market.
                    </p>
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <ModernButton onClick={() => router.push("/login")}>
                            Get Started
                        </ModernButton>
                        <ModernButton onClick={() => {}}>
                            Watch Video
                        </ModernButton>
                    </div>
                    
                    {/* Client Logos */}
                    <div className="flex items-center justify-center gap-8 mb-8 opacity-60">
                        <div className="text-gray-600 text-sm">Trusted by 200+ clients</div>
                    </div>
                    <div className="flex items-center justify-center gap-12 flex-wrap">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="w-24 h-12 bg-gray-300 rounded"></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logo Cloud Section */}
            <section className="py-12 bg-white">
                <LogoCloud logos={[
                    { src: "https://cdn.simpleicons.org/vercel/000000", alt: "Vercel" },
                    { src: "https://cdn.simpleicons.org/openai/000000", alt: "OpenAI" },
                    { src: "https://cdn.simpleicons.org/github/000000", alt: "GitHub" },
                    { src: "https://cdn.simpleicons.org/stripe/000000", alt: "Stripe" },
                    { src: "https://cdn.simpleicons.org/figma/000000", alt: "Figma" },
                    { src: "https://cdn.simpleicons.org/notion/000000", alt: "Notion" },
                    { src: "https://cdn.simpleicons.org/slack/000000", alt: "Slack" },
                    { src: "https://cdn.simpleicons.org/discord/000000", alt: "Discord" },
                ]} />
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                        Crafting exceptional, well experienced & technology driven strategies to drive impactful results with
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <div className="px-6 py-3 bg-purple-100 rounded-full text-purple-700 font-semibold">Creativity</div>
                        <div className="px-6 py-3 bg-blue-100 rounded-full text-blue-700 font-semibold flex items-center gap-2">
                            <span>💡</span> Innovation
                        </div>
                        <div className="px-6 py-3 bg-orange-100 rounded-full text-orange-700 font-semibold">Strategy</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-6xl font-bold text-gray-900 mb-2">+40</div>
                            <div className="text-gray-600">Total Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl font-bold text-gray-900 mb-2">+15</div>
                            <div className="text-gray-600">Years of Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl font-bold text-gray-900 mb-2">+12</div>
                            <div className="text-gray-600">Design Awards</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
                        Where innovation meets aesthetics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                        <Card className="p-6 bg-purple-100 border-0">
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Strategy</h3>
                        </Card>
                        <Card className="p-6 bg-pink-100 border-0">
                            <div className="text-4xl mb-4">💻</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
                        </Card>
                        <Card className="p-6 bg-blue-100 border-0">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Marketing</h3>
                        </Card>
                        <Card className="p-6 bg-orange-100 border-0">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Designing</h3>
                        </Card>
                        <Card className="p-6 bg-green-100 border-0">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Reporting</h3>
                        </Card>
                    </div>
                    <div className="bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-white text-2xl font-semibold">Start Your Creative Journey with Us!</div>
                        <div className="flex gap-4">
                            <ModernButton onClick={() => router.push("/login")}>
                                Let's Collaborate
                            </ModernButton>
                            <ModernButton onClick={() => {}}>
                                View Portfolio
                            </ModernButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="work" className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
                        How we transformed a small business's online presence
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="overflow-hidden border-0 shadow-lg">
                            <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-2xl font-bold mb-2">Genome</div>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Brand Identity</span>
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">UX Research</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="overflow-hidden border-0 shadow-lg">
                            <div className="h-64 bg-gradient-to-br from-pink-400 to-orange-500 relative">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-2xl font-bold mb-2">Academy.co</div>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Product Design</span>
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Interaction Design</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="overflow-hidden border-0 shadow-lg">
                            <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 relative">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-2xl font-bold mb-2">FlowBank</div>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">UX Research</span>
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Interface Design</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="overflow-hidden border-0 shadow-lg">
                            <div className="h-64 bg-gradient-to-br from-yellow-400 to-red-500 relative">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-2xl font-bold mb-2">Hotto</div>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Visual Storytelling</span>
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Web & Mobile Design</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
                        Meet the creative minds behind our success
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Logan Dang", role: "Wordpress Developer", bg: "bg-blue-100" },
                            { name: "Ana Belić", role: "Social Media Specialist", bg: "bg-orange-100" },
                            { name: "Brian Hanley", role: "Product Designer", bg: "bg-yellow-100" },
                            { name: "Darko Stanković", role: "UI Designer", bg: "bg-blue-100" }
                        ].map((member, i) => (
                            <Card key={i} className={`${member.bg} border-0 p-6 text-center`}>
                                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                                <div className="flex justify-center gap-2 mt-4">
                                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
                        What our satisfied customers are saying about us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <Card className="bg-gray-900 text-white border-0 p-8">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-lg mb-6">
                                Awake's expertise transformed my vision into success with creativity, precision, and a deep understanding of my goals.
                            </p>
                            <div>
                                <div className="font-semibold">Sarah Mitchell</div>
                                <div className="text-gray-400">Founder of Chipsland</div>
                            </div>
                        </Card>
                        <Card className="bg-yellow-100 border-0 p-8 text-center">
                            <div className="text-7xl font-bold text-gray-900 mb-4">91%</div>
                            <p className="text-gray-700 text-lg">clients recommend our design services.</p>
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-gray-900 text-white border-0 p-8">
                            <p className="text-lg mb-6">
                                Their creativity and attention to detail transformed our brand completely!
                            </p>
                        </Card>
                        <Card className="bg-white border-2 border-gray-200 p-8">
                            <p className="text-lg mb-6 text-gray-700">
                                "Awake Design Agency brought our ideas to life with exceptional creativity and precision, exceeding expectations."
                            </p>
                            <div>
                                <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                                <div className="text-gray-600">Marketing Head at TalentConnect</div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
                        Pick the plan that fits your start-up
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="bg-yellow-100 border-0 p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                            <p className="text-gray-600 mb-6">For companies who need design support. One request at a time</p>
                            <div className="text-5xl font-bold text-gray-900 mb-8">
                                $2500<span className="text-2xl text-gray-600">/month</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>Design Updates Every 2 Days</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>Mid-level Designer</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>SEO optimization</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>Monthly analytics</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>2x Calls Per Month</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>License free assets</span>
                                </li>
                            </ul>
                            <ModernButton onClick={() => router.push("/login")} className="w-full">
                                Let's Collaborate
                            </ModernButton>
                        </Card>
                        <Card className="bg-purple-100 border-0 p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                            <p className="text-gray-600 mb-6">2x the speed. Great for an MVP, Web App or complex problem</p>
                            <div className="text-5xl font-bold text-gray-900 mb-8">
                                $3500<span className="text-2xl text-gray-600">/month</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>Design Updates Daily</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>Senior-level Designer</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>AI Advisory Framework</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>Full-service Creative Team</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>4x Calls Per Month</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    <span>License free assets</span>
                                </li>
                            </ul>
                            <ModernButton onClick={() => router.push("/login")} className="w-full">
                                Let's Collaborate
                            </ModernButton>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
                        Got questions? We've got answers
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="border-2 border-gray-200">
                                <button
                                    className="w-full p-6 flex items-center justify-between text-left"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6 text-gray-600">
                                        {faq.answer}
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section id="awards" className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
                        Accolades and achievements celebration our design excellence
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-0 shadow-lg p-8">
                            <div className="text-5xl mb-4">🏆</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Webflow Awards</h3>
                            <p className="text-gray-600 mb-4">Celebrated for cutting-edge interaction design and seamless user experiences.</p>
                            <div className="text-gray-400">2025</div>
                        </Card>
                        <Card className="border-0 shadow-lg p-8">
                            <div className="text-5xl mb-4">🎨</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dribbble Awards</h3>
                            <p className="text-gray-600 mb-4">Recognized for creative excellence and innovative design solutions</p>
                            <div className="text-gray-400">2024</div>
                        </Card>
                        <Card className="border-0 shadow-lg p-8">
                            <div className="text-5xl mb-4">⭐</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">awwwards Awards</h3>
                            <p className="text-gray-600 mb-4">Honored with the Best Website Design for creativity, usability, and innovation.</p>
                            <div className="text-gray-400">2023</div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6" style={{
                background: "linear-gradient(135deg, #e0f2fe 0%, #fef3c7 50%, #fce7f3 100%)"
            }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Innovative Solutions for bold brands
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Looking to elevate your brand? We craft immersive experiences that captivate, engage, and make your business unforgettable in every interaction.
                    </p>
                    <ModernButton onClick={() => router.push("/login")} className="px-8 py-6 text-lg">
                        Let's craft together
                    </ModernButton>
                </div>
            </section>

            {/* Footer */}
            <Footerdemo />
        </div>
    )
};

export default HomePage
