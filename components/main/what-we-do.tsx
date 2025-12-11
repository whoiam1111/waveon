import FadeIn from "../ui/fade-in";
import { PartyPopper, Mic2, Network } from "lucide-react";

const ACTIVITIES = [
	{
		icon: <PartyPopper size={40} className="text-blue-400" />,
		title: "Culture Sharing",
		desc: "공연·전시·팝업스토어·테마카페로 문화를 일상 속에 스며들게 합니다.",
	},
	{
		icon: <Mic2 size={40} className="text-cyan-400" />,
		title: "Artist",
		desc: "아티스트의 이야기를 무대와 공간으로 확장해 사람의 감정을 예술로 증폭합니다.",
	},
	{
		icon: <Network size={40} className="text-indigo-400" />,
		title: "Connect",
		desc: "사람과 사람, 청춘과 세상, 예술과 일상을 연결하는 파동을 만듭니다.",
	},
];

export default function WhatWeDo() {
	return (
		<section className="py-24 bg-slate-950 text-white overflow-hidden">
			<div className="container mx-auto px-6">
				<FadeIn className="mb-16 text-center md:text-left">
					<h2 className="text-4xl font-bold mb-4">What We Do</h2>
					<p className="text-slate-400">우리가 만드는 파도의 종류</p>
				</FadeIn>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{ACTIVITIES.map((item, idx) => (
						<FadeIn
							key={idx}
							delay={idx * 0.1}
							className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300"
						>
							<div className="mb-6 bg-slate-950 w-fit p-4 rounded-2xl">
								{item.icon}
							</div>
							<h3 className="text-2xl font-bold mb-4">{item.title}</h3>
							<p className="text-slate-400 leading-relaxed">{item.desc}</p>
						</FadeIn>
					))}
				</div>

				<div className="mt-12 text-center md:text-right">
					<Link
						href="/about"
						className="text-sm text-slate-500 hover:text-blue-400 underline decoration-slate-700 hover:decoration-blue-400 underline-offset-4 transition-all"
					>
						→ WAVE ON에 대해 더 알아보기
					</Link>
				</div>
			</div>
		</section>
	);
}
import Link from "next/link";
