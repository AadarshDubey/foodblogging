import React from 'react';

const Header = () => {
  return (
    <div className="min-h-screen flex items-start justify-between bg-white relative p-6">
      <div className="flex-1 text-left space-y-6">
        <img src="/public/foodtruck.svg" alt="Food Truck" className=" max-lg:hidden mt-[33px] ml-12 w-[107px] h-[83px] mb-4" />
        <div>
          <h1 className="text-[62px] font-bold text-blue mt-20 ml-12 leading-tight ">
            Discover the <br /><span className="text-red-600">Best</span> Food <br />
            and Drinks
          </h1>
          <p className="mt-4 ml-12 text-[16.44px] text-gray-700">
            Naturally made Healthcare Products for the <br />
            better care & support of your body.
          </p>
        </div>
        <button className="bg-red-500 font-bold text-white text-[18px] px-10 ml-12 py-5 rounded-full hover:bg-red-600 transition">
          Explore Now!
        </button>
      </div>
      <div className="relative w-[752px] h-[839px] flex-shrink-0">
        <img 
          src="/public/pizza.png" 
          alt="Pizza" 
          className="absolute -mt-10 -mr-10 top-0 right-0 w-[735px] h-[804px] rounded-bl-[198.9px]  max-sm:mr-96 max-sm:mt-5 max-sm:h-[600px] max-sm:w-[650px] "
        />
        <img 
          src="/public/redborder.png"
          alt="Red Border"
          className="  max-sm:mr-96 max-sm:mt-5 max-sm:h-[600px] max-sm:w-[650px] absolute -mt-7 -mr-7 top-0 right-0 w-[752px] h-[839px] opacity-100"
        />
        <button className="  absolute top-0 right-2 bg-transparent border border-white text-white font-text-[16px] px-6 py-3 rounded-full hover:bg-red-500 hover:text-white transition">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Header;
