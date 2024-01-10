import React, { useState } from 'react';
import './Banner.css';

function Banner() {
  const [showBanner, setShowBanner] = useState(false);

  const checkBannerTop = () => {
    if (!showBanner && window.pageYOffset > 500) {
      setShowBanner(true);
    } else if (showBanner && window.pageYOffset <= 500) {
      setShowBanner(false);
    }
  };

  window.addEventListener('scroll', checkBannerTop);
  return (
    <div className="bg-green-600 bannerTop" style={{ display: showBanner ? 'flex' : 'none' }}>
            <div className="w-full mx-auto px-4 py-3 text-[10px] sm:text-sm items-center gap-x-4 justify-center text-white flex md:px-8">
                <p className="py-2 font-medium">
                Refer our service to your neighbors and receive a $25 award!
                </p>
            </div>
            
        </div>
  );
}

export default Banner;