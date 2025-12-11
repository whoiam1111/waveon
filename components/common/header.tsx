"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// 네비게이션 항목 정의 (유지보수를 위해 배열로 관리)
const NAV_ITEMS = [
	{ label: "About", href: "/about" },
	{ label: "프로젝트", href: "/project" },
	{ label: "히스토리", href: "/history" },
	{ label: "문의", href: "/contact" },
];

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	// 스크롤 감지 로직
	useEffect(() => {
		const handleScroll = () => {
			// 스크롤이 10px 이상 내려가면 배경 스타일 변경
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 border-b border-neutral-800 shadow-sm shadow-neutral-900 transition-all duration-300 ease-in-out ${
				isScrolled
					? "bg-white/5 backdrop-blur-md shadow-sm border-b border-blue-100/20 py-3"
					: "bg-transparent py-5"
			}`}
		>
			<div className="container mx-auto px-6 flex items-center justify-between">
				{/* 1. 로고 이미지 */}
				<Link href="/" className="flex items-center gap-2 group">
					<div className="relative w-24 h-10 overflow-hidden rounded-lg">
						{/* 실제 로고 파일이 있다면 src를 변경해주세요. 여기선 예시 플레이스홀더를 사용합니다. */}
						<Image
							src="/logo_white.png" // public 폴더 내에 로고 파일 필요
							alt="Wave Logo"
							fill
							className="object-cover opacity-90"
							priority
						/>
					</div>
					{/* <span className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
						Wave
					</span> */}
				</Link>

				{/* 2. 네비게이션 버튼 (데스크탑) */}
				<nav className="hidden md:flex items-center gap-8">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors relative group"
						>
							{item.label}
							{/* 호버 시 나타나는 하단 밑줄 애니메이션 */}
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
						</Link>
					))}
				</nav>

				{/* 모바일 메뉴 버튼 (반응형 대비용 - 필요 시 기능 추가 가능) */}
				<button className="md:hidden text-slate-600 hover:text-blue-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</header>
	);
}
