import React, { useState } from 'react';
import './Banner.css';

function Banner() {
  const [showBanner, setShowBanner] = useState(false);

  const checkBannerTop = () => {
    if (!showBanner && window.pageYOffset > 700) {
      setShowBanner(true);
    } else if (showBanner && window.pageYOffset <= 700) {
      setShowBanner(false);
    }
  };

  window.addEventListener('scroll', checkBannerTop);
  return (
    <div className="bg-green-600 bannerTop" style={{ display: showBanner ? 'flex' : 'none' }}>
            <div className="max-w-screen-xl mx-auto px-4 py-3 text-[10px] sm:text-sm items-center gap-x-4 justify-center text-white flex md:px-8">
                <p className="py-2 font-medium">
                    Refer our service to neighbour and get 25$ award!
                </p>
                {/* <a href="javascript:void(0)" className="flex-none inline-block w-full py-2 px-3 text-center text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg w-auto sm:mt-0 text-sm">
                    Login
                </a> */}
            </div>
            
        </div>
  );
}

export default Banner;