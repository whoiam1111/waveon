"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Project } from "@/types/project";
import ProjectCard from "./project-card";
import FadeIn from "../ui/fade-in";
import { SlidersHorizontal, Loader2 } from "lucide-react";

interface ProjectListProps {
	initialProjects: Project[];
	initialCategory?: string;
}

const ITEMS_PER_PAGE = 5;

// Define filter categories
const CATEGORIES = [
	{ id: "all", label: "전체" },
	{ id: "popup", label: "팝업" },
	{ id: "performance", label: "공연" },
	{ id: "etc", label: "기타" },
];

export default function ProjectList({
	initialProjects,
	initialCategory,
}: ProjectListProps) {
	const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
	// Initialize category from prop or default to 'all'
	const [selectedCategory, setSelectedCategory] = useState<string>(
		initialCategory || "all"
	);
	const [visibleItems, setVisibleItems] = useState<number>(ITEMS_PER_PAGE);
	const [isLoading, setIsLoading] = useState(false);

	// Create an intersection observer ref
	const observerTarget = useRef<HTMLDivElement>(null);

	// Update selectedCategory if initialCategory changes
	useEffect(() => {
		if (initialCategory) {
			setSelectedCategory(initialCategory);
		}
	}, [initialCategory]);

	// No parsing needed as image_urls is already string[]
	const parsedProjects = initialProjects;

	// Filter projects
	const filteredProjects = parsedProjects.filter((project) => {
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

	const sortedProjects = [...filteredProjects].sort((a, b) => {
		const dateA = new Date(a.start_date!).getTime();
		const dateB = new Date(b.start_date!).getTime();
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

	// Reset pagination when sort or category changes
	useEffect(() => {
		setVisibleItems(ITEMS_PER_PAGE);
	}, [sortOrder, selectedCategory]);

	return (
		<div className="space-y-8 max-w-4xl mx-auto">
			{/* Toolbar: Category on Left, Sort on Right */}
			<div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
				{/* Category Filter Buttons */}
				<div className="flex items-center gap-2 bg-slate-900/50 p-1.5 rounded-xl border border-slate-800">
					{CATEGORIES.map((cat) => (
						<button
							key={cat.id}
							onClick={() => setSelectedCategory(cat.id)}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
								selectedCategory === cat.id
									? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
									: "text-slate-400 hover:text-white hover:bg-slate-800"
							}`}
						>
							{cat.label}
						</button>
					))}
				</div>

				{/* Sort Controls */}
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
