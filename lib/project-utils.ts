import { Project } from "@/types/project";

// Helper to safely get image
export function getPosterImage(project: Project): string {
	if (project.poster_url) return project.poster_url;
	if (project.image_urls && project.image_urls.length > 0)
		return project.image_urls[0];
	return "";
}
