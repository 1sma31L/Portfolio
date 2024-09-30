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

export type PostProps = {
	params: {
		slug: string;
	};
};

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
		url: string;
		height: number;
		width: number;
	}>;
	name: string;
	owner: {
		external_urls: {
			spotify: string;
		};
		followers: {
			href: string;
			total: number;
		};
		href: string;
		id: string;
		type: string;
		uri: string;
		display_name: string;
	};
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
		followers: {
			href: string;
			total: number;
		};
		href: string;
		id: string;
		type: string;
		uri: string;
	};
	is_local: boolean;
	track: {
		album: {
			album_type: string;
			total_tracks: number;
			available_markets: Array<string>;
			external_urls: {
				spotify: string;
			};
			href: string;
			id: string;
			images: Array<{
				url: string;
				height: number;
				width: number;
			}>;
			name: string;
			release_date: string;
			release_date_precision: string;
			restrictions: {
				reason: string;
			};
			type: string;
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
		available_markets: Array<string>;
		disc_number: number;
		duration_ms: number;
		explicit: boolean;
		external_ids: {
			isrc: string;
			ean: string;
			upc: string;
		};
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		is_playable: boolean;
		linked_from: {};
		restrictions: {
			reason: string;
		};
		name: string;
		popularity: number;
		preview_url: string;
		track_number: number;
		type: string;
		uri: string;
		is_local: boolean;
	};
};

export type TChannelInfo = {
	kind: string;
	etag: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: Array<{
		kind: string;
		etag: string;
		id: string;
		snippet: {
			title: string;
			description: string;
			customUrl: string;
			publishedAt: string;
			thumbnails: {
				default: {
					url: string;
					width: number;
					height: number;
				};
				medium: {
					url: string;
					width: number;
					height: number;
				};
				high: {
					url: string;
					width: number;
					height: number;
				};
			};
			localized: {
				title: string;
				description: string;
			};
		};
		contentDetails: {
			relatedPlaylists: {
				likes: string;
				uploads: string;
			};
		};
		statistics: {
			viewCount: string;
			subscriberCount: string;
			hiddenSubscriberCount: boolean;
			videoCount: string;
		};
	}>;
};
