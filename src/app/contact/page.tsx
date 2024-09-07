import { ContactForm } from "@/components/Form";
import { MdEmail } from "react-icons/md";
import AnimatedDiv from "@/components/AnimatedDiv";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Contact Me",
	description: "Contact me for questions, inquiries, or collaborations.",
	icons: {
		icon: "/favicon.ico",
	},
};
function Contact() {
	return (
		<AnimatedDiv id={4}>
			<main
				className="container py-6 flex flex-col gap-3 px-4 md:px-0 min-h-[90vh] justify-center items-center"
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
