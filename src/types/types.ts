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
