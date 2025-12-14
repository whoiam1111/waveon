"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
	items: { label: string; href: string }[];
}

export default function MobileMenu({
	isOpen,
	onClose,
	items,
}: MobileMenuProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* 백드롭 (배경 어둡게 처리 & 클릭 시 닫기) */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 bg-black/60 z-140 md:hidden"
						onClick={onClose}
					/>

					{/* 사이드바 (오른쪽에서 슬라이드) */}
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 25, stiffness: 200 }}
						className="fixed top-0 right-0 h-full w-[70%] max-w-xs bg-neutral-900/95 backdrop-blur-xl z-150 flex flex-col items-center justify-center space-y-8 md:hidden border-l border-neutral-800 shadow-2xl"
					>
						{items.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								onClick={onClose}
								className="text-xl font-medium text-slate-200 hover:text-cyan-400 transition-colors"
							>
								{item.label}
							</Link>
						))}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
