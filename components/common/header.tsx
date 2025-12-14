"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// 스크롤 감지 로직
	useEffect(() => {
		const handleScroll = () => {
			// 스크롤이 10px 이상 내려가면 배경 스타일 변경
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// 모바일 메뉴 토글 핸들러
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// 모바일 메뉴 닫기 핸들러 (링크 클릭 시)
	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<header
				className={`fixed top-0 left-0 w-full z-100 border-b border-neutral-800 
				shadow-sm transition-all duration-300 ease-in-out py-4 ${
					isScrolled
						? "bg-white/5 backdrop-blur-md border-blue-100/20"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-5xl mx-auto px-6 flex items-center justify-between w-full">
					{/* 1. 로고 이미지 */}
					<Link
						href="/"
						className="flex items-center gap-2 group"
						onClick={closeMobileMenu}
					>
						<div className="relative w-32 h-10 flex items-center justify-center">
							{/* 실제 로고 파일이 있다면 src를 변경해주세요. 여기선 예시 플레이스홀더를 사용합니다. */}
							<img
								src="/logo_white.png" // public 폴더 내에 로고 파일 필요
								alt="Wave Logo"
								className="object-cover opacity-90"
							/>
						</div>
					</Link>

					{/* 2. 네비게이션 버튼 (데스크탑) */}
					<nav className="hidden md:flex items-center gap-8">
						{NAV_ITEMS.map((item) => {
							const isActive = pathname === item.href;
							return (
								<Link
									key={item.label}
									href={item.href}
									className={`text-sm font-medium transition-colors relative group ${
										isActive
											? "text-cyan-400"
											: "text-slate-200 hover:text-cyan-400"
									}`}
								>
									{item.label}
									{/* 호버 시 나타나는 하단 밑줄 애니메이션 */}
									<span
										className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
											isActive ? "w-full" : "w-0 group-hover:w-full"
										}`}
									/>
								</Link>
							);
						})}
					</nav>

					{/* 모바일 메뉴 버튼 (반응형 대비용) */}
					<button
						className="md:hidden text-white hover:text-cyan-400 p-2 z-101 relative"
						onClick={toggleMobileMenu}
						aria-label="Toggle mobile menu"
					>
						{isMobileMenuOpen ? (
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
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
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
						)}
					</button>
				</div>
			</header>

			{/* 모바일 메뉴 오버레이 및 사이드바 */}
			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={closeMobileMenu}
				items={NAV_ITEMS}
			/>
		</>
	);
}
