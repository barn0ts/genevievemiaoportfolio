"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    quote: string;
    description: string;
    imageSrc: string;
    myRole: React.ReactNode;
    contributions: string;
    myTeam: React.ReactNode;
    learnings: string;
    buttons: string[];
    previewImages: string[];
    link?: string;
  };
}

const ProjectDetails = ({ project }: ProjectProps) => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCloseClick = () => {
    router.push("/projects");
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.previewImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.previewImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative py-10 bg-white">
      <button
        onClick={handleCloseClick}
        className="absolute top-10 right-4 md:right-48 bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-100 transition-colors duration-200"
      >
        <X size={20} className="text-gray-700" />
      </button>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
            {project.title}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight size={24} className="text-gray-700 hover:text-gray-900" />
              </a>
            )}
          </h2>
        </div>
        <p className="text-[#FF9A02] mb-4">{project.quote}</p>

        <p className="text-gray-800 leading-relaxed mb-4">{project.description}</p>

        <div className="flex gap-4 mb-16">
          {project.buttons.map((buttonLabel, index) => (
            <button
              key={index}
              className="bg-white border text-gray-800 font-semibold py-2 px-4 rounded-lg inline-flex items-center"
            >
              {buttonLabel}
            </button>
          ))}
        </div>

        <div className="relative h-[20rem] md:h-[50rem] mb-16">
          <Image
            src={project.imageSrc}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">My Role</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{project.myRole}</p>

            <h3 className="text-2xl font-semibold mb-2">Contributions</h3>
            <p className="text-gray-700 leading-relaxed">{project.contributions}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">My Team</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{project.myTeam}</p>

            <h3 className="text-2xl font-semibold mb-2">My Learnings</h3>
            <p className="text-gray-700 leading-relaxed">{project.learnings}</p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-8">Project Preview</h2>

          <div className="relative h-[30rem] md:h-[45rem] mb-4">
            <Image
              src={project.previewImages[currentImageIndex]}
              alt={`Preview ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="contain"
              className="rounded-lg bg-[#ffe5c4] py-10"
            />

            <button
              onClick={handlePrevClick}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-90 text-gray-800 font-semibold py-2 px-4 rounded-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNextClick}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-90 text-gray-800 font-semibold py-2 px-4 rounded-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {project.previewImages.slice(0, 12).map((image, index) => (
              <div
                key={index}
                className={`w-20 h-20 relative cursor-pointer rounded-md overflow-hidden ${
                  index === currentImageIndex ? 'ring-2 ring-[#FF9A02]' : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;