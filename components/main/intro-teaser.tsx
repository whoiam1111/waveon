import Link from "next/link";
import FadeIn from "../ui/fade-in";

export default function IntroTeaser() {
	return (
		<section className="py-32 bg-slate-900 text-center">
			<div className="container mx-auto px-6">
				<FadeIn>
					<h2 className="text-xl text-blue-400 font-bold mb-8 tracking-widest">
						WAVE ON은 어떤 파도를 만드나요?
					</h2>
					<p className="text-3xl md:text-5xl font-semibold leading-tight text-white mb-12">
						“AI 시대에도, 우리는 여전히
						<br />
						<span className="text-blue-500">사람 사이의 찐한 울림</span>을
						믿습니다.”
					</p>
					<p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
						공연, 전시, 팝업스토어를 통해 청춘의 에너지를
						<br className="hidden md:block" />
						파도처럼 번지게 만들어요.
					</p>
					<Link
						href="/about"
						className="inline-block border-b-2 border-blue-500 pb-1 text-blue-500 hover:text-white hover:border-white transition-colors text-lg"
					>
						WAVE ON 스토리 보러가기 →
					</Link>
				</FadeIn>
			</div>
		</section>
	);
}
