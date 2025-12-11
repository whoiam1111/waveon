"use client";

import Link from "next/link";
import Image from "next/image";
import { ParsedProject } from "@/types/project";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

interface ProjectCardProps {
	project: ParsedProject;
}

const CATEGORY_COLORS: Record<string, string> = {
	테마카페: "bg-rose-500/90 text-white",
	공연: "bg-violet-500/90 text-white",
	"전시/상영": "bg-amber-500/90 text-white",
	default: "bg-blue-600/90 text-white",
};

export default function ProjectCard({ project }: ProjectCardProps) {
	const imageUrl =
		project.image_urls.poster_image ||
		project.image_urls.event_photos?.[0] ||
		"/placeholder.jpg";
	const categoryColor =
		CATEGORY_COLORS[project.project_category] || CATEGORY_COLORS["default"];

	return (
		<Link
			href={`/history/${project.uid}`}
			className="group flex flex-col md:flex-row bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 h-full md:h-64"
		>
			{/* Image Container */}
			<div className="relative aspect-[4/3] md:aspect-[4/3] md:h-full md:w-64 shrink-0 overflow-hidden">
				<Image
					src={imageUrl}
					alt={project.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity md:hidden" />

				{/* Category Badge - Mobile Only */}
				<div className="absolute top-4 left-4 md:hidden">
					<span
						className={clsx(
							"px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md shadow-lg",
							categoryColor
						)}
					>
						{project.project_category}
					</span>
				</div>
			</div>

			{/* Content */}
			<div className="flex flex-col flex-1 p-6 relative">
				<div className="flex items-start justify-between gap-4 mb-3">
					<div className="flex flex-col gap-2">
						{/* Category Badge - Desktop Only */}
						<span
							className={clsx(
								"hidden md:inline-block px-3 py-1 text-xs font-semibold rounded-full w-fit mb-1",
								categoryColor
							)}
						>
							{project.project_category}
						</span>
						<h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
							{project.title}
						</h3>
					</div>
					<ArrowUpRight className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
				</div>

				<p className="text-slate-400 text-sm md:text-base line-clamp-2 mb-6 flex-1">
					{project.description}
				</p>

				<div className="flex items-center gap-6 text-xs md:text-sm text-slate-500 border-t border-slate-800 pt-4 mt-auto">
					<span className="flex items-center gap-2">
						📅 {project.start_date || project.created_at.split("T")[0]}
					</span>
					{project.place && (
						<span className="flex items-center gap-2">📍 {project.place}</span>
					)}
				</div>
			</div>
		</Link>
	);
}
