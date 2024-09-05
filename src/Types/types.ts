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
