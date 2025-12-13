"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalProps {
	images: string[];
	initialIndex: number;
	onClose: () => void;
}

export default function GalleryModal({
	images,
	initialIndex,
	onClose,
}: GalleryModalProps) {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
	const [direction, setDirection] = useState(0);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") handlePrev();
			if (e.key === "ArrowRight") handleNext();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [currentIndex, onClose]); // Dependencies updated to stay fresh but actions are stable

	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		}),
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
			onClick={onClose}
		>
			<button
				onClick={onClose}
				className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-60"
			>
				<X className="w-8 h-8" />
			</button>

			<div
				className="relative w-full max-w-7xl px-4 md:px-20 h-[80vh] flex items-center justify-center p-4"
				onClick={(e) => e.stopPropagation()}
			>
				{images.length > 1 && (
					<>
						<button
							onClick={handlePrev}
							className="absolute left-2 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-60 backdrop-blur-md"
						>
							<ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
						</button>
						<button
							onClick={handleNext}
							className="absolute right-2 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-60 backdrop-blur-md"
						>
							<ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
						</button>
					</>
				)}

				<div className="relative w-full h-full overflow-hidden flex items-center justify-center">
					<AnimatePresence initial={false} custom={direction} mode="popLayout">
						<motion.div
							key={currentIndex}
							custom={direction}
							variants={variants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								x: { type: "spring", stiffness: 300, damping: 30 },
								opacity: { duration: 0.2 },
							}}
							className="absolute w-full h-full flex items-center justify-center"
						>
							<div className="relative w-full h-full max-w-5xl max-h-[80vh]">
								<Image
									src={images[currentIndex]}
									alt={`Gallery image ${currentIndex + 1}`}
									fill
									className="object-contain"
									priority
								/>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Counter */}
				<div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/70 font-medium">
					{currentIndex + 1} / {images.length}
				</div>
			</div>
		</motion.div>
	);
}
