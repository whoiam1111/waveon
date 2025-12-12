"use client";

import FadeIn from "@/components/ui/fade-in";
import EventCarousel from "@/components/project/event-carousel";
import { useEvents } from "@/hooks/use-events";
import { Loader2 } from "lucide-react";
import { useMemo } from "react";
import { Project } from "@/types/project";

export default function SchedulePage() {
	const { data, isLoading, error } = useEvents(100);

	const ongoingProjects = useMemo(() => {
		if (!data?.items) return [];
		const today = new Date().toISOString().split("T")[0];
		// Filter logical ongoing projects: end_date >= today
		// Map APIEvent to Project
		return data.items
			.filter((event) => {
				const endDate = event.project_date || event.end_date;
				return endDate && endDate >= today;
			})
			.map((event) => event as unknown as Project); // Cast safely as types align mostly, verify if properties match strictly
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
				Failed to load projects.
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-slate-950">
			<div className="max-w-5xl mx-auto px-6 w-full z-10 pt-32 pb-2 relative overflow-hidden">
				{/* Background Effects */}
				<div className="absolute inset-0 bg-slate-950" />
				<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

				{/* Header */}
				<div className="relative z-10">
					<FadeIn className="mb-16 text-center max-w-3xl mx-auto">
						<h1 className="text-sm font-semibold tracking-widest text-blue-400 mb-3 uppercase">
							Project
						</h1>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
							프로젝트
						</h2>
						<p className="text-slate-400 leading-relaxed text-lg">
							지금 WAVE ON에서 진행 중인 프로젝트를 만나보세요.
							<br />
							당신의 참여를 기다리고 있습니다.
						</p>
						<div className="h-px w-24 bg-blue-500 mx-auto mt-8" />
					</FadeIn>

					{/* Main Carousel Section */}
					<FadeIn delay={0.2} className="mb-24">
						<EventCarousel projects={ongoingProjects} />
					</FadeIn>
				</div>
			</div>
		</main>
	);
}
