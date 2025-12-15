"use client";

import FadeIn from "../ui/fade-in";
import { Mail, Instagram, MapPin, AlarmClockCheck } from "lucide-react";

export default function GeneralInfo() {
	return (
		<section
			id="general-info"
			className="py-24 bg-slate-900 overflow-hidden relative"
		>
			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

			<div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Left: Contact Info */}
					<FadeIn direction="right">
						<div>
							<h3 className="text-sm font-semibold tracking-widest text-cyan-400 mb-2 uppercase">
								Contact Info
							</h3>
							<h2 className="text-[1.65rem] md:text-4xl font-bold text-white mb-8">
								더 궁금한 점이 있으신가요?
							</h2>
							<p className="text-slate-400 text-lg mb-6 leading-relaxed">
								WAVE ON에 대해 더 알고 싶거나, 기타 문의사항이 있다면 언제든
								편하게 연락주세요. 빠르게 확인 후 답변 드리겠습니다.
							</p>
							<p className="text-slate-400 flex items-center gap-2">
								<AlarmClockCheck size={16} /> Office hour : 09:00 ~ 18:00
							</p>
						</div>
					</FadeIn>

					{/* Right: Info Section */}
					<FadeIn direction="left" delay={0.2}>
						<div className="space-y-8">
							<div className="flex items-center gap-6">
								<div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-blue-400">
									<Mail />
								</div>
								<div>
									<h4 className="text-white font-bold text-lg">Email</h4>
									<span className="text-slate-400 hover:text-blue-400 transition-colors">
										officialwaveon@gmail.com
									</span>
								</div>
							</div>

							<div className="flex items-center gap-6">
								<div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-pink-400">
									<Instagram />
								</div>
								<div>
									<h4 className="text-white font-bold text-lg">Social</h4>
									<a
										href="https://www.instagram.com/wave0n_"
										target="_blank"
										className="text-slate-400 hover:text-blue-400 transition-colors"
									>
										@wave0n_
									</a>
								</div>
							</div>

							{/* Info Overlay */}
							<div className="">
								<div className="flex items-center gap-6">
									<div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-emerald-400">
										<MapPin />
									</div>
									<div>
										<h4 className="text-white font-bold text-lg">Office</h4>
										<p className="text-slate-400 tracking-tight">
											서울특별시 노원구 화랑로 453, 5층
										</p>
									</div>
								</div>
								<div className="mt-4 flex gap-2 p-1">
									<a
										href="https://naver.me/F9hJHkd3"
										target="_blank"
										className="flex-1 py-3 bg-green-600 text-white text-xs font-bold rounded text-center hover:bg-green-500 transition-colors"
									>
										네이버 지도
									</a>
									<a
										href="https://kko.kakao.com/RD_GxWfDaz"
										target="_blank"
										className="flex-1 py-3 bg-yellow-400 text-slate-900 text-xs font-bold rounded text-center hover:bg-yellow-300 transition-colors"
									>
										카카오맵
									</a>
								</div>
							</div>
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
