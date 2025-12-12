"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

// 네비게이션 항목 정의 (유지보수를 위해 배열로 관리)
const NAV_ITEMS = [
	{ label: "About", href: "/about" },
	{ label: "프로젝트", href: "/project" },
	{ label: "히스토리", href: "/history" },
	{ label: "문의", href: "/contact" },
];

export default function Header() {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// 스크롤 감지 로직
	useEffect(() => {
		const handleScroll = () => {
			// 스크롤이 10px 이상 내려가면 배경 스타일 변경
			setIsScrolled(window.scrollY > 10);
			// console.log(window.scrollY);
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
			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						{/* 백드롭 (배경 어둡게 처리 & 클릭 시 닫기) */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 bg-black/60 z-140 md:hidden"
							onClick={closeMobileMenu}
						/>

						{/* 사이드바 (오른쪽에서 슬라이드) */}
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", damping: 25, stiffness: 200 }}
							className="fixed top-0 right-0 h-full w-[70%] max-w-xs bg-neutral-900/95 backdrop-blur-xl z-150 flex flex-col items-center justify-center space-y-8 md:hidden border-l border-neutral-800 shadow-2xl"
						>
							{NAV_ITEMS.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									onClick={closeMobileMenu}
									className="text-xl font-medium text-slate-200 hover:text-cyan-400 transition-colors"
								>
									{item.label}
								</Link>
							))}
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
