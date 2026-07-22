export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  projectUrl?: string;
  caseStudyUrl?: string;
};