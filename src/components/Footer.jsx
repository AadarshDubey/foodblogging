import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gray-50 text-black py-10">
      <div className="flex flex-col items-start ml-20 mt-4 mb-6 md:mb-0">
          <img src="/public/foodtruck.svg" alt="FoodTruck Logo" className=" h-[125px] w-[161px] mt-12" />
        </div>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start">

        <div className="-mt-32 ml-48 flex-1 text-left ">
          <h3 className=" text-[18.84px] font-semibold text-blue  mb-2">Contact Us</h3>
          <p className="mb-1 text-[14.66px]">Lorem Ipsum Pvt Ltd.</p>
          <p className="mb-1 text-[14.66px]">5/1, Magalton Road, Phartosh Gate</p>
          <p className="mb-4 text-[14.66px] ">near YTM Market, XYZ-343434</p>
          <p className="mb-4 text-[14.66px] ">example2020@gmail.com</p>
          <p className='text-[14.66px]'>(904) 443-0343</p>
        </div>

        <div className="-mt-32 mr-56 flex flex-col items-start md:items-end space-y-4">
          <div>
            <h3 className="text-[18.84px] font-semibold text-blue mb-4">More</h3>
            <ul className="space-y-4 text-left ">
              <li><a href="#" className="hover:underline text-[14.66px]">About Us</a></li>
              <li><a href="#" className="hover:underline text-[14.66px]">Products</a></li>
              <li><a href="#" className="hover:underline text-[14.66px]">Career</a></li>
              <li><a href="#" className="hover:underline text-[14.66px] ">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className=" -mt-32 flex flex-col items-start md:items-end space-y-4">
          <h3 className="text-[18.84px] font-semibold text-blue mb-2 ">Social Links</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Instagram" className="hover:text-blue-700">
              <img src="/public/instagram.svg" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-700">
              <img src="/public/twitter.svg" alt="Twitter" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-700">
              <img src="/public/facebook.svg" alt="Facebook" className="mb-16 h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400 text-[14.66px] ">© 2022 Food Truck Example</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
