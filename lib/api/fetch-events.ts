import { APIEvent, APIResponseList } from "@/types/api";

const API_BASE_URL =
	"https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events";
const HOMEPAGE_NAME = "WAVEON"; // Temporary homepage name

export async function fetchEvents(limit?: number): Promise<APIResponseList> {
	const url = new URL(API_BASE_URL);
	url.searchParams.append("homepage", HOMEPAGE_NAME);
	if (limit) {
		url.searchParams.append("limit", limit.toString());
	}

	const res = await fetch(url.toString());

	if (!res.ok) {
		throw new Error("Failed to fetch events");
	}

	return res.json();
}

export async function fetchEvent(uid: string): Promise<APIEvent> {
	const url = `${API_BASE_URL}/${uid}`;
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error("Failed to fetch event");
	}

	return res.json();
}
