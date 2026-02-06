"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const images = [
  "/mainbuilding.png",
  "/image.png",
  "/eventshero.png",
  "/mala_kalra.jpg",
  "/01.jpg",
  "/_DSC0225.jpg",
];

const GalleryCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div className="w-full max-w-7xl mx-auto h-full shadow-xl rounded-3xl overflow-hidden text-center p-6 sm:p-10 hover:shadow-blue-600/50 transition-shadow duration-700 my-6">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 tracking-wide text-black">
        Featured&nbsp;<span className="text-blue-600">Gallery</span>
      </h2>
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Left Arrow */}
      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 
             text-white text-4xl sm:text-md md:text-3xl
             p-2 sm:p-3 md:p-4 rounded-full 
             bg-blue-950 bg-opacity-60 hover:bg-opacity-100 
             transition duration-300 ease-in-out"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>

      {/* Image Carousel */}
      <div className="max-w-7xl mx-auto flex items-center justify-center h-full relative">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute w-full h-full flex items-center justify-center cursor-zoom-in"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onClick={openModal}
            >
              <Image
                src={images[index]}
                alt="Gallery Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Arrow */}
      <button
  className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 
             text-white text-4xl sm:text-md md:text-3xl
             p-2 sm:p-3 md:p-4 rounded-full 
             bg-blue-950 bg-opacity-60 hover:bg-opacity-100 
             transition duration-300 ease-in-out"
  onClick={nextSlide}
>
  <FaChevronRight />
</button>


      {/* Dashes Navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-8 cursor-pointer rounded-lg transition-all ${i === index ? "bg-white scale-125" : "bg-gray-500"}`}
            onClick={() => setIndex(i)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      {/* Hover Preview */}
      {hoveredIndex !== null && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg">
          <Image
            src={images[hoveredIndex]}
            alt="Preview"
            width={120}
            height={80}
            className="rounded"
          />
        </div>
      )}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // Close modal when clicking outside the image
          >
            <div className="relative w-full max-w-5xl p-4" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[index]}
                alt="Full Screen Image"
                layout="responsive"
                width={800}
                height={500}
                className="rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl bg-gray-800 p-3 rounded-full hover:bg-gray-700"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </motion.div>
  );
};

export default GalleryCarousel;
