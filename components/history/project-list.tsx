"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Project } from "@/types/project";
import ProjectCard from "./project-card";
import FadeIn from "../ui/fade-in";
import { Loader2 } from "lucide-react";
import ProjectToolbar from "./project-toolbar";
import { useProjectFilter } from "@/hooks/use-project-filter";

interface ProjectListProps {
	initialProjects: Project[];
	initialCategory?: string;
}

const ITEMS_PER_PAGE = 5;

export default function ProjectList({
	initialProjects,
	initialCategory,
}: ProjectListProps) {
	const {
		selectedCategory,
		setSelectedCategory,
		sortOrder,
		setSortOrder,
		sortedProjects,
	} = useProjectFilter(initialProjects, initialCategory);

	const [visibleItems, setVisibleItems] = useState<number>(ITEMS_PER_PAGE);
	const [isLoading, setIsLoading] = useState(false);

	// Create an intersection observer ref
	const observerTarget = useRef<HTMLDivElement>(null);

	const currentProjects = sortedProjects.slice(0, visibleItems);
	const hasMore = visibleItems < sortedProjects.length;

	const loadMore = useCallback(() => {
		if (isLoading || !hasMore) return;
		setIsLoading(true);

		// Simulate network delay for natural feel
		setTimeout(() => {
			setVisibleItems((prev) => prev + ITEMS_PER_PAGE);
			setIsLoading(false);
		}, 800);
	}, [isLoading, hasMore]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					loadMore();
				}
			},
			{ threshold: 1.0 }
		);

		if (observerTarget.current) {
			observer.observe(observerTarget.current);
		}

		return () => {
			if (observerTarget.current) {
				observer.unobserve(observerTarget.current);
			}
		};
	}, [loadMore]);

	// Reset pagination when sort or category changes
	useEffect(() => {
		setVisibleItems(ITEMS_PER_PAGE);
	}, [sortOrder, selectedCategory]);

	return (
		<div className="space-y-8 max-w-4xl mx-auto">
			{/* Toolbar: Category on Left, Sort on Right */}
			<ProjectToolbar
				selectedCategory={selectedCategory}
				onSelectCategory={setSelectedCategory}
				sortOrder={sortOrder}
				onSortChange={setSortOrder}
			/>

			{/* List - Single Column */}
			<div className="flex flex-col gap-6">
				{currentProjects.map((project, idx) => (
					<FadeIn key={project.uid} delay={idx * 0.05}>
						<ProjectCard project={project} />
					</FadeIn>
				))}
			</div>

			{/* Loading Skeletons or Spinner */}
			{hasMore && (
				<div ref={observerTarget} className="flex justify-center py-12">
					{isLoading && (
						<div className="flex flex-col items-center gap-2 text-slate-500">
							<Loader2 className="w-6 h-6 animate-spin text-blue-500" />
							<span className="text-sm">
								더 많은 프로젝트를 불러오고 있습니다.
							</span>
						</div>
					)}
				</div>
			)}

			{sortedProjects.length === 0 && (
				<div className="text-center py-20 text-slate-500">
					<p>해당 카테고리의 프로젝트가 없습니다.</p>
				</div>
			)}
		</div>
	);
}
