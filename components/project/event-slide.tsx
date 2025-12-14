import Link from "next/link";
import { Project } from "@/types/project";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface EventSlideProps {
	project: Project;
}

export default function EventSlide({ project }: EventSlideProps) {
	const posterImage = project.poster_url || "/placeholder.jpg";
	// Background: Registered image (image_urls[0]) -> Default Hero Image
	const backgroundImage =
		project.image_urls && project.image_urls.length > 0
			? project.image_urls[0]
			: "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/135c62dd-65eb-4dc2-360d-298505011200/public";

	console.log("project", project);

	return (
		<div className="relative h-[60vh] md:h-[70vh] w-full shrink-0 flex items-center justify-center overflow-hidden rounded-2xl group">
			{/* Background Image / Overlay */}
			<div className="absolute inset-0 select-none">
				<Image
					src={backgroundImage}
					alt="Background"
					fill
					className="object-cover opacity-40 blur-sm scale-110"
					priority
				/>
				<div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent" />
			</div>

			{/* Content */}
			<div className="relative z-10 container mx-auto px-6 md:px-12 flex items-center h-full py-16 md:py-24">
				<div className="hidden md:block w-1/3 aspect-[3/4] relative rounded-lg overflow-hidden shadow-2xl mr-12 shrink-0">
					<Image
						src={posterImage}
						alt={project.title}
						fill
						className="object-cover"
					/>
				</div>
				<div className="flex-1 space-y-4">
					<div className="flex flex-wrap items-center gap-3 text-sm font-medium tracking-wide">
						<span className="px-3 py-1 rounded-full bg-blue-600/90 text-white backdrop-blur-sm">
							Ongoing Event
						</span>
						<span className="px-3 py-1 rounded-full bg-slate-800/80 text-blue-200 border border-slate-700 backdrop-blur-sm">
							{project.project_category}
						</span>
					</div>

					<h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
						{project.title}
					</h2>

					<p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl line-clamp-3">
						{project.description}
					</p>

					<div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-4 text-slate-300">
						<div className="flex items-center gap-2">
							<Calendar className="w-5 h-5 text-blue-400" />
							<span>
								{project.start_date} ~ {project.end_date}
							</span>
						</div>
						{project.place && (
							<div className="flex items-center gap-2">
								<MapPin className="w-5 h-5 text-blue-400" />
								<span>{project.place}</span>
							</div>
						)}
					</div>

					<div className="pt-6">
						<Link
							href={`/history/${project.uid}`}
							className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-full 
							hover:bg-blue-200 transition-colors duration-300"
						>
							<span>자세히보기</span>
							<ArrowRight className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
