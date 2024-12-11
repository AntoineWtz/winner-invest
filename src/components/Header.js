import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo-Winner-Invest.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className="bg-white fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex-shrink-0">
                    <img src={logo} alt="Winner Invest Logo" className="h-16" />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-12 text-black tracking-wider uppercase text-lg font-manrope">
                        <li>
                            <a href="#program" className="hover:text-[#C4A668]">
                                Programme
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-[#C4A668]">
                                À propos
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-[#C4A668]">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Ouvrir le menu</span>
                    <div className="space-y-2">
                        <span className="block w-8 h-1 bg-gray-700"></span>
                        <span className="block w-8 h-1 bg-gray-700"></span>
                        <span className="block w-8 h-1 bg-gray-700"></span>
                    </div>
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <motion.div
                    ref={menuRef}
                    className="md:hidden bg-white shadow-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="flex flex-col space-y-4 text-gray-700 font-bold py-4 px-6">
                        <li>
                            <a
                                href="#program"
                                className="hover:text-[#C4A668]"
                                onClick={toggleMenu}
                            >
                                Programme
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="hover:text-[#C4A668]"
                                onClick={toggleMenu}
                            >
                                À propos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-[#C4A668]"
                                onClick={toggleMenu}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
