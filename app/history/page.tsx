"use client";

import FadeIn from "@/components/ui/fade-in";
import ProjectList from "@/components/history/project-list";
import { useEvents } from "@/hooks/use-events";
import { Loader2 } from "lucide-react";
import React, { useMemo } from "react";
import { Project } from "@/types/project";

interface ProjectsPageProps {
	searchParams: Promise<{ category?: string }>;
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
	const { data, isLoading, error } = useEvents(200); // Fetch more for history
	const { category } = React.use(searchParams);

	const completedProjects = useMemo(() => {
		if (!data?.items) return [];
		const today = new Date().toISOString().split("T")[0];

		return data.items
			.filter((event) => {
				// Logic: End date is before today
				const endDate = event.project_date || event.end_date;
				return endDate && endDate < today;
			})
			.map((event) => event as unknown as Project);
	}, [data]);

	if (isLoading) {
		return (
			<main className="min-h-screen bg-slate-950 flex items-center justify-center">
				<Loader2 className="w-8 h-8 animate-spin text-blue-500" />
			</main>
		);
	}

	if (error) {
		return (
			<main className="min-h-screen bg-slate-950 flex items-center justify-center text-red-400">
				Failed to load history.
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-slate-950">
			<div className="max-w-5xl mx-auto px-6 w-full pt-32 pb-24 relative overflow-hidden">
				{/* Background Effects */}
				<div className="absolute inset-0 bg-slate-950" />
				<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

				{/* Header */}
				<div className="relative z-10">
					<FadeIn className="mb-16 text-center max-w-3xl mx-auto">
						<h1 className="text-sm font-semibold tracking-widest text-blue-400 mb-3 uppercase">
							Our Works
						</h1>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
							히스토리
						</h2>
						<p className="text-slate-400 leading-relaxed text-lg">
							WAVE ON이 만들어온 즐거운 파도들의 기록입니다.
							<br />
							다양한 공간에서 펼쳐진 이야기들을 만나보세요.
						</p>
						<div className="h-px w-24 bg-blue-500 mx-auto mt-8" />
					</FadeIn>

					{/* Project List */}
					<ProjectList
						initialProjects={completedProjects}
						initialCategory={category}
					/>
				</div>
			</div>
		</main>
	);
}
