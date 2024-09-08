import React from 'react';

const committee = {
    "Program Committee": [
        {
            name: "Dr. K. S. Nagla",
            affiliation: "NIT Jalandhar",
            email: "naglaks@nitj.ac.in"
        },
        // Add more members here if needed...
    ],
    // Other committees...
    "Technical Program Chair": [
        {
            name: "Dr. Arun Khosla",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Dr. Marta Zurek-Mortka",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Dr. Piyush Verma",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Dr B S Saini",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Dr. Alper Kerem",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Prof. Vijander Singh",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Dr. Neetu Sood",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Prof. B.K. Panigrahi",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Dr Anil Kumar Yadav",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Dr Muhammad Ramadan Saifuddin",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Dr. Pranab K Mandol",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Dr. Francesco De Leonardis",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Prof. Dr. Piotr Bilski",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Prof. Dr. Mohd Faizul Bin Mohd Sabri",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
        {
            name: "Dr. Prakash Diwadi",
            affiliation: "NIT Jalandhar",
            email: "khoslaak@nitj.ac.in"
        },
    ],
    // Other committee sections...
};

const Committee2 = () => {
    return (
        <section className="py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Program<span className='text-blue-600'> Committee</span></h2>
            </div>

            {/* Render committee without images */}
            {Object.keys(committee).map((section, idx) => (
                <div key={idx} className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4">{section}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {committee[section].map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <h4 className="text-xl font-bold">{member.name}</h4>
                                <p className="text-blue-500">{member.affiliation}</p>
                                {member.email && (
                                    <p className="mt-2 text-gray-600">
                                        <a href={`mailto:${member.email}`} className="flex items-center justify-center space-x-2">
                                            <span>{member.email}</span>
                                        </a>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Committee2;
