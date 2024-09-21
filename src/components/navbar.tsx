"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";

// Define the type for Disclosure component's state
type DisclosureState = {
    open: boolean;
};

const NAVLINKS = [
    { href: "/Home", text: "HOME" },
    { href: "/About", text: "ABOUT" },
    {
        href: "",
        text: "CALL FOR PAPERS",
        subMenu: [
            { href: "/CallforPapers/papersubmission", text: "TRACK DETAILS" },
            { href: "/welcome", text: "IMPORTANT DATES" },
            { href: "/Guidelines", text: "GUIDELINES" },
            { href: "/publications", text: "PUBLICATIONS" },
        ],
    },
    {
        href: "",
        text: "EVENTS",
        subMenu: [
            { href: "/Events/Pages/Keynotes", text: "KEYNOTES" },
            { href: "/Workshop", text: "WORKSHOPS" },
            { href: "/Awards", text: "AWARDS" },
        ],
    },
    {
        href: "",
        text: "NEWS RELEASE",
        subMenu: [
            { href: "/NewsRelease", text: "ANNOUNCEMENTS" },
        ],
    },
    {
        href: "/Sponsorship",
        text: "SPONSORSHIP PACKAGES",
    },
    {
        href: "/Registration",
        text: "REGISTRATION",
    },
    {
        href: "",
        text: "COMMITTEE",
        subMenu: [
            { href: "/Team", text: "ORGANIZING COMMITTEE" },
            { href: "/Committee2", text: "PROGRAM COMMITTEE" },
            { href: "/AdvCommittee", text: "ADVISORY COMMITTEE" },
            { href: "/student", text: "STUDENT MEMBERS" },
        ],
    },
    { href: "/Hotels", text: "HOTELS AND TRAVELS" },
    { href: "/ContactUs", text: "CONTACT US" },
];

