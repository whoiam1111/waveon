import { MOCK_PROJECTS } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/fade-in";
import {
	ArrowLeft,
	Calendar,
	MapPin,
	User,
	Clock,
	Link as LinkIcon,
	Youtube,
} from "lucide-react";
import { ParsedProject } from "@/types/project";

interface PageProps {
	params: Promise<{
		projectid: string;
	}>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
	const { projectid } = await params;

	const rawProject = MOCK_PROJECTS.find((p) => p.uid === projectid);

	if (!rawProject) {
		notFound();
	}

	// Parse images
	let images = {};
	try {
		images = JSON.parse(rawProject.image_urls);
	} catch (e) {
		console.error("Failed to parse images");
	}

	const project: ParsedProject = {
		...rawProject,
		image_urls: images,
	};

	const posterImage =
		project.image_urls.poster_image ||
		project.image_urls.event_photos?.[0] ||
		"/placeholder.jpg";
	const eventPhotos = project.image_urls.event_photos || [];

	return (
		<main className="min-h-screen bg-slate-950 pt-32 pb-24">
			<div className="container mx-auto px-6 max-w-5xl">
				<FadeIn>
					<Link
						href="/project"
						className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
					>
						<ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
						목록으로 돌아가기
					</Link>

					{/* Hero Section */}
					<div className="grid md:grid-cols-2 gap-12 mb-16">
						<div className="relative aspect-[3/4] md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
							<Image
								src={posterImage}
								alt={project.title}
								fill
								className="object-cover"
								priority
							/>
						</div>

						<div className="flex flex-col justify-center">
							<span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-600/20 text-blue-400 rounded-full w-fit mb-4 border border-blue-500/20">
								{project.project_category}
							</span>
							<h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
								{project.title}
							</h1>

							<div className="space-y-4 text-slate-300 mb-8">
								<div className="flex items-center gap-3">
									<Calendar className="w-5 h-5 text-blue-500" />
									<span>
										{project.start_date}{" "}
										{project.end_date &&
											project.end_date !== project.start_date &&
											`~ ${project.end_date}`}
									</span>
								</div>
								{project.place && (
									<div className="flex items-center gap-3">
										<MapPin className="w-5 h-5 text-blue-500" />
										<span>{project.place}</span>
									</div>
								)}
								{project.project_time && (
									<div className="flex items-center gap-3">
										<Clock className="w-5 h-5 text-blue-500" />
										<span>{project.project_time}</span>
									</div>
								)}
								{(project.manager || project.staff) && (
									<div className="flex items-start gap-3">
										<User className="w-5 h-5 text-blue-500 mt-1" />
										<div className="flex flex-col">
											{project.manager && (
												<span>Manager: {project.manager}</span>
											)}
											{project.staff && (
												<span className="text-slate-500 text-sm">
													Staff: {project.staff}
												</span>
											)}
										</div>
									</div>
								)}
							</div>

							{/* External Links */}
							<div className="flex gap-4">
								{project.video_url && (
									<a
										href={project.video_url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-6 py-3 bg-red-600/90 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
									>
										<Youtube className="w-5 h-5" />
										Watch Video
									</a>
								)}
								{project.application_url && (
									<a
										href={project.application_url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
									>
										<LinkIcon className="w-5 h-5" />
										View Link
									</a>
								)}
							</div>
						</div>
					</div>

					{/* Description */}
					<div className="mb-20">
						<h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
							Project Story
						</h2>
						<div className="prose prose-invert max-w-none text-slate-300 leading-loose whitespace-pre-wrap">
							{project.description}
						</div>
					</div>

					{/* Gallery */}
					{eventPhotos.length > 0 && (
						<div>
							<h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
								Gallery
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{eventPhotos.map((photo, idx) => (
									<div
										key={idx}
										className="relative aspect-video rounded-xl overflow-hidden group"
									>
										<Image
											src={photo}
											alt={`Gallery ${idx + 1}`}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-105"
										/>
									</div>
								))}
							</div>
						</div>
					)}
				</FadeIn>
			</div>
		</main>
	);
}
