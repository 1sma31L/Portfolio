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
		],
		previewLink: "www.gdscensta.tech",
		githubLink: "https://github.com/1sma31L/gdsc-ensta",
	},
];
export default upcomingProjects;
