import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import Font Awesome icons

const studentCommittee = [
    {
        name: "Mr. Sumit Kataria",
        designation: "Dept of ICE",
        affiliation: "NIT Jalandhar",
        image: "/sumit_kataria.jpg",
        linkedin: "https://www.linkedin.com/in/sumit-kataria-1041161a6/"
    },
    {
        name: "Ms. Karchana Kumari",
        designation: "Dept of ICE",
        affiliation: "NIT Jalandhar",
        image: "/karchana.jpg",
        linkedin: "https://www.linkedin.com/in/karchana-bhushan-468785200/"
    },
    {
        name: "Karan Anand",
        designation: "Dept of ICE",
        affiliation: "NIT Jalandhar",
        image: "https://avatars.githubusercontent.com/u/68910143?v=4",
        github: "https://github.com/thekarananand",
        linkedin: "https://www.linkedin.com/in/thekarananand/"
    },
    {
        role: "Web Developers",
        members: [
            {
                name: "Ayush Kumar",
                designation: "Dept of ICE",
                affiliation: "NIT Jalandhar",
                image: "https://avatars.githubusercontent.com/u/114203535?v=4",
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
            },
            {
                name: "Vyomika",
                designation: "Dept of ECE",
                affiliation: "NIT Jalandhar",
                image: "https://avatars.githubusercontent.com/u/148205843?v=4",
                github: "https://github.com/vyomika-byte",
                linkedin: "https://www.linkedin.com/in/vyomika-2a2710288"                
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
                                        <h6 className="text-gray-600">{member.designation}</h6>
                                        <p className="text-blue-500">{member.affiliation}</p>
                                        <div className="flex justify-center space-x-4 mt-4">
                                            {member.github && (
                                                <a href={member.github} target="_blank" rel="noopener noreferrer">
                                                    <FaGithub className="text-gray-600 text-2xl" />
                                                </a>
                                            )}
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedin className="text-gray-600 text-2xl" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img
                                src={group.image || "https://via.placeholder.com/150"} // Placeholder if no image is provided
                                alt={group.name}
                                className="w-24 h-24 mx-auto rounded-full mb-4"
                            />
                            <h4 className="text-xl font-bold">{group.name}</h4>
                            <h6 className="text-gray-600">{group.designation}</h6>
                            <p className="text-blue-500">{group.affiliation}</p>
                            <div className="flex justify-center space-x-4 mt-4">
                                {group.github && (
                                    <a href={group.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-gray-600 text-2xl" />
                                    </a>
                                )}
                                {group.linkedin && (
                                    <a href={group.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="text-gray-600 text-2xl" />
                                    </a>
                                )}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
};

export default StudentCommittee;