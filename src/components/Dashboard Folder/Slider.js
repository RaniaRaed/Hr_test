import React, { useState, useEffect } from 'react';
import './Slider.css';

// استيراد الصور الافتراضية (تعديل المسارات حسب ملفات المشروع)
import image1 from '../img/image 1.png';
import image2 from '../img/image 2.png';
import image3 from '../img/image 3.png';

const Slider = ({ adminImage, adminTitle, adminDescription }) => {
  const defaultImages = [
    { id: 1, src: image1, title: 'Title 1', description: 'Description 1' },
    { id: 2, src: image2, title: 'Title 2', description: 'Description 2' },
    { id: 3, src: image3, title: 'Title 3', description: 'Description 3' },
  ];

  const [images, setImages] = useState(defaultImages);
  const [selectedImage, setSelectedImage] = useState(defaultImages[0]);

  useEffect(() => {
    if (adminImage) {
      const newImage = {
        id: images.length + 1,
        src: adminImage,
        title: adminTitle || 'Admin Image',
        description: adminDescription || 'Uploaded by Admin',
      };
      setImages([newImage, ...defaultImages]);
      setSelectedImage(newImage);
    }
  }, [adminImage, adminTitle, adminDescription]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="slider-container">
      <div className="selected-image">
        <img src={selectedImage.src} alt={selectedImage.title} />
        <div className="image-overlay">
          <h3>{selectedImage.title}</h3>
          <p>{selectedImage.description}</p>
        </div>
      </div>

      <div className="thumbnails">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.title}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
