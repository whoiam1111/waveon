"use client";

import FadeIn from "../ui/fade-in";
import { Mail, Instagram, MapPin } from "lucide-react";

export default function GeneralInfo() {
	return (
		<section className="py-24 bg-slate-900 overflow-hidden relative">
			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Left: Contact Info */}
					<FadeIn direction="right">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
								기타 궁금한 점이 있으신가요?
							</h2>
							<p className="text-slate-400 text-lg mb-12 leading-relaxed">
								WAVE에 대해 더 알고 싶거나, 제휴 및 기타 문의사항이 있다면
								언제든 편하게 연락주세요. 빠르게 확인 후 답변 드리겠습니다.
							</p>

							<div className="space-y-8">
								<div className="flex items-start gap-6">
									<div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-blue-400">
										<Mail />
									</div>
									<div>
										<h4 className="text-white font-bold text-lg mb-1">Email</h4>
										<a
											href="mailto:contact@waveon.com"
											className="text-slate-400 hover:text-blue-400 transition-colors"
										>
											contact@waveon.com
										</a>
									</div>
								</div>

								<div className="flex items-start gap-6">
									<div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-pink-400">
										<Instagram />
									</div>
									<div>
										<h4 className="text-white font-bold text-lg mb-1">
											Social
										</h4>
										<a
											href="https://instagram.com"
											target="_blank"
											className="text-slate-400 hover:text-blue-400 transition-colors"
										>
											@waveon_official
										</a>
									</div>
								</div>

								<div className="flex items-start gap-6">
									<div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-emerald-400">
										<MapPin />
									</div>
									<div>
										<h4 className="text-white font-bold text-lg mb-1">
											Office
										</h4>
										<p className="text-slate-400">
											서울특별시 노원구 화랑로 453, 5층
										</p>
									</div>
								</div>
							</div>
						</div>
					</FadeIn>

					{/* Right: Map Section */}
					<FadeIn direction="left" delay={0.2}>
						<div className="h-[500px] w-full bg-slate-950 rounded-2xl border border-slate-800 relative overflow-hidden group">
							{/* Placeholder Map UI */}
							<div className="absolute inset-0 bg-[#0f1014] opacity-80" />

							{/* Grid Lines for techy feel */}
							<div
								className="absolute inset-0"
								style={{
									backgroundImage:
										"linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
									backgroundSize: "40px 40px",
									opacity: 0.2,
								}}
							/>

							{/* Center Marker */}
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
								<div className="relative">
									<div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute top-0 left-0" />
									<div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 border-2 border-white box-content" />
								</div>
								<div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-bold mt-2">
									WAVE ON Office
								</div>
							</div>

							{/* Info Overlay */}
							<div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
								<h5 className="text-white font-bold mb-2 flex items-center gap-2">
									<MapPin size={16} className="text-blue-500" />
									WAVE 본사
								</h5>
								<p className="text-slate-400 text-sm">
									서울특별시 노원구 화랑로 453, 5층
								</p>
								<div className="mt-4 flex gap-2">
									<a
										href="https://map.naver.com"
										target="_blank"
										className="flex-1 py-2 bg-green-600 text-white text-xs font-bold rounded text-center hover:bg-green-500 transition-colors"
									>
										네이버 지도
									</a>
									<a
										href="https://map.kakao.com"
										target="_blank"
										className="flex-1 py-2 bg-yellow-400 text-slate-900 text-xs font-bold rounded text-center hover:bg-yellow-300 transition-colors"
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
