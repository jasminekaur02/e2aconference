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
        text: "NEW RELEASE",
        subMenu: [{ href: "/NewsRelease", text: "ANNOUNCEMENTS" }],
    },
    { href: "/Sponsorship", text: "SPONSORSHIP PACKAGES" },
    { href: "/Registration", text: "REGISTRATION" },
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
            title: "Meet Our Committee!",
            description: "Our committee members are dedicated to making this conference a success.",
        },
        7: {
            title: "Plan Your Stay!",
            description: "Discover the best hotels and travel options for a comfortable and convenient experience.",
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
        <>
            
            <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 bg-transparent">
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
                            {/* Panel with navigation options */}
                            <Disclosure.Panel className="fixed inset-0 bg-black bg-opacity-85 z-40 flex flex-col">
                                {/* Add your navigation or submenus here */}
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </>
    );
}

export function Logo() {
    return (
        <Link href="/" className="flex items-center text-white">
            <img src="/e2alogo.jpg" alt="Logo" className="w-9 h-9" />
        </Link>
    );
}
