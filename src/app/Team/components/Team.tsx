import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

// Sample data for teamData (with images)
const teamData = {
  "Chief Patron": [
      {
          name: "Prof. Binod Kumar Kanaujia",
          affiliation: "NIT Jalandhar",
          image: "https://nitj.ac.in/files/1715231314602-Director1.jpg" // Replace with the actual image path
      }
  ],
  "Patron": [
      {
          name: "Prof. Ajay Bansal",
          affiliation: "NIT Jalandhar",
          image: "https://nitj.ac.in/files/1717741345401-Passport%20Pic.jpg" // Replace with the actual image path
      }
  ],
  "Executive General Chair": [
      {
          name: "Dr. Anish Sachdeva",
          affiliation: "NIT Jalandhar",
          image: "https://www.nitj.ac.in/images/faculty/18030537513.jpg" // Replace with the actual image path
      },
      {
          name: "Dr. Rohit Mehra",
          affiliation: "NIT Jalandhar",
          email: "mehrar@nitj.ac.in",
          image: "https://www.nitj.ac.in/images/faculty/20050251101.jpg" // Replace with the actual image path
      },
      {
          name: "Prof. R C Bansal",
          affiliation: "University of Sharjah, South Africa",
          image: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=xamOPsQAAAAJ&citpid=4" // Replace with the actual image path
      }
  ],
  "General Chair": [
      {
          name: "Dr. K. S. Nagla",
          affiliation: "NIT Jalandhar",
          email: "naglaks@nitj.ac.in",
          image: "https://www.nitj.ac.in/images/faculty/16081750872.jpg" // Replace with the actual image path
      },
      {
          name: "Dr. Dilbag Singh",
          affiliation: "NIT Jalandhar",
          email: "singhd@nitj.ac.in",
          image: "https://www.nitj.ac.in/images/faculty/22082287471.png" // Replace with the actual image path
      },
      {
          name: "Prof. Asheesh Kumar Singh",
          affiliation: "MNNIT Allahabad, India",
          email: "asheesh@mnnit.ac.in",
          image: "http://mnnit.ac.in/userprofile/uploads/AKS_pic.jpg" // Replace with the actual image path
      }
  ], 
  "General Co-Chair": [
      {
          name: "Dr. Prerna Gaur",
          affiliation: "NSUT Delhi, India",
          email: "prernagaur@yahoo.com",
          image: "http://nsut.ac.in/sites/default/files/styles/node_image_/public/2021-10/Prerna%20Gaur%202021.jpeg?itok=Hk7sWUq3" // Replace with the actual image path
      },
      {
          name: "Dr. S. K. Pahuja",
          affiliation: "NIT Jalandhar",
          email: "pahujas@nitj.ac.in",
          image: "https://www.nitj.ac.in/images/faculty/18022167136.png" // Replace with the actual image path
      },
      {
          name: "Prof. Jerzy R. Szymanski",
          affiliation: "Kazimierz Pulaski University of Technology and Humanities, Poland",
          email: "j.szymanski@uthrad.pl",
          image: "https://i1.rgstatic.net/ii/profile.image/856674961199104-1581258635324_Q128/Jerzy-Szymanski.jpg" // Replace with the actual image path
      }
  ],
  "Conference Chair": [
      {
          name: "Dr Khalid Abidi",
          affiliation: "Degree Program Director, Newcastle University, Singapore",
          email: "khalid.abidi@ncl.ac.uk",
          image: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=_mPjJwEAAAAJ&citpid=2" // Replace with the actual image path
      },
      {
          name: "Dr. Yogesh Vijay Hote",
          affiliation: "IIT Roorkee",
          email: "yogesh.hote@ee.iitr.ac.in",
          image: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=vAf0AZAAAAAJ&citpid=2" // Replace with the actual image path
      },
      {
          name: "Dr. Mamta Khosla",
          affiliation: "NIT Jalandhar",
          email: "khoslam@nitj.ac.in",
          image: "https://www.nitj.ac.in/images/faculty/1801185993.jpg" // Replace with the actual image path
      }
  ],
  "Conference Co-Chair": [
      {
          name: "Dr. Indu Saini",
          affiliation: "NIT Jalandhar",
          email: "sainii@nitj.ac.in",
          image: "https://www.nitj.ac.in/images/faculty/18011954316.png" // Replace with the actual image path
      },
      {
          name: "Dr. Vinod Kumar Yadav",
          affiliation: "DTU, Delhi, India",
          email: "vinodkumar@dtu.ac.in",
          image: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=PRSOAPIAAAAJ&citpid=2" // Replace with the actual image path
      }
  ],
  "Conveyer": [
      {
          name: "Dr Afzal Sikander",
          affiliation: "NIT Jalandhar",
          email: "afzals@nitj.ac.in",
          image: "https://www.nitj.ac.in/images/faculty/18020663191.jpg" // Replace with the actual image path
      },
      {
          name: "Dr Anurag Sharma",
          affiliation: " Associate Professor, Newcastle University, Singapore",
          email: "anurag.sharma@ncl.ac.uk",
          image: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=DbW7jDoAAAAJ&citpid=3" // Replace with the actual image path
      }
  ],
  "Organising Secretary": [
      {
          name: "Dr Karan Jain",
          affiliation: "NIT Jalandhar",
          email: "jaink@nitj.ac.in",
          image: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=BKdNBdcAAAAJ&citpid=1" // Replace with the actual image path
      },
      {
          name: "Dr Sze Sing Lee",
          affiliation: "Newcastle University, Singapore",
          email: "szesinglee@gmail.com",
          image: "https://includes.ncl.ac.uk/cmswebservices/myimpact/2020ws/picture/picture.php?wk=newcastleuniversity&pk=szesing.lee" // Replace with the actual image path
      }
  ]
};

const Team = () => {
    return (
        <section className="py-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Organizing<span className='text-blue-600'> Committee</span></h2>
            </div>

            {/* Render teamData with images */}
            {Object.keys(teamData).map((section, idx) => (
                <div key={idx} className="mb-12 text-center">
                    <h3 className="text-2xl font-semibold mb-4">{section}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                                {member.email && (
                                    <p className="mt-2 text-gray-600">
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="flex items-center justify-center space-x-2"
                                        >
                                            <FaEnvelope className="text-gray-500" />
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

export default Team;
