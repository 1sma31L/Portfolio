export type TItem = {
	name: string;
	icon: JSX.Element;
	color:
		| "Red"
		| "Green"
		| "Blue"
		| "Yellow"
		| "Purple"
		| "Gray"
		| "Zinc"
		| "Orange"
		| "Cyan";
};

export type TTimeLine = {
	year: number;
	month: {
		monthName: string;
		achievements: string[];
	}[];
}[];

export type TFrontMatter = {
	title: string;
	metaDescription: string;
	author: string;
	date: string;
	tags: string[];
	categories: string[];
	keywords: string[];
	lastmod: string;
	duration: string;
};

export type Post = {
	slug: string;
	frontMatter: {
		title: string;
	};
};

export type TNavItem = {
	path: string;
	name: string;
	description: string;
	icon?: JSX.Element;
	keywords?: string[];
}[];

//
export type TPlaylist = {
	collaborative: boolean;
	description: string;
	external_urls: {
		spotify: string;
	};
	href: string;
	id: string;
	images: Array<{
		height: any;
		url: string;
		width: any;
	}>;
	name: string;
	owner: {
		display_name: string;
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		type: string;
		uri: string;
	};
	primary_color: any;
	public: boolean;
	snapshot_id: string;
	tracks: {
		href: string;
		total: number;
	};
	type: string;
	uri: string;
};

// Playlist Items
export type TSong = {
	added_at: string;
	added_by: {
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		type: string;
		uri: string;
	};
	is_local: boolean;
	primary_color: any;
	track: {
		preview_url: string;
		available_markets: Array<string>;
		explicit: boolean;
		type: string;
		episode: boolean;
		track: boolean;
		album: {
			available_markets: Array<string>;
			type: string;
			album_type: string;
			href: string;
			id: string;
			images: Array<{
				height: number;
				url: string;
				width: number;
			}>;
			name: string;
			release_date: string;
			release_date_precision: string;
			uri: string;
			artists: Array<{
				external_urls: {
					spotify: string;
				};
				href: string;
				id: string;
				name: string;
				type: string;
				uri: string;
			}>;
			external_urls: {
				spotify: string;
			};
			total_tracks: number;
		};
		artists: Array<{
			external_urls: {
				spotify: string;
			};
			href: string;
			id: string;
			name: string;
			type: string;
			uri: string;
		}>;
		disc_number: number;
		track_number: number;
		duration_ms: number;
		external_ids: {
			isrc: string;
		};
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		name: string;
		popularity: number;
		uri: string;
		is_local: boolean;
	};
	video_thumbnail: {
		url: any;
	};
};

export type TProfile = {
	display_name: string;
	external_urls: {
		spotify: string;
	};
	followers: {
		href: string;
		total: number;
	};
	href: string;
	id: string;
	images: Array<{
		url: string;
		height: number;
		width: number;
	}>;
	type: string;
	uri: string;
};
