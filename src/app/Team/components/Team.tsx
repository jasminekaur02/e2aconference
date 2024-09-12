import PageHero from '@/components/PageHero';
import React from 'react';

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
    // {
    //   name: "Prof. Prerna Gaur",
    //   designation: "Professor",
    //   affiliation: "NSUT Delhi, India",
    //   image: "http://nsut.ac.in/sites/default/files/styles/node_image_/public/2021-10/Prerna%20Gaur%202021.jpeg?itok=Hk7sWUq3" // Replace with actual image path
    // },
    {
      name: "Prof. Jerzy R. Szymański",
      affiliation: "Kazimierz Pulaski University, Poland",
      image: "https://i1.rgstatic.net/ii/profile.image/856674961199104-1581258635324_Q128/Jerzy-Szymanski.jpg" // Replace with actual image path
    },
    {
      name: "Prof. Mamta Khosla",
      affiliation: "Professor and Dean (International Affairs), NIT Jalandhar",
      image: "https://www.nitj.ac.in/images/faculty/1801185993.jpg" // Replace with actual image path
    },
    {
      name: "Dr. Indu Saini",
      affiliation: "Associate Professor NIT Jalandhar",
      image: "https://www.nitj.ac.in/images/faculty/18011954316.png" // Replace with actual image path
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
      name: "Dr. Marta Zurek-Mortka",
      designation: "Lukasiewicz Research Network",
      affiliation: "Institute for Sustainable Technologies, Radom, Poland ",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQHb20zb-eoPYg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1646823222749?e=1731542400&v=beta&t=EURPwOrBaTX-i_TvXQ9J858B94LwaBVketb7TqAf_Tw"
      // Replace with actual image path
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
        name: "Dr. Ravi Verma",
        designation: "Assistant Professor",
        affiliation: "NIT Jalandhar",
        image: "https://v1.nitj.ac.in/images/faculty/20010827402.jpg"
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
    },
  
   
  ]
};

const Team = () => {
  return (
    <>
    <PageHero title="Organizing Committee" image="https://v1.nitj.ac.in/ITEP/img/01.jpg" />
    <section className="py-8 sm:py-10 md:py-12 lg:py-16">
      

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
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
    </>
  );
};

export default Team;
