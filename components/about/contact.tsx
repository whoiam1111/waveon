"use client";

import FadeIn from "../ui/fade-in";
import Link from "next/link";

export default function Contact() {
	return (
		<section className="relative py-24 md:py-32 px-6 text-center">
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
						href="/contact"
						className="px-24 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]"
					>
						문의하기
					</Link>
				</div>
			</FadeIn>
		</section>
	);
}
