import React, { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <span className="text-2xl lg:text-3xl font-bold text-[#33BBFF]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Kobac
                            </span>
                            <span className="hidden sm:block text-xs text-gray-500 mt-1">Empowerment & Development</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <NavLink text="About" onClick={() => scrollToSection("about")} />
                            <NavLink text="What We Do" onClick={() => scrollToSection("what-we-do")} />
                            <NavLink text="Impact" onClick={() => scrollToSection("impact")} />
                            <NavLink text="Get Involved" onClick={() => scrollToSection("get-involved")} />
                            <NavLink text="Contact Us" onClick={() => scrollToSection("contact")} />
                        </nav>

                        <div className="flex items-center gap-3">
                            {/* Donate Button */}
                            <button
                                type="button"
                                onClick={() => scrollToSection("get-involved")}
                                className="bg-[#33BBFF] hover:bg-[#1AA3E8] text-white font-medium text-sm px-6 py-2.5 rounded-full transition-colors"
                            >
                                Donate Now
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
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

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
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
            className="text-gray-700 hover:text-[#33BBFF] font-medium text-sm transition-colors"
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
