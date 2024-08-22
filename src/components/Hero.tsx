import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-indigo-50 py-12 rounded-bl-[200px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-900">E2A</h1>
                    <p className="mt-4 text-xl text-gray-700">
                        International Conference on <br />
                        <span className="text-blue-600">Electrical, Electronics</span> & <span className="text-blue-600">Automation</span>
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start space-x-4">
                        <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">Register</a>
                        <a href="/flyer" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">Download Flyer</a>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 relative">
                <div className="absolute bottom-0 left-0 w-[130%] h-[130%] bg-white rounded-tl-[250px] -z-10 transform -translate-x-8 -translate-y-8"></div>
                    <img src="/mainbuilding.png" alt="Conference Building" className="w-full rounded-lg shadow-lg relative z-10" />
                </div>
            </div>
        </section>
  )
}

export default Hero