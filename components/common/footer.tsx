import Link from "next/link";

// Checking package.json I saw lucide-react. I should use that or standard SVG icons to avoid dependency issues if react-icons isn't installed.
// The package.json showed lucide-react. I'll use lucide-react.

import {
	Facebook,
	Instagram,
	Twitter,
	Youtube,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-900">
			<div className="container mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
					{/* Logo & Description */}
					<div className="col-span-1 md:col-span-1">
						<Link href="/" className="inline-block mb-6 group">
							<span className="text-3xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors">
								WAVE ON
							</span>
						</Link>
						<p className="text-sm leading-relaxed mb-6">
							청춘의 파도를 타고, 문화를 흔들다.
							<br />
							WAVE ON은 청춘의 에너지와 진짜 울림을 믿는 문화예술 크루입니다.
						</p>
						<div className="flex gap-4">
							<Link href="#" className="hover:text-blue-400 transition-colors">
								<Instagram size={20} />
							</Link>
							<Link href="#" className="hover:text-blue-400 transition-colors">
								<Youtube size={20} />
							</Link>
							<Link href="#" className="hover:text-blue-400 transition-colors">
								<Twitter size={20} />
							</Link>
						</div>
					</div>

					{/* Navigation */}
					<div className="col-span-1">
						<h3 className="text-white font-bold mb-6 text-lg">Menu</h3>
						<ul className="space-y-4">
							<li>
								<Link
									href="/about"
									className="hover:text-blue-400 transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/project"
									className="hover:text-blue-400 transition-colors"
								>
									프로젝트
								</Link>
							</li>
							<li>
								<Link
									href="/history"
									className="hover:text-blue-400 transition-colors"
								>
									히스토리
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-blue-400 transition-colors"
								>
									문의
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className="col-span-1 md:col-span-2">
						<h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
						<ul className="space-y-4">
							<li className="flex items-start gap-3">
								<MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
								<span>서울특별시 노원구 화랑로 453, 5층</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail size={20} className="text-blue-500 shrink-0" />
								<a
									href="mailto:contact@waveon.kr"
									className="hover:text-blue-400 transition-colors"
								>
									contact@waveon.kr
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Phone size={20} className="text-blue-500 shrink-0" />
								<span>02-123-4567</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
					<p>© {new Date().getFullYear()} WAVE ON. All rights reserved.</p>
					<div className="flex gap-6">
						<Link
							href="/privacy"
							className="hover:text-white transition-colors"
						>
							개인정보처리방침
						</Link>
						<Link href="/terms" className="hover:text-white transition-colors">
							이용약관
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
