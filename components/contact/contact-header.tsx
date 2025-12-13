"use client";

import FadeIn from "../ui/fade-in";
import InquiryOptions from "./inquiry-options";

export default function ContactHeader() {
	return (
		<section className="relative pt-32 pb-10 flex justify-center items-center overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-slate-950" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

			<div className="relative z-10 text-center px-6">
				<FadeIn>
					<h1 className="text-sm font-semibold tracking-widest text-blue-400 mb-3 uppercase">
						contact us
					</h1>
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-10 tracking-tight">
						파도 위로 올라탈 <br className="md:hidden" /> 준비 되셨나요?
					</h1>
					<p className="md:text-lg text-slate-400 max-w-2xl mx-auto">
						새로운 파도를 함께 만들어갈 분을 기다립니다.
						<br />
						아티스트, 스태프, 그리고 파트너십까지 <br className="md:hidden" />
						다양한 기회가 열려있습니다.
					</p>
					<div className="h-px w-24 bg-blue-500 mx-auto mt-8" />
				</FadeIn>
				<InquiryOptions />
			</div>
		</section>
	);
}
