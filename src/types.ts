import { ProjectCategory, CodeLink } from "./utils/projects";

export type ProjectType = {
  id: string;
  title: string;
  cover: string;
  tags: string[];
  desc: string;
  longDesc?: string;
  code_links?: CodeLink[];
  deploy_link: string;
  categories?: ProjectCategory[];
  features?: string[];
  techDetails?: string[];
};
