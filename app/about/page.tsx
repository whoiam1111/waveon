import Intro from "../../components/about/intro";
import Vision from "../../components/about/vision";
import CoreValues from "../../components/about/core-values";
import WhatWeDo from "../../components/about/what-we-do";
import Contact from "../../components/about/contact";

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-slate-950 selection:bg-blue-500 selection:text-white pt-20">
			{/* 1. Intro */}
			<Intro />

			{/* 2. Vision */}
			<Vision />

			{/* 3. Core Values */}
			<CoreValues />

			{/* 4. What We Do */}
			<WhatWeDo />

			{/* 5. Contact */}
			<Contact />
		</main>
	);
}
