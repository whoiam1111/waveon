import { Project } from "@/types/project";

export const MOCK_PROJECTS: Project[] = [
	{
		application_url: "https://www.youtube.com/watch?v=fvPnapDWR0E",
		staff: "테마카페 매니아",
		created_at: "2025-08-24T01:10:43.129Z",
		duration_type: "long",
		end_date: "2025-08-24",
		manager: "테마카페 장사꾼",
		video_url: "https://www.youtube.com/watch?v=uF6HSy_rn0g",
		uid: "6d776202-2446-4f4a-9271-89f65ffe39c7",
		image_urls:
			'{"event_photos":["https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/cc83b2b7-c20b-4d28-dd2d-127ba1f14000/public","https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/087ade73-09e2-4fed-fe7f-dc83b5bf9100/public"],"poster_image":"https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/3ac6a5c5-b894-4588-c8a8-b61e10eaf400/public"}',
		updated_at: "2025-08-25T15:48:44.355Z",
		project_category: "테마카페",
		start_date: "2025-08-24",
		place: "노원 노른자땅",
		project_time: "14:00",
		homepage: "IAM",
		SK: "METADATA",
		sessions: [],
		PK: "EVENT#6d776202-2446-4f4a-9271-89f65ffe39c7",
		description:
			"AM 테마카페는 단순한 카페가 아니라, 사람과 이야기가 살아 숨 쉬는 문화 공간입니다.\r\n" +
			"맛있는 커피와 여유로운 분위기 속에서 책을 읽고, 대화를 나누며, 작은 공연과 전시, 클래스까지 즐길 수 있는 열린 무대가 됩니다.\r\n" +
			"\r\n" +
			"누구나 편안히 앉아 쉬어갈 수 있는 카페이자, 새로운 아이디어와 영감을 만나는 곳.\r\n" +
			"IAM 테마카페는 일상의 쉼표이면서 동시에 배움과 만남이 이어지는 작은 플랫폼입니다.",
		title: "IAM 테마카페",
	},
	{
		uid: "sample-project-2",
		created_at: "2025-08-20T10:00:00.000Z",
		updated_at: "2025-08-21T10:00:00.000Z",
		title: "Summer Jazz Night",
		description:
			"A wonderful night of jazz music under the stars. Join us for an unforgettable experience with top local artists.",
		project_category: "공연",
		start_date: "2025-08-30",
		end_date: "2025-08-30",
		place: "Yeouido Park",
		image_urls:
			'{"poster_image": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=2664&ixlib=rb-4.0.3"}',
		staff: "Wave Crew",
		manager: "Director Kim",
	},
	{
		uid: "sample-project-3",
		created_at: "2025-08-15T09:00:00.000Z",
		updated_at: "2025-08-16T09:00:00.000Z",
		title: "Indie Film Festival",
		description:
			"Celebrating independent cinema from around the globe. Screenings, Q&A sessions, and workshops.",
		project_category: "전시/상영",
		start_date: "2025-09-01",
		end_date: "2025-09-03",
		place: "Art Haus Cinema",
		image_urls:
			'{"poster_image": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"}',
		staff: "Wave Cinema Team",
		manager: "Curator Lee",
	},
	{
		uid: "sample-project-4",
		created_at: "2025-11-01T09:00:00.000Z",
		updated_at: "2025-11-01T09:00:00.000Z",
		title: "Winter Lights Festival",
		description:
			"Experience the magic of winter with our annual light festival. Interactive installations, warm drinks, and holiday cheer awaiting you.",
		project_category: "축제",
		start_date: "2026-12-01",
		end_date: "2026-12-31",
		place: "City Plaza",
		image_urls:
			'{"poster_image": "https://images.unsplash.com/photo-1543162002-3855ff7376c6?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"}',
		staff: "Wave Events Team",
		manager: "Director Park",
	},
];
