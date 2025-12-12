import Image from "next/image";
import Link from "next/link";
import FadeIn from "../ui/fade-in";
import ScrollBtn from "./scroll-btn";

export default function HeroSection() {
	return (
		<section className="relative h-screen w-full flex flex-col items-center justify-center md:overflow-hidden bg-slate-950 text-white overflow-hidden">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				<Image
					src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/135c62dd-65eb-4dc2-360d-298505011200/public"
					alt="Hero Background"
					fill
					className="object-cover opacity-60 mix-blend-overlay"
					priority
				/>
				{/* Gradient Overlay for Fade Effect */}
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950 z-10" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/40 to-slate-950/90 z-10" />
			</div>

			<div className="max-w-5xl relative z-10 px-6 text-center w-full">
				<FadeIn direction="up">
					<h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
						Catch a Wave.
					</h1>
				</FadeIn>

				<FadeIn delay={0.2}>
					<p className="text-2xl md:text-3xl font-bold mb-2 text-slate-100">
						청춘의 파도를 타고, 문화를 흔들다.
					</p>
					<p className="text-slate-400 mb-10 max-w-lg mx-auto">
						WAVE ON은 청춘의 에너지와 진짜 울림을 믿는 문화예술 크루입니다.
					</p>
				</FadeIn>

				<FadeIn
					delay={0.4}
					className="flex flex-col sm:flex-row gap-4 justify-center"
				>
					<Link
						href="/project"
						className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]"
					>
						지금 진행 중인 프로젝트 보기
					</Link>
					<Link
						href="/about"
						className="px-8 py-4 border border-slate-600 hover:border-blue-400 hover:text-blue-400 text-slate-300 font-medium rounded-full transition-all"
					>
						WAVE ON이 궁금해요
					</Link>
				</FadeIn>
			</div>
			<ScrollBtn />
		</section>
	);
}
