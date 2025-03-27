"use client";

import React, { useEffect, useState } from "react";
import { notFound, useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Project, ProjectGalleryType } from "../../../types/projectType";
import { fetchProjects, fetchProjectGallery } from "../../../api/FetchProjects";
import backArrowBlack from "../../../assets/back-arrow.svg";
import backArrowWhite from "../../../assets/back-arrow-white.svg";
import LoadingSpinner from "@/components/LoadingSpinner";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectDetails() {
  const { theme } = useTheme();
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [gallery, setGallery] = useState<ProjectGalleryType | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { id } = params;

        if (!id || Array.isArray(id)) {
          notFound(); // Trigger a 404 page if the ID is not provided or is an array
          return;
        }

        // Fetch general project data
        const projectsData = await fetchProjects();
        const projectData = projectsData.find((p) => p.id === parseInt(id));
        if (!projectData) {
          notFound(); // Trigger a 404 page if the project is not found
          return;
        }
        setProject(projectData);

        // Fetch the next project
        const nextProjectData = projectsData.find(
          (p) => p.id === parseInt(id) + 1
        );
        setNextProject(nextProjectData || null);

        // Fetch project gallery data
        const galleryData = await fetchProjectGallery();
        const projectGallery = galleryData.find((g) => g.id === parseInt(id));
        setGallery(projectGallery || null); // Set null if no gallery data is found
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params]);

  const projectCardImage = () => {
    if (theme === "dark") {
      return project?.darkHeroImage;
    } else {
      return project?.lightHeroImage;
    }
  };

  const backArrow = () => {
    if (theme === "dark") {
      return backArrowBlack;
    } else {
      return backArrowWhite;
    }
  };

  if (!project) {
    return <LoadingSpinner />;
  }

  return (
    <div
      className={`${
        theme === "dark" ? "text-[#CCC]" : "text-[#222]"
      } p-5 md:p-8 w-full flex flex-col gap-6 lg:gap-10`}
    >
      {/* header section */}
      <section>
        <div className="flex items-center justify-between text-lg md:text-5xl font-bold">
          <div className="flex items-center gap-2 mb-3">
            <button onClick={() => router.push("/")} className="cursor-pointer">
              <Image
                src={backArrow()}
                alt="go back arrow icon"
                className="w-[7px] h-[14px] md:w-5 md:h-10"
              />
            </button>
            <h1 className="">{project.projectName}</h1>
          </div>
          <p
            className={`${
              theme === "dark" ? "text-[#858585]" : "text-[#717171]"
            }`}
          >
            {project.yearOfInception}
          </p>
        </div>
        <div className="">
          <Image
            src={projectCardImage() || project.darkHeroImage}
            alt={project.projectName}
            className="h-auto"
            width={1240}
            height={100}
          />
        </div>
        <p
          className={`mt-2 border-b pb-6 lg:pb-10 ${
            theme === "dark"
              ? "text-[#858585] border-[#F1F1F1]"
              : "text-[#717171] border-[#222]"
          }`}
        >
          {project.headerText}
        </p>
      </section>
      {/* overview section */}
      <section>
        <h2 className="text-lg md:text-[40px] font-bold underline">Overview</h2>
        <p
          className={`${
            theme === "dark" ? "text-[#ccc]" : "text-[#222]"
          } text-sm md:text-xl font-medium`}
        >
          {project.overviewText}
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {project.overviewImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Overview ${index + 1}`}
              className="w-full md:w-1/2 h-auto"
              width={660}
              height={545.519}
            />
          ))}
        </div>
      </section>

      {/* problem statement section */}
      <section>
        <h1 className="text-lg md:text-[40px] font-bold underline">
          The Problem
        </h1>
        <h2 className="text-2xl font-bold">
          {project.problemStatement.header}
        </h2>
        <ul
          className={`${
            project.problemStatement.items.length === 1
              ? "list-none"
              : "list-disc list-outside ml-5"
          } text-sm md:text-xl font-medium`}
        >
          {project.problemStatement.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* solution section */}
      <section>
        <h1 className="text-lg md:text-[40px] font-bold underline">
          The Solution
        </h1>
        <h2 className="text-sm md:text-xl font-medium">
          {project.solutionsStatement.header}
        </h2>
        <ul className="list-disc list-outside ml-5 text-sm md:text-xl font-medium">
          {project.solutionsStatement.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {project.solutionImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Solution ${index + 1}`}
              className="w-full md:w-1/2 h-auto"
              width={660}
              height={545.519}
            />
          ))}
        </div>
      </section>
      {/* process section */}
      <section className="flex flex-col gap-3">
        <div>
          <h1 className="text-lg md:text-[40px] font-bold underline">
            My Process
          </h1>
          <h2 className="text-sm md:text-xl font-bold">
            {project.processStatement.header}
          </h2>
          <ul className="list-disc list-outside ml-5 text-sm md:text-xl font-medium">
            {project.processStatement.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* design priorities */}
        <div>
          <h1 className="text-sm md:text-xl font-bold">Design Priorities</h1>
          <ul className="list-disc list-outside ml-5 text-sm md:text-xl font-medium">
            {project.designPriorities.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* challenges and iteration */}
      <section className="flex flex-col gap-3">
        <div>
          <h1 className="text-lg md:text-[40px] font-bold underline">
            Challenges and Iteration
          </h1>
          <h2 className="text-sm md:text-xl font-bold">
            {project.challengesAndIterations.header1}
          </h2>
          <ul className="list-disc list-outside ml-5 text-sm md:text-xl font-medium">
            {project.challengesAndIterations.items1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* iterations */}
        <div>
          <h2 className="text-sm md:text-xl font-bold">
            {project.challengesAndIterations.header2}
          </h2>
          <ul className="list-disc list-outside ml-5 text-sm md:text-xl font-medium">
            {project.challengesAndIterations.items2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* result section */}
      <section>
        <h1 className="text-lg md:text-[40px] font-bold underline">
          The Results
        </h1>
        <h2 className="text-sm md:text-xl font-medium">
          {project.resultStatement.header}
        </h2>
        <ul className="list-disc list-outside ml-5 text-sm md:text-xl font-medium">
          {project.resultStatement.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* lessons learned section */}
      <section>
        <h1 className="text-lg md:text-[40px] font-bold underline">
          Lessons Learned
        </h1>
        <ul className="gap-2 flex flex-col text-sm md:text-xl font-medium">
          {project.lessonLearned.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Dynamic Project Gallery Section */}
      <section
        className={`pb-[80px] border-b ${
          theme === "dark" ? "border-[#F1F1F1]" : "border-[#222]"
        }`}
      >
        <div className="mb-4">
          <h1 className="text-lg md:text-[40px] font-bold underline">
            {project.projectName} Images
          </h1>
          <p>
            Below is a quick breakdown and some screenshots of{" "}
            {project.projectName} core sections.
          </p>
        </div>
        {gallery ? (
          <ProjectGallery project={gallery} />
        ) : (
          <p className="text-center text-gray-500">
            No gallery data available.
          </p>
        )}
      </section>

      {/* Next Project Section */}
      {nextProject && (
        <section className="mb-4 lg:mb-8">
          <h2 className="text-lg md:text-[40px] font-bold underline mb-8">
            Next Project
          </h2>
          <ProjectCard project={nextProject} />
        </section>
      )}
    </div>
  );
}
