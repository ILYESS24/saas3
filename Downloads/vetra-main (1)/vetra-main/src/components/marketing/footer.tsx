import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-white/10 pt-16 pb-8 px-6 lg:px-8 w-full max-w-screen-xl mx-auto lg:pt-32">
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-center gap-2">
                            <Icons.icon className="w-auto h-5" />
                            <span className="text-base md:text-lg font-medium text-black">
                                Vetra
                            </span>
                        </div>
                        <p className="text-black/70 mt-4 text-sm text-start">
                            AI-powered platform that transforms your marketing workflow in seconds.
                        </p>
                    </div>
                </Container>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.1} className="h-auto">
                            <h3 className="text-base font-medium text-black">
                                Product
                            </h3>
                            <ul className="mt-4 text-sm text-black/70 space-y-4">
                                <li className="mt-2">
                                    <Link href="/#features" className="link hover:text-black transition-all duration-300">
                                        Features
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/#pricing" className="link hover:text-black transition-all duration-300">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/#integrations" className="link hover:text-black transition-all duration-300">
                                        Integrations
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/#technology" className="link hover:text-black transition-all duration-300">
                                        Technology
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.2} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-black">
                                    Solutions
                                </h3>
                                <ul className="mt-4 text-sm text-black/70 space-y-4">
                                    <li>
                                        <Link href="/register" className="link hover:text-black transition-all duration-300">
                                            Content Creators
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/register" className="link hover:text-black transition-all duration-300">
                                            Businesses
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/register" className="link hover:text-black transition-all duration-300">
                                            Education
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/register" className="link hover:text-black transition-all duration-300">
                                            Enterprise
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.3} className="h-auto">
                            <h3 className="text-base font-medium text-black">
                                Resources
                            </h3>
                            <ul className="mt-4 text-sm text-black/70 space-y-4">
                                <li className="mt-2">
                                    <Link href="/#faq" className="link hover:text-black transition-all duration-300">
                                        FAQ
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/#technology" className="link hover:text-black transition-all duration-300">
                                        Documentation
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/register" className="link hover:text-black transition-all duration-300">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.4} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-black">
                                    Company
                                </h3>
                                <ul className="mt-4 text-sm text-black/70 space-y-4">
                                    <li>
                                        <Link href="/#features" className="link hover:text-black transition-all duration-300">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/register" className="link hover:text-black transition-all duration-300">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/register" className="link hover:text-black transition-all duration-300">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>

            <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
                <div className="mt-8 md:flex md:items-center justify-center footer w-full">
                    <p className="text-sm text-black/70 mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Vetra. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    )
};

export default Footer
