import React from 'react';

// Updated teamData based on the image
const teamData = {
  "Chief Patron": [
    {
      name: "Prof. Binod Kumar Kanaujia",
      designation: "Director & Chairman BOG",
      affiliation: "NIT Jalandhar",
      image: "https://nitj.ac.in/files/1715231314602-Director1.jpg" // Replace with actual image path
    }
  ],
  "Patron": [
    {
      name: "Prof. Ajay Bansal",
      designation: "Registrar",
      affiliation: "NIT Jalandhar",
      image: "https://nitj.ac.in/files/1717741345401-Passport%20Pic.jpg" // Replace with actual image path
    }
  ],
  "General Chair(s)": [
    {
      name: "Prof. Dilbag Singh",
      designation: "Professor",
      affiliation: "NIT Jalandhar",
      image: "https://www.nitj.ac.in/images/faculty/22082287471.png" // Replace with actual image path
    },
    {
      name: "Prof. K. S. Nagla",
      designation: "Professor & Head (ICE)",
      affiliation: "NIT Jalandhar",
      image: "https://www.nitj.ac.in/images/faculty/16081750872.jpg" // Replace with actual image path
    }
  ],
  "General Co-Chair(s)": [
    {
      name: "Prof. S. K. Pahuja",
      designation: "Professor & Head (EE)",
      affiliation: "NIT Jalandhar",
      image: "https://www.nitj.ac.in/images/faculty/18022167136.png" // Replace with actual image path
    },
    {
      name: "Prof. Prerna Gaur",
      designation: "Professor",
      affiliation: "NSUT Delhi, India",
      image: "http://nsut.ac.in/sites/default/files/styles/node_image_/public/2021-10/Prerna%20Gaur%202021.jpeg?itok=Hk7sWUq3" // Replace with actual image path
    },
    {
      name: "Prof. Jerzy R. Szymański",
      affiliation: "Kazimierz Pulaski University, Poland",
      image: "https://i1.rgstatic.net/ii/profile.image/856674961199104-1581258635324_Q128/Jerzy-Szymanski.jpg" // Replace with actual image path
    }
  ],
  "Convener and Organising Chair(s)": [
    {
      name: "Dr. Afzal Sikander",
      designation: "Assistant Professor",
      affiliation: "NIT Jalandhar",
      image: "https://www.nitj.ac.in/images/faculty/18020663191.jpg" // Replace with actual image path
    },
    {
      name: "Dr. Anurag Sharma",
      designation: "Assistant Professor",
      affiliation: "Newcastle University, Singapore",
      image: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=DbW7jDoAAAAJ&citpid=3" // Replace with actual image path
    }
  ],
  "Co-Convener(s)": [
    {
      name: "Dr. Ravi Verma",
      designation: "Assistant Professor",
      affiliation: "NIT Jalandhar",
      image: "https://v1.nitj.ac.in/images/faculty/20010827402.jpg" // Replace with actual image path
    },
    {
      name: "Dr. Khalid Abidi",
      designation: "Degree Program Director",
      affiliation: "Newcastle University, Singapore",
      image: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=_mPjJwEAAAAJ&citpid=2" // Replace with actual image path
    }
  ],
  "Organising Secretary": [
    {
      name: "Dr. Karan Jain",
      designation: "Assistant Professor",
      affiliation: "NIT Jalandhar",
      image: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=BKdNBdcAAAAJ&citpid=1" // Replace with actual image path
    },
    {
      name: "Dr. Richa Sharma",
      designation: "Assistant Professor",
      affiliation: "NIT Jalandhar",
      image: "https://v1.nitj.ac.in/images/faculty/23020446113.jpeg" // Replace with actual image path
    },
    {
      name: "Dr. Sze Sing Lee",
      designation: "Assistant Professor",
      affiliation: "Newcastle University, Singapore",
      image: "https://includes.ncl.ac.uk/cmswebservices/myimpact/2020ws/picture/picture.php?wk=newcastleuniversity&pk=szesing.lee" // Replace with actual image path
    }
  ]
};

const Team = () => {
<<<<<<< HEAD
    return (
        <section className="py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Organizing <span className='text-blue-600'>Committee</span></h2>
            </div>

            {/* Render teamData with images */}
            {Object.keys(teamData).map((section, idx) => (
                <div key={idx} className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4 text-center">{section}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                        {teamData[section].map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                {member.image && (
                                    <a
                                        href={member.profileLink || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                                        />
                                    </a>
                                )}
                                <h4 className="text-xl font-bold">{member.name}</h4>
                                <p className="text-blue-500">{member.affiliation}</p>
                                {/* {member.email && (
                                    <p className="mt-2 text-gray-600">
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="flex items-center justify-center space-x-2"
                                        >
                                            <FaEnvelope className="text-gray-500" />
                                            <span>{member.email}</span>
                                        </a>
                                    </p>
                                )} */}
                            </div>
                        ))}
                    </div>
=======
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Organizing<span className="text-blue-600"> Committee</span>
        </h2>
      </div>

      {/* Render teamData with images */}
      {Object.keys(teamData).map((section, idx) => {
        const numItems = teamData[section].length;
        const gridCols = numItems === 1
          ? "grid-cols-1"
          : numItems === 2
          ? "grid-cols-2"
          : "grid-cols-3";

        return (
          <div key={idx} className="mb-8 md:mb-12 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              {section}
            </h3>
            {/* Responsive grid using Tailwind */}
            <div className={`grid gap-6 justify-center ${gridCols} sm:grid-cols-${Math.min(2, numItems)} md:grid-cols-${Math.min(3, numItems)} lg:grid-cols-${Math.min(4, numItems)} xl:grid-cols-${Math.min(5, numItems)}`}>
              {teamData[section].map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center"
                >
                  {member.image && (
                    <a
                      href={member.profileLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-full object-cover"
                      />
                    </a>
                  )}
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold">
                    {member.name}
                  </h4>
                  <p className="text-sm sm:text-base text-blue-500">
                    {member.designation}
                  </p>
                  <p className="text-xs sm:text-sm text-black">
                    {member.affiliation}
                  </p>
>>>>>>> 86a5d35043ad1e113b04859bbed3b3532dc9ba97
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Team;
