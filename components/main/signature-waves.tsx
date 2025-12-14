import FadeIn from "../ui/fade-in";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SIGNATURES = [
	{
		title: "Wave Pop-up Series",
		desc: "청춘 감성 팝업스토어, 테마카페 & 전시",
		link: "/history?category=popup",
		image:
			"https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/8858f63c-0a7c-4b49-8e01-31349e466000/public",
	},
	{
		title: "Wave Live Stage",
		desc: "대규모 페스티벌부터 라이브 공연까지",
		link: "/history?category=performance",
		image:
			"https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/135c62dd-65eb-4dc2-360d-298505011200/public",
	},
	{
		title: "Artist Wave Lab",
		desc: "아티스트와 함께 만드는 새로운 문화 예술",
		link: "/history?category=etc",
		image:
			"https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/5f63231b-f27e-4d61-f958-693728282c00/public",
	},
];

export default function SignatureWaves() {
	return (
		<section className="py-24 bg-slate-900 text-white border-y border-slate-800 overflow-hidden">
			<div className="max-w-5xl mx-auto px-6 w-full">
				<FadeIn>
					<h2 className="text-4xl font-bold mb-4">Signature Waves</h2>
					<div className="flex flex-col md:flex-row items-start gap-2 md:gap-0 md:items-center md:justify-between mb-10">
						<p className="text-slate-400">우리를 대표하는 프로젝트들</p>
						<Link
							href="/history"
							className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
						>
							모두보기 <ArrowRight size={18} />
						</Link>
					</div>
				</FadeIn>

				<div className="space-y-4">
					{SIGNATURES.map((item, idx) => (
						<FadeIn key={idx} delay={idx * 0.1} direction="left">
							<Link href={item.link}>
								<div
									className="group relative overflow-hidden bg-slate-950 flex items-center justify-between p-6 md:p-10
								border border-slate-700 rounded-2xl hover:border-slate-600 transition-all duration-300 cursor-pointer"
								>
									{/* Background Image */}
									<div className="absolute inset-0 z-0">
										<Image
											src={item.image}
											alt={item.title}
											fill
											className="object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-300"
										/>
										<div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/30 transition-colors duration-300" />
									</div>

									<div className="relative z-10">
										<h3 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-md">
											{item.title}
										</h3>
										<p className="text-slate-300 group-hover:text-white text-sm md:text-base drop-shadow-md transition-colors">
											{item.desc}
										</p>
									</div>
									<ArrowUpRight
										className="relative z-10 text-slate-400 group-hover:text-white transition-colors"
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
