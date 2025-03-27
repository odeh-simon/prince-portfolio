"use client";

import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { useTheme } from "next-themes";
import Testimonial from "@/components/Tesimonial";

export default function Home() {
  const { theme } = useTheme();
  interface Project {
    id: number;
    projectName: string;
    projectStatus: string;
    projectSubtitle: string;
    projectDescription: string;
    darkHeaderImage: string;
    lightHeaderImage: string;
    caseStudyLink?: string;
    liveProjectLink?: string;
    linkText?: string;
  }

  const [projectData, setProjectData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data exists in local storage
        const cachedData = localStorage.getItem("projectData");
        if (cachedData) {
          setProjectData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        // Fetch data from Cloudinary
        const response = await fetch(
          "https://res.cloudinary.com/ddax4blfi/raw/upload/v1742916146/mock_bjeb1s.json"
        );
        const data: Project[] = await response.json(); 

        // Save data to state and local storage
        setProjectData(data);
        localStorage.setItem("projectData", JSON.stringify(data));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 lg:px-8">
      <Hero />
      {loading ? (
        // Show the loading spinner while data is being fetched
        <div className="flex justify-center items-center mt-12">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* testimonial section */}
      <section className="flex flex-col mt-10 lg:mt-12 mb-12 md:mb-20">
        <h1 className="text-xl md:text-[40px] font-bold">Reviews</h1>
        <p className={`${
              theme === "dark" ? "text-[#858585]" : "text-[#717171]"
            } font-medium text-sm md:text-xl mb-4`}>
          Check out my clients&apos; testimonials to see how my work has boosted
          their businesses.
        </p>
        <Testimonial />
      </section>
    </div>
  );
}
