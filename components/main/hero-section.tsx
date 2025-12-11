import Link from "next/link";
import FadeIn from "../ui/fade-in";

export default function HeroSection() {
	return (
		<section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 text-white">
			{/* Background Graphic (Wave/Neon Mood) */}
			<div className="absolute inset-0 z-0 opacity-40">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-950 to-slate-950" />
				{/* Abstract Wave Decoration */}
				<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-600/20 to-transparent blur-3xl" />
			</div>

			<div className="container relative z-10 px-6 text-center">
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
						“WAVE ON은 청춘의 에너지와 진짜 울림을 믿는 문화예술 크루입니다.”
					</p>
				</FadeIn>

				<FadeIn
					delay={0.4}
					className="flex flex-col sm:flex-row gap-4 justify-center"
				>
					<button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]">
						지금 진행 중인 프로젝트 보기
					</button>
					<Link
						href="/about"
						className="px-8 py-4 border border-slate-600 hover:border-blue-400 hover:text-blue-400 text-slate-300 font-medium rounded-full transition-all"
					>
						WAVE ON이 궁금해요
					</Link>
				</FadeIn>
			</div>
		</section>
	);
}
