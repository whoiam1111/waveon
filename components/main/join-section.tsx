import Link from "next/link";
import FadeIn from "../ui/fade-in";

export default function JoinSection() {
	return (
		<section className="py-32 bg-slate-950 relative overflow-hidden">
			{/* Glow Effect */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

			<div className="max-w-5xl relative z-10 mx-auto px-6 text-center text-white w-full">
				<FadeIn>
					<h2 className="text-4xl md:text-5xl font-black mb-6">
						파도 위로 올라탈 준비 되셨나요?
					</h2>
					<p className="text-slate-300 text-base md:text-lg mb-12 max-w-xl mx-auto">
						아티스트, 크리에이터, 스태프, 브랜드 컬래버까지
						<br />
						WAVE ON과 함께 새로운 파도를 만들 사람을 기다립니다.
					</p>

					<div className="flex flex-col md:flex-row gap-4 justify-center *:cursor-pointer">
						<Link
							href="/contact"
							className="px-20 md:px-28 py-4 text-base md:text-lg bg-white text-blue-900 font-bold rounded-xl hover:bg-slate-200 transition-colors"
						>
							WAVEON과 함께하기
						</Link>
						{/* <button className="px-8 py-4 border border-slate-600 bg-slate-900/50 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors backdrop-blur-sm">
              크루/스태프로 합류하기
            </button>
            <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-bold rounded-xl hover:bg-blue-900/20 transition-colors">
              브랜드/기관 컬래버 제안
            </button> */}
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
