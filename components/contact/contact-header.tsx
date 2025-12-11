"use client";

import FadeIn from "../ui/fade-in";

export default function ContactHeader() {
	return (
		<section className="relative py-32 flex justify-center items-center overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-slate-950" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

			<div className="relative z-10 text-center px-6">
				<FadeIn>
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
						Get In Touch
					</h1>
					<p className="text-xl text-slate-400 max-w-2xl mx-auto">
						새로운 파도를 함께 만들어갈 당신을 기다립니다.
						<br className="hidden md:block" />
						아티스트, 스태프, 그리고 파트너십까지 다양한 기회가 열려있습니다.
					</p>
				</FadeIn>
			</div>
		</section>
	);
}
