import { MdNaturePeople, MdRateReview } from "react-icons/md";

import { GiMaterialsScience } from "react-icons/gi";
import { RiCodeSSlashFill } from "react-icons/ri";
import { TNavItem } from "@/types/types";

const navItems: TNavItem = [
	{ path: "/blog", name: "All", description: "All my articles." },
	{
		path: "/blog/category/science",
		name: "Science",
		icon: <GiMaterialsScience />,
		description: "Math, Physics, Science related articles.",
		keywords: ["science", "math", "physics"],
	},
	{
		path: "/blog/category/tech",
		name: "Tech",
		icon: <RiCodeSSlashFill />,
		description: "Tech, Programming, Coding related articles.",
		keywords: ["tech", "programming", "coding", "development", "software"],
	},
	{
		path: "/blog/category/reviews",
		name: "Reviews",
		icon: <MdRateReview />,
		description:
			"Reviews of products, services, books, movies, tv shows and more.",
		keywords: ["reviews", "products", "services", "books", "movies", "tv"],
	},
	{
		path: "/blog/category/life",
		name: "Life",
		icon: <MdNaturePeople />,
		description: "Life, Personal, Self-help, Motivation related articles.",
		keywords: ["life", "personal", "self-help", "motivation", "inspiration"],
	},
];
export default navItems;
