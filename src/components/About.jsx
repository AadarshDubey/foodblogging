import React from 'react';

const About = () => {
  return (
    <div className="py-10">
      <div className="bg-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center items-center">
            <img 
              src="/public/chinh.png "  
              alt="About Us" 
              className="w-full max-w-[384px] mr-40 h-auto hidden md:block" 
            />
          </div>
          <div className="md:w-1/2 text-left flex flex-col justify-center">
            <h2 className="text-[45px] font-bold text-blue mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. 
              Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, 
              when an unknown <br /> printer took a galley of type and scrambled it to make a type <br /> specimen book. 
              It has survived not only five centuries.
            </p>
            <button className="bg-red-500 font-bold text-white text-[16px] mb-3 px-6 py-2 rounded-full hover:bg-red-600 transition w-fit">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
