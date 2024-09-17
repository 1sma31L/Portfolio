import AnimatedDiv from "@/components/AnimatedDiv";
import { ContactForm } from "@/components/Form";
import { MdEmail } from "react-icons/md";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with me for any questions, inquiries, or collaboration opportunities. I'm open to discussing projects, providing support, or exploring new ventures together. Reach out to connect!",
	icons: {
		icon: "/favicon.ico",
	},
};
function Contact() {
	return (
		<AnimatedDiv id={3}>
			<main
				className="container py-6 flex flex-col gap-3 px-4 md:px-0 min-h-[90vh] "
				id="contact">
				<div>
					<div className="flex gap-3 justify-start items-center">
						<MdEmail className="text-xl md:text-2xl" />
						<h1 className={`text-[30px] md:text-[40px] font-bold`}>
							Contact Me
						</h1>
					</div>
					<p className={`py-2 mb-5 `}>
						Feel free to reach out to me for questions, inquiries, or
						collaborations. Open to new opportunities and challenges.
					</p>
					<ContactForm />
				</div>
			</main>
		</AnimatedDiv>
	);
}

export default Contact;
