"use client";

import FadeIn from "../ui/fade-in";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { useEvents } from "@/hooks/use-events";
import { useMemo } from "react";
import { Project } from "@/types/project";

// Helper to safely get image
function getPosterImage(project: Project): string {
	if (project.poster_url) return project.poster_url;
	if (project.image_urls && project.image_urls.length > 0)
		return project.image_urls[0];
	return "";
}

export default function CurrentWaves() {
	// Fetch events
	const { data, isLoading } = useEvents(20);

	const featuredProject = useMemo(() => {
		if (!data?.items) return null;
		const today = new Date().toISOString().split("T")[0];
		// Find first ongoing project
		const ongoing = data.items.find((event) => {
			const endDate = event.project_date || event.end_date;
			return endDate && endDate >= today;
		});
		return ongoing ? (ongoing as unknown as Project) : null;
	}, [data]);

	if (isLoading) return null; // Or a loader

	return (
		<section
			id="current-waves"
			className="py-24 bg-slate-950 text-white overflow-hidden"
		>
			<div className="max-w-5xl mx-auto px-6 w-full">
				<FadeIn className="mb-8 md:mb-12 flex md:flex-row flex-col gap-2 justify-between items-end">
					<div>
						<span className="text-blue-500 font-bold tracking-widest text-sm mb-2 block">
							ON AIR
						</span>
						<h2 className="text-4xl font-bold">
							NOW: 지금 <span className="text-blue-400">WAVE ON</span>의 흐름
						</h2>
					</div>
					<Link
						href="/project"
						className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
					>
						더보기 <ArrowRight size={18} />
					</Link>
				</FadeIn>

				{featuredProject ? (
					<FadeIn className="group cursor-pointer">
						<Link href={`/history/${featuredProject.uid}`}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
								{/* Image Section */}
								<div className="h-[400px] md:h-[500px] rounded-2xl relative overflow-hidden bg-slate-800 shadow-2xl shadow-blue-900/20">
									{getPosterImage(featuredProject) ? (
										<img
											src={getPosterImage(featuredProject)}
											alt={featuredProject.title}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
										/>
									) : (
										<div className="w-full h-full bg-slate-800" />
									)}

									<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
									<div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold border border-white/20">
										{featuredProject.project_category}
									</div>
								</div>

								{/* Info Section */}
								<div className="flex flex-col h-full justify-center">
									<h3 className="text-3xl md:text-5xl font-bold mb-6 group-hover:text-blue-400 transition-colors leading-tight">
										{featuredProject.title}
									</h3>
									<p className="text-slate-400 mb-6 md:mb-8 text-lg leading-relaxed line-clamp-3">
										{featuredProject.description}
									</p>

									<div className="space-y-4 mb-6 md:mb-10">
										<div className="flex items-center gap-3 text-lg text-slate-300">
											<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
												<Calendar size={20} />
											</div>
											<span>
												{featuredProject.start_date} -{" "}
												{featuredProject.end_date}
											</span>
										</div>
										<div className="flex items-center gap-3 text-lg text-slate-300">
											<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
												<MapPin size={20} />
											</div>
											<span>{featuredProject.place}</span>
										</div>
									</div>

									<div className="flex items-center gap-2 text-blue-400 font-bold text-lg group-hover:translate-x-2 transition-transform">
										자세히 보기 <ArrowRight size={20} />
									</div>
								</div>
							</div>
						</Link>
					</FadeIn>
				) : (
					<div className="text-center py-20 text-slate-500">
						현재 진행 중인 프로젝트가 없습니다.
					</div>
				)}
			</div>
		</section>
	);
}
