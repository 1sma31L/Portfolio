import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const SocialMedia: {
	name: string;
	url: string;
	icon: JSX.Element;
}[] = [
	{
		name: "GitHub",
		url: "https://github.com/1sma31L",
		icon: <FaGithub />,
	},
	{
		name: "X (Twitter)",
		url: "https://x.com/11sma31l",
		icon: <FaXTwitter />,
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/ismail-boussekine",
		icon: <FaLinkedin />,
	},
	{
		name: "Email",
		url: "mailto:im.boussekine@gmail.com",
		icon: <FaEnvelope />,
	},
];
export default SocialMedia;
