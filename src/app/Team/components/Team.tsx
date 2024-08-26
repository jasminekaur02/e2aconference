// components/Team.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      name: 'Amanda Palmer',
      title: 'CEO & Founder',
      image: '/images/team1.jpg', // Replace with actual image paths
      description: 'Dedicated leader with a passion for innovative solutions.',
      socials: [
        { platform: 'facebook', url: 'https://facebook.com/amanda' },
        { platform: 'twitter', url: 'https://twitter.com/amanda' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/amanda' },
      ],
    },
    {
      name: 'Mike Carson',
      title: 'Lead Developer',
      image: '/images/team2.jpg',
      description: 'Code ninja with an eye for design and performance.',
      socials: [
        { platform: 'facebook', url: 'https://facebook.com/mike' },
        { platform: 'instagram', url: 'https://instagram.com/mike' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/mike' },
      ],
    },
    {
      name: 'Rita Klein',
      title: 'Marketing Head',
      image: '/images/team3.jpg',
      description: 'Creative thinker with a knack for social media trends.',
      socials: [
        { platform: 'twitter', url: 'https://twitter.com/rita' },
        { platform: 'instagram', url: 'https://instagram.com/rita' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/rita' },
      ],
    },
    {
      name: 'John Doe',
      title: 'Support Lead',
      image: '/images/team4.jpg',
      description: 'Ensuring customers have a seamless experience.',
      socials: [
        { platform: 'facebook', url: 'https://facebook.com/john' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/john' },
      ],
    },
    {
      name: 'Sara Lee',
      title: 'Designer',
      image: '/images/team5.jpg',
      description: 'Transforming visions into stunning visuals.',
      socials: [
        { platform: 'twitter', url: 'https://twitter.com/sara' },
        { platform: 'instagram', url: 'https://instagram.com/sara' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/sara' },
      ],
    },
    {
      name: 'Sam Peterson',
      title: 'Developer',
      image: '/images/team6.jpg',
      description: 'Building scalable and efficient codebases.',
      socials: [
        { platform: 'facebook', url: 'https://facebook.com/sam' },
        { platform: 'twitter', url: 'https://twitter.com/sam' },
      ],
    },
    {
      name: 'Megan Smith',
      title: 'HR Manager',
      image: '/images/team7.jpg',
      description: 'Connecting talent with opportunity.',
      socials: [
        { platform: 'instagram', url: 'https://instagram.com/megan' },
        { platform: 'linkedin', url: 'https://linkedin.com/in/megan' },
      ],
    },
  ];

  const renderSocialIcons = (socials) => {
    return socials.map(({ platform, url }) => {
      let icon;
      switch (platform) {
        case 'facebook':
          icon = <FaFacebookF className="text-gray-500 hover:text-blue-500" />;
          break;
        case 'twitter':
          icon = <FaTwitter className="text-gray-500 hover:text-blue-500" />;
          break;
        case 'linkedin':
          icon = <FaLinkedinIn className="text-gray-500 hover:text-blue-500" />;
          break;
        case 'instagram':
          icon = <FaInstagram className="text-gray-500 hover:text-pink-500" />;
          break;
        default:
          return null;
      }
      return (
        <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      );
    });
  };

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Meet our <span className="text-blue-500">team</span></h2>
        <p className="text-gray-600">Just like a book – each member of the team is waiting for your every glance, so choose them as your whisper.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover shadow-md"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-blue-500">{member.title}</p>
            <p className="text-gray-600 mt-2">{member.description}</p>
            <div className="mt-4 flex justify-center space-x-4">
              {renderSocialIcons(member.socials)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
