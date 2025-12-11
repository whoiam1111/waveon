"use client";

import FadeIn from "../ui/fade-in";
import Link from "next/link";

export default function Contact() {
	return (
		<section className="relative py-24 px-6 text-center">
			<div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />

			<FadeIn>
				<h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
					WAVE와 함께 <br className="md:hidden" />
					파도를 만들고 싶다면
				</h2>
				<p className="text-slate-400 mb-10 text-lg">
					언제든 문을 두드려주세요. 새로운 파도는 언제나 환영입니다.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="mailto:contact@waveon.com" // 임시 메일 주소
						className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors"
					>
						이메일 보내기
					</Link>
					<Link
						href="https://instagram.com"
						target="_blank"
						className="px-8 py-4 border border-slate-700 text-slate-300 font-medium rounded-full hover:border-white hover:text-white transition-all"
					>
						Instagram
					</Link>
				</div>
			</FadeIn>
		</section>
	);
}
