export interface Project {
	application_url?: string;
	staff?: string;
	created_at: string;
	duration_type?: string;
	end_date?: string;
	manager?: string;
	video_url?: string;
	uid: string;
	image_urls: string; // JSON string
	updated_at: string;
	project_category: string;
	start_date: string;
	place?: string;
	project_time?: string;
	homepage?: string;
	SK?: string;
	sessions?: any[];
	PK?: string;
	description: string;
	title: string;
}

export interface ParsedProject extends Omit<Project, "image_urls"> {
	image_urls: {
		event_photos?: string[];
		poster_image?: string;
	};
}
