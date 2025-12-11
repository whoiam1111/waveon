import FadeIn from "../ui/fade-in";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SIGNATURES = [
	{
		title: "Wave Pop-up Series",
		desc: "청춘 감성 팝업스토어, 테마카페 & 전시",
		link: "/history?category=popup",
	},
	{
		title: "Wave Live Stage",
		desc: "대규모 페스티벌부터 라이브 공연까지",
		link: "/history?category=performance",
	},
	{
		title: "Artist Wave Lab",
		desc: "아티스트와 함께 만드는 새로운 문화 예술",
		link: "/history?category=etc",
	},
];

export default function SignatureWaves() {
	return (
		<section className="py-24 bg-slate-900 text-white border-y border-slate-800 overflow-hidden">
			<div className="container mx-auto px-6">
				<FadeIn>
					<h2 className="text-4xl font-bold mb-4">Signature Waves</h2>
					<p className="text-slate-400 mb-10">우리를 대표하는 프로젝트들</p>
				</FadeIn>

				<div className="space-y-4">
					{SIGNATURES.map((item, idx) => (
						<FadeIn key={idx} delay={idx * 0.1} direction="left">
							<Link href={item.link}>
								<div className="group flex items-center justify-between p-6 md:p-10 border border-slate-700 rounded-2xl hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 cursor-pointer">
									<div>
										<h3 className="text-xl md:text-2xl font-bold mb-1">
											{item.title}
										</h3>
										<p className="text-slate-400 group-hover:text-blue-100 text-sm md:text-base">
											{item.desc}
										</p>
									</div>
									<ArrowUpRight
										className="text-slate-500 group-hover:text-white transition-colors"
										size={24}
									/>
								</div>
							</Link>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
