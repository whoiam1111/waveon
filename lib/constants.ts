export const NAV_ITEMS = [
	{ label: "About", href: "/about" },
	{ label: "프로젝트", href: "/project" },
	{ label: "히스토리", href: "/history" },
	{ label: "문의", href: "/contact" },
];

export const CATEGORIES = [
	{ id: "all", label: "전체" },
	{ id: "popup", label: "팝업" },
	{ id: "performance", label: "공연" },
	{ id: "etc", label: "기타" },
];

export const CATEGORY_COLORS: Record<string, string> = {
	테마카페: "bg-rose-500/90 text-white",
	공연: "bg-violet-500/90 text-white",
	"전시/상영": "bg-amber-500/90 text-white",
	default: "bg-blue-600/90 text-white",
};
