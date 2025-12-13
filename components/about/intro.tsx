"use client";

import FadeIn from "../ui/fade-in";
import { motion } from "motion/react";

export default function Intro() {
	return (
		<section className="relative py-20 px-6 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
			{/* Geometric Background Elements */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Gradient Orbs */}
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2" />
				<div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] translate-y-1/3" />

				{/* Abstract Wave Lines (SVG) */}
				<svg
					className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full opacity-30"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
				>
					<path
						d="M0 50 Q 25 30 50 50 T 100 50"
						stroke="url(#grad1)"
						strokeWidth="0.5"
						fill="none"
					/>
					<path
						d="M0 60 Q 30 40 60 60 T 120 60"
						stroke="url(#grad1)"
						strokeWidth="0.3"
						fill="none"
					/>
					<defs>
						<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
							<stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
							<stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
						</linearGradient>
					</defs>
				</svg>

				{/* Grid Pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
			</div>

			<div className="max-w-4xl mx-auto relative z-10">
				<FadeIn>
					<div className="inline-block p-1 px-3 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
						<span className="text-sm font-semibold tracking-widest text-blue-300 uppercase">
							Who We Are
						</span>
					</div>
					<h3 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-tight">
						WAVE ON은
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 animate-gradient-x">
							이런 팀입니다
						</span>
					</h3>
				</FadeIn>

				<FadeIn
					delay={0.2}
					className="relative p-8 md:p-12 border border-white/10 rounded-3xl bg-slate-900/40 backdrop-blur-md shadow-2xl"
				>
					{/* Decorative corner accents */}
					<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/50 rounded-tl-2xl" />
					<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-2xl" />

					<div className="space-y-8 text-lg md:text-2xl text-slate-200 font-light leading-relaxed">
						<p>
							“WAVE ON은 문화의 힘을 믿는 <br className="md:hidden" />
							청춘들이 모여 만든,
							<br />
							<span className="font-bold text-white relative inline-block mx-1">
								예술과 상상력의 파도
								<span className="absolute bottom-0 left-0 w-full h-[6px] bg-blue-500/30 -z-10 rounded-sm" />
							</span>
							입니다.”
						</p>
						<p className="text-slate-400 text-base md:text-xl">
							AI가 그림도 그리고 글도 쓰는 시대지만,
							<br className="hidden md:block" />
							우리는 여전히 사람과 사람 사이의 <br className="md:hidden" />
							<span className="text-cyan-300 font-medium mx-1">
								찐한 무언가
							</span>
							를 믿습니다.
						</p>
					</div>
				</FadeIn>

				<FadeIn delay={0.4} className="mt-12 flex justify-center">
					<button
						onClick={() => {
							document
								.getElementById("vision")
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
			</div>
		</section>
	);
}
