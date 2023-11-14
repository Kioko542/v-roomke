import React, { useState, useEffect } from 'react';

const Header = () => {
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual endpoint of your API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setSliderImages(data))
      .catch(error => console.error('Error fetching slider images:', error));
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden h-64">
        {sliderImages.length > 0 && (
          <div className="flex transition-transform ease-in-out duration-500 transform translate-x-[-100%]">
            {sliderImages.map((image, index) => (
              <img
                key={index}
                src={image.url} 
                alt={`Slider Image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
