// Type definition for general project data
export interface Project {
  id: number;
  projectName: string;
  projectStatus: string;
  projectSubtitle: string;
  projectDescription: string;
  caseStudyLink?: string | null;
  liveProjectLink?: string | null;
  linkText?: string | null;
  yearOfInception?: number | null;
  darkHeroImage: string;
  lightHeroImage: string;
  headerText: string;
  overviewText: string;
  overviewImages: string[];
  problemStatement: {
    header?: string | null;
    items: string[];
  };
  solutionsStatement: {
    header?: string | null;
    items: string[];
  };
  solutionImages: string[];
  processStatement: {
    header?: string | null;
    items: string[];
  };
  designPriorities: {
    items: string[];
  };
  challengesAndIterations: {
    header1?: string | null;
    items1: string[];
    header2?: string | null;
    items2: string[];
  };
  resultStatement: {
    header?: string | null;
    items: string[];
  };
  lessonLearned: {
    items: string[];
  };
}

// Type definition for project gallery data
export interface ProjectGalleryType {
  id: number;
  images?: {
    path: string;
    alt: string;
  }[]; // For projects without sections
  sections?: {
    sectionName: string;
    description?: string; // Optional description for the section
    images: {
      path: string;
      alt: string;
    }[];
  }[]; // For projects with sections
}