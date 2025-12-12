"use client";

import FadeIn from "../ui/fade-in";
import Link from "next/link";
import { Palette, Users, Handshake, Download, Send } from "lucide-react";

export default function InquiryOptions() {
	const options = [
		{
			title: "아티스트로 참여하기",
			description:
				"WAVE는 음악뿐만 아니라 전시, 퍼포먼스 등 모든 예술 분야의 아티스트를 기다립니다.",
			details: [
				"자신의 작품 세계를 펼치고 싶은 예술가",
				"음악, 미술, 미디어아트 등 장르 불문",
				"새로운 영감을 주고받을 크리에이터",
			],
			actionLabel: "지원 양식 다운로드",
			link: "/files/artist_application.pdf", // Placeholder link
			isDownload: true,
			color: "blue",
			icon: Palette,
		},
		{
			title: "크루/스태프로 참여하기",
			description:
				"공연 기획, 운영, 기술 지원 등 WAVE의 멋진 파도를 함께 만들어갈 팀원을 모집합니다.",
			details: [
				"공연 기획 및 운영에 관심 있는 분",
				"음향, 조명, 무대 예술 기술 스태프",
				"현장 관리 및 아티스트 케어",
			],
			actionLabel: "지원 양식 다운로드",
			link: "/files/staff_application.pdf", // Placeholder link
			isDownload: true,
			color: "indigo",
			icon: Users,
		},
		{
			title: "브랜드/기관 컬래버 제안",
			description:
				"WAVE와 함께 특별한 문화 이벤트를 기획하고 싶은 브랜드와 기관의 제안을 기다립니다.",
			details: [
				"브랜드 이미지를 높이는 문화 행사 기획",
				"기관/지자체 축제 및 공연 프로그램 협력",
				"스폰서십 및 파트너십 문의",
			],
			actionLabel: "공식 메일로 제안서 보내기",
			link: "mailto:contact@waveon.com",
			isDownload: false,
			color: "cyan",
			icon: Handshake,
		},
	];

	return (
		<section className="py-20 z-10">
			<div className="max-w-5xl mx-auto w-full">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{options.map((option, index) => (
						<FadeIn key={index} delay={index * 0.1}>
							<div className="h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900 transition-all duration-300 group flex flex-col">
								<div
									className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-${option.color}-900/30 text-${option.color}-400 group-hover:bg-${option.color}-500 group-hover:text-white transition-colors duration-300 shadow-lg shadow-${option.color}-900/20`}
								>
									<option.icon size={28} />
								</div>

								<h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
									{option.title}
								</h3>

								<p className="text-slate-400 mb-6 grow leading-relaxed">
									{option.description}
								</p>

								<ul className="space-y-3 mb-8 text-sm text-slate-500">
									{option.details.map((detail, idx) => (
										<li key={idx} className="flex items-start gap-2.5">
											<span
												className={`w-1.5 h-1.5 rounded-full bg-${option.color}-500/50 mt-2 shrink-0`}
											></span>
											<span className="text-slate-400">{detail}</span>
										</li>
									))}
								</ul>

								{option.isDownload ? (
									<a
										href={option.link}
										download
										className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all duration-300 bg-slate-800 text-slate-300 hover:bg-white hover:text-slate-900 group-hover:border-transparent`}
									>
										<Download size={18} />
										{option.actionLabel}
									</a>
								) : (
									<div className="text-center">
										<button
											onClick={() => {
												document
													.getElementById("general-info")
													?.scrollIntoView({ behavior: "smooth" });
											}}
											className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold 
                        transition-all duration-300 cursor-pointer
												${
													option.color === "cyan"
														? "bg-cyan-600 text-white hover:bg-cyan-500"
														: "bg-slate-800 text-white"
												}
											`}
										>
											<Send size={18} />
											{option.actionLabel}
										</button>
									</div>
								)}
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
