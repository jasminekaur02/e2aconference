import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import Font Awesome icons

const studentCommittee = [
    { name: "Mr. Sumit Kataria", affiliation: "NIT Jalandhar" },
    { name: "Ms. Karchana Kumari", affiliation: "NIT Jalandhar" },
    { name: "Karan Anand", affiliation: "NIT Jalandhar" },

    // Corrected structure for web developers
    {
        role: "Web Developers",
        members: [
            {
                name: "Ayush Kumar",
                designation: "Dept of ICE",
                affiliation: "NIT Jalandhar",
                image: "https://media.licdn.com/dms/image/v2/D4D03AQH6pk0HN9vjaA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691694682903?e=1731542400&v=beta&t=Pv9XMty_Ny2eoULB96m_rVbyfL09kK0IcNsyQmmWHyo",
                github: "https://github.com/akdest",
                linkedin: "https://www.linkedin.com/in/ayush-kumar-850044219/"
            },
            {
                name: "Jasmine Kaur",
                designation: "Dept of ECE",
                affiliation: "NIT Jalandhar",
                image: "https://avatars.githubusercontent.com/u/123491291?v=4",
                github: "https://github.com/jasmine",
                linkedin: "https://www.linkedin.com/in/jasmine-kaur-a20b91253/"
            },
            {
                name: "Arushi Gupta",
                designation: "Dept of ICE",
                affiliation: "NIT Jalandhar",
                image: "https://avatars.githubusercontent.com/u/114179213?v=4",
                github: "https://github.com/Arushi-Gupta13",
                linkedin: "https://www.linkedin.com/in/arushi-gupta1344/"
            }
        ]
    }
];

const StudentCommittee = () => {
    return (
        <section className="py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">
                    Student<span className='text-blue-600'> Members</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {studentCommittee.map((group, index) => (
                    group.members ? ( // Check if the group has members
                        <div key={index} className="col-span-full">
                            <h3 className="text-2xl font-bold text-center mb-4">{group.role}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {group.members.map((member, memberIndex) => (
                                    <div key={memberIndex} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-24 h-24 mx-auto rounded-full mb-4"
                                        />
                                        <h4 className="text-xl font-bold">{member.name}</h4>
                                        <p className="text-blue-500">{member.affiliation}</p>
                                        <div className="flex justify-center space-x-4 mt-4">
                                            <a href={member.github} target="_blank" rel="noopener noreferrer">
                                                <FaGithub className="text-gray-600 text-2xl" />
                                            </a>
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                                <FaLinkedin className="text-gray-600 text-2xl" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h4 className="text-xl font-bold">{group.name}</h4>
                            <p className="text-blue-500">{group.affiliation}</p>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
};

export default StudentCommittee;
