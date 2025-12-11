import ContactHeader from "../../components/contact/contact-header";
import GeneralInfo from "../../components/contact/general-info";
import InquiryOptions from "../../components/contact/inquiry-options";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact - WAVE ON",
	description:
		"WAVE ON과 함께 새로운 파도를 만들어보세요. 아티스트, 스태프, 제휴 문의",
};

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-slate-950 selection:bg-blue-500 selection:text-white">
			{/* 1. Header Hero */}
			<ContactHeader />

			{/* 2. Main Inquiry Options */}
			<InquiryOptions />

			{/* 3. General Info & Map */}
			<GeneralInfo />
		</main>
	);
}
