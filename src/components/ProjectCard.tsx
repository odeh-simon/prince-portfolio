"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

// Define the type for the project prop
interface Project {
  projectName: string;
  projectStatus: string;
  projectSubtitle: string;
  projectDescription: string;
  darkHeaderImage: string;
  lightHeaderImage: string;
  caseStudyLink?: string | null;
  liveProjectLink?: string | null;
  linkText?: string | null;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useTheme();

  const projectCardImage = () => {
    return theme === "dark" ? project.darkHeaderImage : project.lightHeaderImage;
  };

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-[#1E1E1E] border-[#CCCCCC59]"
          : "bg-[#ECECEC] border-[#22222259]"
      } border rounded-[20px] w-full p-4 cursor-pointer hover:shadow-md transition flex flex-col lg:flex-row gap-4 md:gap-10`}
    >
      {/* Left container for name and subtitle */}
      <div className="flex flex-col flex-1 lg:w-1/2">
        <div className="flex flex-col gap-3">
          <h3
            className={`${
              theme === "dark" ? "text-[#ccc]" : "text-[#222]"
            } underline text-sm md:text-xl font-medium`}
          >
            {project.projectName} <span>({project.projectStatus})</span>
          </h3>
          <p
            className={`${
              theme === "dark" ? "text-[#F1F1F1]" : "text-[#131211]"
            } text-xl md:text-[32px] font-bold`}
          >
            {project.projectSubtitle}
          </p>
        </div>

        {/* Image container for mobile */}
        <div className="block lg:hidden my-4">
          <Image
            src={projectCardImage()}
            alt={project.projectName}
            className="w-full h-full"
            width={654}
            height={496}
          />
        </div>

        {/* Description and links */}
        <div className="lg:mt-2 flex flex-col">
          <p
            className={`${
              theme === "dark" ? "text-[#ccc]" : "text-[#222]"
            } text-sm md:text-lg font-medium`}
          >
            {project.projectDescription}
          </p>

          {/* Render the case study link only if it exists */}
          {project.liveProjectLink && (
            <a
              href={project.liveProjectLink}
              className="text-[#DE950C] underline font-bold text-sm md:text-lg"
              rel="noopener noreferrer"
              target="_blank"
            >
              {project.linkText}
            </a>
          )}

          {/* Render the live project link or a "Coming Soon" button */}
          <div
            className={`rounded-[30px] w-full lg:w-fit border-2 ${
              project.caseStudyLink
                ? "border-[#DE950C] bg-[#DE950C]"
                : "border-gray-500 bg-gray-500"
            } backdrop-blur-[47px] px-4 py-[16px] mt-[50px] flex items-center justify-center`}
          >
            {project.caseStudyLink ? (
              <Link
                href={project.caseStudyLink}
                className="text-[#fff] font-medium text-sm md:text-lg"
                rel="noopener noreferrer"
              >
                Read Case Study
              </Link>
            ) : (
              <button
                className="text-[#fff] w-full font-medium text-sm md:text-lg cursor-not-allowed"
                disabled
              >
                Coming Soon
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Image container for larger screens */}
      <div className="hidden lg:block flex-shrink-0 lg:w-1/2 max-w-[654px]">
        <Image
          src={projectCardImage()}
          alt={project.projectName}
          className="w-full h-full"
          width={654}
          height={496}
        />
      </div>
    </div>
  );
}
