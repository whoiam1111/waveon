"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Project } from "@/types/project";
import EventSlide from "./event-slide";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EventCarouselProps {
	projects: Project[];
}

export default function EventCarousel({ projects }: EventCarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 5000, stopOnInteraction: false }),
	]);

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi]
	);
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi]
	);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setPrevBtnEnabled(emblaApi.canScrollPrev());
		setNextBtnEnabled(emblaApi.canScrollNext());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
	}, [emblaApi, onSelect]);

	if (!projects || projects.length === 0) {
		return (
			<div className="w-full h-64 flex items-center justify-center text-slate-500">
				No ongoing events at the moment.
			</div>
		);
	}

	return (
		<div className="relative group/carousel">
			<div
				className="overflow-hidden rounded-2xl ring-1 ring-slate-800/50 shadow-2xl shadow-black/50"
				ref={emblaRef}
			>
				<div className="flex">
					{projects.map((project) => (
						<div className="flex-[0_0_100%] min-w-0" key={project.uid}>
							<EventSlide project={project} />
						</div>
					))}
				</div>
			</div>

			{/* Navigation Buttons */}
			<button
				className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-slate-950/50 text-white backdrop-blur-md border border-slate-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-slate-900 hover:border-blue-500"
				onClick={scrollPrev}
				disabled={!prevBtnEnabled}
			>
				<ChevronLeft className="w-6 h-6" />
			</button>
			<button
				className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-slate-950/50 text-white backdrop-blur-md border border-slate-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-slate-900 hover:border-blue-500"
				onClick={scrollNext}
				disabled={!nextBtnEnabled}
			>
				<ChevronRight className="w-6 h-6" />
			</button>
		</div>
	);
}