export default function Navbar() {
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
    const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

    const handleMenuClick = (index: number) => {
        if (openSubMenu === index) {
            setOpenSubMenu(null); // Close the submenu if it's already open
        } else {
            setOpenSubMenu(index); // Open the submenu
        }
    };

    // Typing effect state and logic
    const [typingText, setTypingText] = useState<string>("");
    const [typingDescription, setTypingDescription] = useState<string>("");
    const contentTexts: Record<string, { title: string; description: string }> = {
        default: {
            title: "Welcome to Our Conference",
            description: "Join us for an immersive experience in the latest advancements in technology and research.",
        },
        0: {
            title: "Welcome to Our Conference",
            description: "Join us for an immersive experience in the latest advancements in technology and research.",
        },
        1: {
            title: "Learn More About Us!",
            description: "Discover our mission, vision, and values that drive our conference.",
        },
        2: {
            title: "Discover our Call for Papers!",
            description: "We are calling for innovative and insightful research papers for this year's conference.",
        },
        3: {
            title: "Explore Exciting Events!",
            description: "Our conference offers a variety of workshops, keynotes, and panels tailored for you.",
        },
        4: {
            title: "Check Out the Latest Releases!",
            description: "Stay updated with the latest announcements, updates, and publications in the field.",
        },
        5: {
            title: "Explore Sponsorship Packages!",
            description: "Discover opportunities to partner with us and promote your brand at the E2A Conference.",
        },
        6: {
            title: "Register for the Conference!",
            description: "Ensure your participation by registering for the E2A Conference today.",
        },
        7: {
            title: "Meet Our Committee!",
            description: "Our committee members are dedicated to making this conference a success.",
        },
        8: {
            title: "Plan Your Stay!",
            description: "Discover the best hotels and travel options for a comfortable and convenient experience.",
        },
        9: {
            title: "Get in Touch with Us!",
            description: "Have questions? Reach out to us, and we will assist you with any inquiries.",
        },
    };
    
    

    useEffect(() => {
        const content = hoveredMenu !== null ? contentTexts[hoveredMenu.toString()] : contentTexts.default;
        let currentIndex = 0;
        let currentDescriptionIndex = 0;

        const typingInterval = setInterval(() => {
            setTypingText(content.title.substring(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === content.title.length) {
                clearInterval(typingInterval);

                // Start typing description after heading finishes
                const descriptionInterval = setInterval(() => {
                    setTypingDescription(content.description.substring(0, currentDescriptionIndex + 1));
                    currentDescriptionIndex++;
                    if (currentDescriptionIndex === content.description.length) {
                        clearInterval(descriptionInterval);
                    }
                }, 50);
            }
        }, 100);

        // Cleanup on component unmount or hover change
        return () => {
            clearInterval(typingInterval);
            setTypingDescription("");
        };
    }, [hoveredMenu]);

    return (
        <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 ">
            {({ open }: DisclosureState) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo aligned to the extreme left */}
                            <div className="flex-shrink-0">
                                <Logo />
                            </div>

                            {/* Empty div to push tabs and menu to the extreme right */}
                            <div className="flex-1"></div>

                            {/* Right-side icons */}
                            <div className="flex items-center space-x-6">
                                {/* Search icon */}
                                {/* <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                                    <Search className="h-6 w-6" />
                                </button> */}

                                {/* Menu button */}
                                <Disclosure.Button
                                    className={`inline-flex items-center px-4 py-2 bg-black text-white text-xl font-bold hover:bg-gray-800 focus:outline-none ${open ? "fixed top-4 right-4 z-50" : ""}`}
                                >
                                    {open ? (
                                        <>
                                            <X className="block h-8 w-8" aria-hidden="true" />
                                            <span className="ml-2">CLOSE</span> {/* Add the CLOSE text here */}
                                        </>
                                    ) : (
                                        <>
                                            <Menu className="block h-8 w-8" aria-hidden="true" />
                                            <span className="ml-2">MENU</span>
                                        </>
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Full-screen overlay for mobile navigation */}
                    <Transition
                        show={open}
                        enter="transition-opacity duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Disclosure.Panel className="fixed inset-0 bg-black bg-opacity-85 z-40 flex flex-col">
                            <div className="relative h-full w-full">
                                {/* Three-column layout for larger screens */}
                                <div className="hidden md:flex h-full">
                                    {/* First Column - Main Menu */}
                                    <div className={`w-1/4 p-8 overflow-y-auto mt-16 ${openSubMenu !== null ? 'border-r-2 border-white' : ''}`}>
                                        {NAVLINKS.map(({ href, text, subMenu }, index) => (
                                            <div key={href} className="mb-6">
                                                <Link
                                                    href={href}
                                                    className="block text-white lg:text-[1.25rem] md:text-[1rem] sm:text-xl font-bold hover:text-blue-400 p-1 w-full text-left"
                                                    onMouseEnter={() => setHoveredMenu(index)}
                                                    onMouseLeave={() => setHoveredMenu(null)}
                                                    onClick={() => handleMenuClick(index)}
                                                >
                                                    {text}
                                                    {subMenu && (
                                                        <ChevronRight
                                                            className={`inline-block h-6 w-6 transition-transform duration-200 ${openSubMenu === index ? "rotate-90" : ""}`}
                                                        />
                                                    )}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Second Column - Submenu */}
                                    <div className="w-1/4 p-8 bg-transparent overflow-y-auto mt-16">
                                        {openSubMenu !== null && NAVLINKS[openSubMenu].subMenu && (
                                            NAVLINKS[openSubMenu].subMenu.map(({ href, text }, subIndex) => (
                                                <div key={subIndex} className="mb-4">
                                                    <Link
                                                        href={href}
                                                        className="block text-white text-xl font-medium hover:text-blue-400"
                                                    >
                                                        {text}
                                                    </Link>
                                                </div>
                                            ))
                                        )}
                                    </div>

                                    {/* Third Column - Image with Text */}
                                    <div
                                        className="w-1/2 p-8 bg-cover bg-center relative flex items-center justify-center"
                                        style={{ backgroundImage: "url('/path/to/image.jpg')" }}
                                    >
                                        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                                            <h2 className="text-white text-3xl font-bold">{typingText}</h2>
                                            <p className="text-white mt-4">{typingDescription}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Responsive Layout for small devices */}
                                <div className="md:hidden h-full flex flex-col">
                                    <div className="p-8 overflow-y-auto mt-16">
                                        {NAVLINKS.map(({ href, text, subMenu }, index) => (
                                            <div key={href} className="mb-6">
                                                <div
                                                    className="flex justify-between items-center text-white text-2xl font-bold hover:text-blue-400 cursor-pointer"
                                                    onClick={() => handleMenuClick(index)}
                                                >
                                                    <Link href={href} className="p-1">
                                                        {text}
                                                    </Link>
                                                    {subMenu && (
                                                        <ChevronRight
                                                            className={`inline-block h-6 w-6 transform transition-transform duration-300 ${openSubMenu === index ? "rotate-90" : "rotate-0"}`}
                                                        />
                                                    )}
                                                </div>
                                                {/* Submenu for small screens */}
                                                {openSubMenu === index && subMenu && (
                                                    <Transition
                                                        show={openSubMenu === index}
                                                        enter="transition-all duration-300"
                                                        enterFrom="opacity-0 max-h-0"
                                                        enterTo="opacity-100 max-h-40"
                                                        leave="transition-all duration-300"
                                                        leaveFrom="opacity-100 max-h-40"
                                                        leaveTo="opacity-0 max-h-0"
                                                    >
                                                        <div className="pl-4 mt-2">
                                                            {subMenu.map(({ href, text }) => (
                                                                <Link
                                                                    key={href}
                                                                    href={href}
                                                                    className="block text-white text-xl font-medium hover:text-blue-400 mb-2"
                                                                >
                                                                    {text}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </Transition>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
}

export function Logo() {
    return (
        <Link href="/" className="flex items-center text-white">
            <img src="/e2alogo.jpg" alt="Logo" className="w-9 h-9" />
        </Link>
    );
}
