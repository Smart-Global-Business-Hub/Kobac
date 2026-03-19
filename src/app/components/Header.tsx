import React, { useState } from "react";
import sitelogo from "../../assets/sitelogo.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        if (location.pathname === '/') {
            // If we're on the landing page, just scroll to the section
            const el = document.getElementById(id);
            if (!el) return;

            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        } else {
            // If we're on a different page, navigate to landing page with hash
            navigate(`/#${id}`);
            // After navigation, scroll to the section
            setTimeout(() => {
                const el = document.getElementById(id);
                if (!el) return;

                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = el.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 100);
        }

        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-sm !block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">

                        {/* Logo */}
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => {
                                if (location.pathname === '/') {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                } else {
                                    navigate('/');
                                }
                            }}
                        >
                            <div className="relative">
                                <img
                                    src={sitelogo}
                                    style={{ width: "128px", height: "50px" }}
                                    alt="Logo"
                                    className="object-contain"
                                />
                                <svg
                                    className="absolute top-0 left-0 pointer-events-none"
                                    width="128" height="50" viewBox="0 0 128 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect width="128" height="50" fill="url(#pattern0_29_1434)"/>
                                    <defs>
                                        <pattern id="pattern0_29_1434" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_29_1434" transform="matrix(0.00211864 0 0 0.00540541 -0.0169492 -0.6)"/>
                                        </pattern>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* Desktop Navigation - Forced visible at 1024px+ */}
                        <nav className="hidden lg:!flex items-center gap-8">
                            <NavLink text="About" onClick={() => scrollToSection("about")} />
                            <NavLink text="What We Do" onClick={() => scrollToSection("what-we-do")} />
                            <NavLink text="Impact" onClick={() => scrollToSection("impact")} />
                            <NavLink text="Get Involved" onClick={() => scrollToSection("get-involved")} />
                            <NavLink text="Contact Us" onClick={() => scrollToSection("contact")} />
                        </nav>

                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => scrollToSection("get-involved")}
                                className="bg-[#33BBFF] hover:bg-[#1AA3E8] text-white font-medium text-sm px-6 py-2.5 rounded-full transition-colors"
                            >
                                Donate Now
                            </button>

                            {/* Mobile Menu Button - Forced hidden at 1024px+ */}
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:!hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay - Forced hidden at 1024px+ */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[90] lg:!hidden">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <nav className="absolute top-16 left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-2">
                        <MobileNavLink text="About" onClick={() => scrollToSection("about")} />
                        <MobileNavLink text="What We Do" onClick={() => scrollToSection("what-we-do")} />
                        <MobileNavLink text="Impact" onClick={() => scrollToSection("impact")} />
                        <MobileNavLink text="Get Involved" onClick={() => scrollToSection("get-involved")} />
                        <MobileNavLink text="Contact Us" onClick={() => scrollToSection("contact")} />
                    </nav>
                </div>
            )}

        </>
    );
}

function NavLink({ text, onClick }: { text: string; onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="text-gray-700 hover:text-[#33BBFF] font-medium text-sm transition-colors whitespace-nowrap"
        >
            {text}
        </button>
    );
}

function MobileNavLink({ text, onClick }: { text: string; onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-left py-3 px-4 text-base text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
            {text}
        </button>
    );
}
