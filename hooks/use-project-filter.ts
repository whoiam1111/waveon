import { useState, useMemo, useEffect } from "react";
import { Project } from "@/types/project";

export function useProjectFilter(
	initialProjects: Project[],
	initialCategory: string = "all"
) {
	const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
	const [selectedCategory, setSelectedCategory] =
		useState<string>(initialCategory);

	useEffect(() => {
		if (initialCategory) {
			setSelectedCategory(initialCategory);
		}
	}, [initialCategory]);

	const filteredProjects = useMemo(() => {
		return initialProjects.filter((project) => {
			if (selectedCategory === "all") return true;

			const category = project.project_category || "";

			if (selectedCategory === "popup") {
				return (
					category.includes("테마카페") ||
					category === "POP-UP" ||
					category.includes("전시")
				);
			}
			if (selectedCategory === "performance") {
				return category.includes("공연") || category.includes("축제");
			}
			if (selectedCategory === "etc") {
				return (
					!category.includes("테마카페") &&
					category !== "POP-UP" &&
					!category.includes("전시") &&
					!category.includes("공연") &&
					!category.includes("축제")
				);
			}
			return true;
		});
	}, [initialProjects, selectedCategory]);

	const sortedProjects = useMemo(() => {
		return [...filteredProjects].sort((a, b) => {
			const dateA = new Date(a.start_date!).getTime();
			const dateB = new Date(b.start_date!).getTime();
			return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
		});
	}, [filteredProjects, sortOrder]);

	return {
		selectedCategory,
		setSelectedCategory,
		sortOrder,
		setSortOrder,
		sortedProjects,
	};
}
