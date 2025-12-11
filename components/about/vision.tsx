"use client";

import FadeIn from "../ui/fade-in";

export default function Vision() {
	return (
		<section
			id="vision"
			className="relative py-24 px-6 bg-slate-900/50 overflow-hidden"
		>
			<div className="container mx-auto max-w-5xl">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<FadeIn direction="right">
						<h2 className="text-sm font-semibold tracking-widest text-cyan-400 mb-2 uppercase">
							Our Vision
						</h2>
						<h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
							우리가 만들고 싶은 <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
								파도
							</span>
						</h3>
					</FadeIn>

					<FadeIn
						direction="left"
						delay={0.2}
						className="space-y-6 text-lg text-slate-300"
					>
						<p className="font-medium text-white text-xl">
							“청춘의 열정이 세상을 흔드는 파도가 되도록 돕는 것.”
						</p>
						<p>
							우리가 만드는 공연과 공간은 단순한 놀 거리가 아니라, 더 나은
							세상을 묻고 상상하는 <span className="text-cyan-200">실험실</span>
							입니다.
						</p>
						<p>
							새로운 변화의 물결이 밀려올수록, 우리는 더 즐겁게, 더 진지하게
							예술과 함께 질문하고 행동합니다.
						</p>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
