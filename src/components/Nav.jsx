import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="px-8 py-6 flex justify-between items-center border-b border-[#3C2241]">
            <div className="flex items-center">
                <Link to="/">
                    <img src="/placeholder.svg?height=40&width=40" alt="Innova logo" className="h-10 w-10 mr-2" />
                </Link>
            </div>

            {/* Menu for larger screens */}
            <nav className="hidden sm:flex justify-center flex-1">
                <ul className="flex space-x-6">
                    <Link to="/about">Nosotros</Link>
                    <Link to="/service">Servicios</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </ul>
            </nav>

            {/* Button for larger screens */}
            <div className="hidden sm:block">
                <Link 
                    to="/contact" 
                    className="bg-gradient-to-b from-[#9747FF] to-[#39337A] text-primary px-4 py-2 rounded-full"
                >
                    Contáctanos
                </Link>
            </div>

            {/* Menu hamburger for small screens */}
            <div className="sm:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Dropdown menu for small screens */}
            {isOpen && (
                <nav className="absolute top-16 left-0 right-0 shadow-lg p-6 sm:hidden">
                    <ul className="flex flex-col space-y-4 items-center">
                        <Link to="/about" onClick={() => setIsOpen(false)}>Nosotros</Link>
                        <Link to="/service" onClick={() => setIsOpen(false)}>Servicios</Link>
                        <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
                        <Link 
                            to="/contact" 
                            className="bg-gradient-to-b from-[#9747FF] to-[#39337A] text-primary px-4 py-2 rounded-full"
                            onClick={() => setIsOpen(false)}
                        >
                            Contáctanos
                        </Link>
                    </ul>
                </nav>
            )}
        </header>
    );
}
