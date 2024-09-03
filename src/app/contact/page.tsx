import { ContactForm } from "@/components/Form";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { MdEmail } from "react-icons/md";

function Contact() {
	return (
		<main className="container py-6 flex flex-col gap-3 px-4 md:px-0 min-h-[90vh]">
			<div className="flex gap-3 justify-start items-center">
				<MdEmail className="text-xl md:text-2xl" />
				<h1
					className={`text-[30px] md:text-[40px] font-bold ${GeistSans.className}`}>
					Contact Me
				</h1>
			</div>
			<p className={`py-2 mb-5 ${GeistMono.className}`}>
				Feel free to reach out to me for questions, inquiries, or
				collaborations. Open to new opportunities and challenges.
			</p>
			<ContactForm />
		</main>
	);
}

export default Contact;
