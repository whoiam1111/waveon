"use client";

import FadeIn from "../ui/fade-in";

const activities = [
	{
		title: "🎉 Culture Sharing",
		content: (
			<>
				공연, 전시, 길거리 팝업, 컨셉 카페까지.
				<br />
				예술이 특별한 날 이벤트가 아니라,
				<br />
				매일의 공기처럼 자연스럽게 스며들도록 만듭니다.
			</>
		),
	},
	{
		title: "🌟 Artist",
		content: (
			<>
				잠재력 있는 아티스트를 발굴하고,
				<br />
				그들의 이야기를 무대와 공간으로 확장합니다.
				<br />
				기술이 아무리 앞서도,{" "}
				<span className="text-blue-200">진심·울림·사람냄새</span>는
				<br />
				인간의 언어이기 때문입니다.
			</>
		),
	},
	{
		title: "🔗 Connect",
		content: (
			<>
				WAVE는 사람과 사람, 아티스트와 관객,
				<br />
				청춘과 세상을 이어주는 연결 구조를 만듭니다.
				<br />
				우리는 이 연결이 세상을 바꾸는
				<br />
				<span className="text-blue-200">첫 번째 파도</span>라고 믿습니다.
			</>
		),
	},
];

export default function WhatWeDo() {
	return (
		<section className="relative py-24 px-6 bg-slate-950">
			<div className="container mx-auto max-w-6xl">
				<FadeIn className="mb-16">
					<h2 className="text-sm font-semibold tracking-widest text-blue-400 mb-2 uppercase">
						What We Do
					</h2>
					<h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
						WAVE의 활동들
					</h3>
					<div className="h-px w-full bg-gradient-to-r from-blue-500/50 to-transparent" />
				</FadeIn>

				<div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
					{activities.map((act, idx) => (
						<FadeIn
							key={idx}
							delay={idx * 0.1}
							className={`py-8 md:py-0 ${
								idx === 0 ? "md:pr-8" : idx === 1 ? "md:px-8" : "md:pl-8"
							}`}
						>
							<h4 className="text-2xl font-bold text-white mb-6">
								{act.title}
							</h4>
							<p className="text-slate-400 leading-loose">{act.content}</p>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
