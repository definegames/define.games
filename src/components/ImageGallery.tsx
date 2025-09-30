"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  gridCols?: string;
  aspectRatio?: "square" | "video";
  imageSize?: {
    width: number;
    height: number;
  };
  gap?: string;
  className?: string;
}

export default function ImageGallery({
  images,
  gridCols = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  aspectRatio = "square",
  imageSize = { width: 300, height: 300 },
  gap = "gap-4",
  className = "",
}: ImageGalleryProps): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openModal = (imagePath: string, index: number): void => {
    setSelectedImage(imagePath);
    setSelectedIndex(index);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next"): void => {
    const newIndex =
      direction === "prev" ? (selectedIndex - 1 + images.length) % images.length : (selectedIndex + 1) % images.length;

    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft") {
      navigateImage("prev");
    } else if (e.key === "ArrowRight") {
      navigateImage("next");
    }
  };

  const aspectClass = aspectRatio === "square" ? "aspect-square" : "aspect-video";

  return (
    <>
      {/* Image Grid */}
      <div className={`grid ${gridCols} ${gap} ${className}`}>
        {images.map((imagePath, index) => (
          <div
            key={index}
            className={`${aspectClass} bg-gray-100 rounded-lg border border-gray-200 overflow-hidden
              hover:shadow-md transition-shadow cursor-pointer`}
            onClick={() => openModal(imagePath, index)}
          >
            <Image
              src={imagePath}
              alt={`Gallery image ${index + 1}`}
              width={imageSize.width}
              height={imageSize.height}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-xl z-10
                bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white
                    hover:text-gray-300 text-3xl z-10 bg-black bg-opacity-50 rounded-full
                    w-12 h-12 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("prev");
                  }}
                >
                  ‹
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white
                    hover:text-gray-300 text-3xl z-10 bg-black bg-opacity-50 rounded-full
                    w-12 h-12 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("next");
                  }}
                >
                  ›
                </button>
              </>
            )}

            {/* Image */}
            <div className="flex items-center justify-center">
              <Image
                src={selectedImage}
                alt={`Full size image ${selectedIndex + 1}`}
                width={1200}
                height={1200}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm"
              >
                {selectedIndex + 1} of {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
