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
export type Playlist = {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: Item[];
};

export type Item = {
	collaborative: boolean;
	description: string;
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: Image[];
	name: string;
	owner: Owner;
	public: boolean;
	snapshot_id: string;
	tracks: Tracks;
	type: string;
	uri: string;
};

export type ExternalUrls = {
	spotify: string;
};

export type Image = {
	url: string;
	height: number;
	width: number;
};

export type Owner = {
	external_urls: ExternalUrls;
	followers: Tracks;
	href: string;
	id: string;
	type: string;
	uri: string;
	display_name: string;
};

export type Tracks = {
	href: string;
	total: number;
};
