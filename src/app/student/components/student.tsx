import React from 'react';

const studentCommittee = [
    { name: "Mr. Sumit Kataria", affiliation: "NIT Jalandhar" },
    { name: "Ms. Karchana Kumari", affiliation: "NIT Jalandhar" },
    { name: "Mr. Karan Anand", affiliation: "NIT Jalandhar" },
    { name: "Mr. Ayush Kumar", affiliation: "NIT Jalandhar" },
    { name: "Ms. Jasmine Kaur", affiliation: "NIT Jalandhar" },
    { name: "Ms. Arushi Gupta", affiliation: "NIT Jalandhar" },
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
                {studentCommittee.map((member, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h4 className="text-xl font-bold">{member.name}</h4>
                        <p className="text-blue-500">{member.affiliation}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StudentCommittee;
