"use client";

import { SlidersHorizontal } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

interface ProjectToolbarProps {
	selectedCategory: string;
	onSelectCategory: (category: string) => void;
	sortOrder: "latest" | "oldest";
	onSortChange: (order: "latest" | "oldest") => void;
}

export default function ProjectToolbar({
	selectedCategory,
	onSelectCategory,
	sortOrder,
	onSortChange,
}: ProjectToolbarProps) {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
			{/* Category Filter Buttons */}
			<div className="flex items-center gap-2 bg-slate-900/50 p-1.5 rounded-xl border border-slate-800">
				{CATEGORIES.map((cat) => (
					<button
						key={cat.id}
						onClick={() => onSelectCategory(cat.id)}
						className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
							selectedCategory === cat.id
								? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
								: "text-slate-400 hover:text-white hover:bg-slate-800"
						}`}
					>
						{cat.label}
					</button>
				))}
			</div>

			{/* Sort Controls */}
			<div className="flex items-center gap-3 bg-slate-900/50 p-1.5 rounded-lg border border-slate-800">
				<SlidersHorizontal className="w-4 h-4 text-slate-400 ml-2" />
				<select
					value={sortOrder}
					onChange={(e) => onSortChange(e.target.value as "latest" | "oldest")}
					className="bg-transparent text-sm text-slate-200 border-none focus:ring-0 cursor-pointer pr-8 py-1"
				>
					<option value="latest" className="bg-slate-900">
						최신순
					</option>
					<option value="oldest" className="bg-slate-900">
						오래된순
					</option>
				</select>
			</div>
		</div>
	);
}
