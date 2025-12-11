"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Project, ParsedProject } from "@/types/project";
import ProjectCard from "./project-card";
import FadeIn from "../ui/fade-in";
import { SlidersHorizontal, Loader2 } from "lucide-react";

interface ProjectListProps {
	initialProjects: Project[];
}

const ITEMS_PER_PAGE = 5;

export default function ProjectList({ initialProjects }: ProjectListProps) {
	const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
	const [visibleItems, setVisibleItems] = useState<number>(ITEMS_PER_PAGE);
	const [isLoading, setIsLoading] = useState(false);

	// Create an intersection observer ref
	const observerTarget = useRef<HTMLDivElement>(null);

	// Parse projects
	const parsedProjects: ParsedProject[] = initialProjects.map((p) => {
		let images = {};
		try {
			images = JSON.parse(p.image_urls);
		} catch (e) {
			console.error("Failed to parse image_urls for project", p.uid);
		}
		return {
			...p,
			image_urls: images,
		};
	});

	const sortedProjects = [...parsedProjects].sort((a, b) => {
		const dateA = new Date(a.created_at).getTime();
		const dateB = new Date(b.created_at).getTime();
		return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
	});

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

	// Reset pagination when sort changes
	useEffect(() => {
		setVisibleItems(ITEMS_PER_PAGE);
	}, [sortOrder]);

	return (
		<div className="space-y-8 max-w-4xl mx-auto">
			{/* Controls */}
			<div className="flex justify-end items-center mb-8">
				<div className="flex items-center gap-3 bg-slate-900/50 p-1.5 rounded-lg border border-slate-800">
					<SlidersHorizontal className="w-4 h-4 text-slate-400 ml-2" />
					<select
						value={sortOrder}
						onChange={(e) =>
							setSortOrder(e.target.value as "latest" | "oldest")
						}
						className="bg-transparent text-sm text-slate-200 border-none focus:ring-0 cursor-pointer pr-8 py-1"
					>
						<option value="latest" className="bg-slate-900">
							최신순
						</option>
						<option value="oldest" className="bg-slate-900">
							오래된순
						</option>
					</select>
				</div>
			</div>

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
							<span className="text-sm">Loading more projects...</span>
						</div>
					)}
				</div>
			)}

			{sortedProjects.length === 0 && (
				<div className="text-center py-20 text-slate-500">
					<p>등록된 프로젝트가 없습니다.</p>
				</div>
			)}
		</div>
	);
}
