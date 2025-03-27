"use client"
import React from "react";
import Image from "next/image";
import type { ProjectGalleryType } from "@/types/projectType";
import { useTheme } from "next-themes";

interface ProjectGalleryProps {
  project: ProjectGalleryType;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project }) => {
  const {theme} = useTheme();

  if (project.images && !project.sections) {
    // Render only images if no sections are present
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {project.images.map((image, index) => (
          <Image
            key={index}
            src={image.path}
            alt={image.alt}
            className="w-full h-auto shadow"
            width={500}
            height={300}
          />
        ))}
      </div>
    );
  }

  if (project.sections) {
    // Render sections with or without descriptions
    return (
      <div className="flex flex-col gap-6">
        {project.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col">
            {/* Render section header */}
            {section.sectionName && (
              <h2 className={`text-lg md:text-[32px] font-bold underline ${theme === "dark" ? "text-[#F1F1F1]" : "text-[#222]" }`}>
                {section.sectionName}
              </h2>
            )}

            {/* Render section description if available */}
            {section.description && (
              <p className={`text-sm md:text-lg lg:text-xl font-medium mb-3 ${theme === "dark" ? "text-[#ccc]" : "text-[#222]" }`}>
                {section.description}
              </p>
            )}

            {/* Render section images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {section.images.map((image, imageIndex) => (
                <Image
                  key={imageIndex}
                  src={image.path}
                  alt={image.alt}
                  className="w-full h-auto shadow"
                  width={500}
                  height={300}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null; // Fallback if no valid data is provided
};

export default ProjectGallery;