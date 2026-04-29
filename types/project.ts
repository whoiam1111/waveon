export interface Project {
	apply_url?: string;
	staff?: string | string[]; // Adapt to handle both just in case, or move strict to array if API dictates
	created_at: string;
	duration_type?: string; // Not in API example but might be in data? Keep optional
	end_date?: string;
	manager?: string;
	video_url?: string;
	uid: string;
	image_urls: string[]; // Changed from string (JSON) to string[]
	poster_url: string;
	updated_at: string;
	project_category: string;
	start_date?: string; // Make optional as API example didn't show it explicitly populated
	place?: string;
	project_time?: string;
	homepage?: string;
	SK?: string;
	sessions?: any[];
	PK?: string;
	description: string;
	title: string;
	// Add other fields from API if needed
	mc?: string[];
	performer?: string[];
	speaker?: string[];
	project_date?: string;
}
