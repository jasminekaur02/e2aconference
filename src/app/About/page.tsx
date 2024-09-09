import Footer from '@/components/Footer';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import PageHero from '@/components/PageHero';
import React from 'react';

const AboutUsPage = () => {
  return (
    <>
      <HeaderTop isHomePage={false}/>
      <Navbar/>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <PageHero title="About Us" image="/path/to/your/hero-image.jpg" /> {/* Add proper hero image path */}
        
        {/* About Section */}
        <section className="bg-gray-100 py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Who We Are</h2>
            <p className="text-lg leading-relaxed text-justify">
              The International Conference on Electrical, Electronics, and Automation (E2ACon) serves as a global hub where the brightest minds converge to explore, collaborate, and share their ground-breaking research and innovations. In today's rapidly evolving technological landscape, the domains of electrical engineering, electronics, and automation are integral to shaping our future. E2A provides a vital platform for researchers, scientists, engineers, educators, and industry experts from diverse backgrounds and cultures to come together, fostering a rich exchange of ideas and knowledge.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-justify">
              As we navigate an era of unprecedented technological advancement, E2ACon strives to accelerate progress by facilitating meaningful conversations, driving innovation, and charting the course for a future powered by cutting-edge electrical, electronics, and automation technologies. Join us at E2ACon to be a part of this transformative journey, where together, we illuminate the path toward a smarter, more connected, and automated world. Your contributions and insights are integral to shaping the future at E2A.
            </p>
          </div>
        </section>

        {/* Additional Sections - Vision & Mission */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-justify">
                Our vision is to create a transformative platform where cutting-edge research in electrical, electronics, and automation technologies inspires innovation and drives the future of global industries.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-justify">
                Our mission is to bring together a global community of experts, researchers, and engineers to share knowledge, collaborate on groundbreaking innovations, and collectively shape the future of automation and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Section - Why Choose Us */}
        
      </div>
      <Footer/>
    </>
  );
}

export default AboutUsPage;
