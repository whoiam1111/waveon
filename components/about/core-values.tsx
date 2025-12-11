"use client";

import FadeIn from "../ui/fade-in";

const values = [
	{
		title: "날것, 그대로 (Raw & Real)",
		desc: "조금 어설퍼도 진짜에 끌립니다. 계산되지 않은 날것의 에너지가 세상을 움직인다고 믿습니다.",
		delay: 0.1,
	},
	{
		title: "일단, 저지르기 (Act First)",
		desc: "이게 돈이 될까? 보다 이거 하고 싶다!가 먼저. 안전한 길보다 아무도 안 가본 길을 즐깁니다.",
		delay: 0.2,
	},
	{
		title: "너와 나의 연결고리 (Link)",
		desc: "‘나’의 이야기가 ‘너’에게 닿고, 결국 ‘우리’의 문화가 되는 순간. 예술은 우리가 함께 노는 방식입니다.",
		delay: 0.3,
	},
];

export default function CoreValues() {
	return (
		<section className="relative py-24 px-6 md:py-32">
			{/* Background Deco */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/20 blur-[100px] -z-10 rounded-full" />

			<div className="container mx-auto max-w-6xl">
				<FadeIn className="text-center mb-16">
					<h2 className="text-sm font-semibold tracking-widest text-indigo-400 mb-2 uppercase">
						Core Values
					</h2>
					<h3 className="text-3xl md:text-5xl font-bold text-white">
						우리가 지키는 것들
					</h3>
				</FadeIn>

				<div className="grid md:grid-cols-3 gap-8">
					{values.map((item, idx) => (
						<FadeIn
							key={idx}
							delay={item.delay}
							className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-colors duration-300 group"
						>
							<div className="h-2 w-12 bg-indigo-600 rounded-full mb-6 group-hover:w-20 transition-all duration-300" />
							<h4 className="text-xl font-bold text-white mb-4">
								{item.title}
							</h4>
							<p className="text-slate-400 leading-relaxed">{item.desc}</p>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
