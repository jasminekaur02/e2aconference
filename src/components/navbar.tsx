"use client";

import React from "react";
import { Menu, Search } from "lucide-react"; // Importing the Search icon
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

const NAVLINKS = [
    { href: "/#about", text: "About" },
    { href: "/#CallForPapers", text: "Call for Papers" },
    { href: "/Events", text: "Events" },
    { href: "/committee", text: "New Release" },
    { href: "/Team", text: "Committee" },
    { href: "/Hotels", text: "Hotels & Travels" },
];

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white border-b">
            {({ open }) => (
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
                                {/* Navigation links */}
                                <div className="hidden sm:flex sm:space-x-4">
                                    {NAVLINKS.map(({ href, text }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            {text}
                                        </Link>
                                    ))}
                                </div>

                                {/* Search icon */}
                                <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                                    <Search className="h-6 w-6" />
                                </button>

                                {/* Menu button */}
                                <Disclosure.Button className="inline-flex items-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
                                    <Menu className="block h-8 w-8" aria-hidden="true" />
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Dropdown panel for navigation links in mobile view */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {NAVLINKS.map(({ href, text }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                                >
                                    {text}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export function Logo() {
    return (
        <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-9 h-9" />
            <h2 className="ml-2 text-lg font-bold">E2A Conference</h2>
        </Link>
    );
}