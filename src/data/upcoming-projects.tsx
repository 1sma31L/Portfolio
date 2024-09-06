const upcomingProjects: {
	id: number;
	title: string;
	description: string;
	techStack: string[];
	previewLink: string;
	githubLink: string;
}[] = [
	{
		id: 0,
		title: "GDSC ENSTA Website",
		description:
			"Website for Google Developer Student Clubs - ENSTA with the ability to login with Google OAuth, and the ability to create and join events and send messages between members.",
		techStack: [
			"HTML",
			"TypeScript",
			"React",
			"Next.js",
			"TailwindCSS",
			"Firebase",
			"JWT",
			"Shadcn-ui",
			"Aceternity",
			"Figma",
		],
		previewLink: "",
		githubLink: "",
	},
	{
		id: 1,
		title: "Void",
		description:
			"Chat website that have a unique and simple B&W design that uses Socket.io, User Authentication, And protected routes.",
		techStack: [
			"HTML",
			"TypeScript",
			"React",
			"Next.js",
			"Node.js",
			"Express",
			"MongoDB",
			"Socket.io",
			"Postman",
		],
		previewLink: "",
		githubLink: "",
	},
];
export default upcomingProjects;
