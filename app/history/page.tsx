import FadeIn from "@/components/ui/fade-in";
import ProjectList from "@/components/history/project-list";
import { MOCK_PROJECTS } from "@/data/projects";

// Filter for completed projects (History)
// Logic: End date is before today
function getCompletedProjects() {
	const today = new Date().toISOString().split("T")[0];
	return MOCK_PROJECTS.filter(
		(project) =>
			// If end_date exists and is strictly less than today
			project.end_date && project.end_date < today
	);
}

export default function ProjectsPage() {
	const completedProjects = getCompletedProjects();

	return (
		<main className="min-h-screen bg-slate-950 pt-32 pb-24">
			<div className="container mx-auto px-6 max-w-7xl">
				{/* Header */}
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
				<ProjectList initialProjects={completedProjects} />
			</div>
		</main>
	);
}
