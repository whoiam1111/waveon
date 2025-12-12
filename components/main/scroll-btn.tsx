"use client";

import { motion } from "motion/react";
import FadeIn from "../ui/fade-in";

export default function ScrollBtn() {
	return (
		<FadeIn
			delay={0.4}
			className="absolute bottom-16 md:bottom-24 w-full left-0 z-10 flex justify-center"
		>
			<button
				onClick={() => {
					document
						.getElementById("current-waves")
						?.scrollIntoView({ behavior: "smooth" });
				}}
				className="cursor-pointer hover:text-white transition-colors"
				aria-label="Scroll to next section"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					className="text-slate-500"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M7 13l5 5 5-5" />
						<path d="M7 6l5 5 5-5" />
					</svg>
				</motion.div>
			</button>
		</FadeIn>
	);
}
