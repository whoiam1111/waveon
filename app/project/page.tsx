import FadeIn from "@/components/ui/fade-in";
import EventCarousel from "@/components/project/event-carousel";
import { MOCK_PROJECTS } from "@/data/projects";

// Filter for ongoing/future events
// Logic: End date is equal to or after today
function getOngoingProjects() {
	const today = new Date().toISOString().split("T")[0];
	return MOCK_PROJECTS.filter(
		(project) =>
			// If end_date is missing, assume it's ongoing or check start_date
			// For this logic, we strictly check if end_date >= today
			project.end_date && project.end_date >= today
	);
}

export default function SchedulePage() {
	const ongoingProjects = getOngoingProjects();

	return (
		<main className="min-h-screen bg-slate-950 pt-32 pb-24">
			<div className="container mx-auto px-6 max-w-7xl">
				{/* Header */}
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
		</main>
	);
}
