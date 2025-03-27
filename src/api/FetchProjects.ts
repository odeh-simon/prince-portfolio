import { Project, ProjectGalleryType } from "../types/projectType";

const PROJECTS_API_URL =
  "https://res.cloudinary.com/ddax4blfi/raw/upload/v1742916146/mock_bjeb1s.json";

const GALLERY_API_URL =
  "https://res.cloudinary.com/ddax4blfi/raw/upload/v1742954013/ProjectGallery_ccofrz.json";

// Fetch general project data
export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(PROJECTS_API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch project data");
    }
    const data: Project[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw error;
  }
};

// Fetch project gallery data
export const fetchProjectGallery = async (): Promise<ProjectGalleryType[]> => {
  try {
    const response = await fetch(GALLERY_API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch project gallery data");
    }
    const data = await response.json();

    // Ensure the data matches the expected structure
    if (data.projects && Array.isArray(data.projects)) {
      return data.projects as ProjectGalleryType[];
    } else {
      throw new Error("Invalid gallery data format");
    }
  } catch (error) {
    console.error("Error fetching project gallery data:", error);
    throw error;
  }
};