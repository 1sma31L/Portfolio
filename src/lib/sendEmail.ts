import emailjs from "@emailjs/browser";
import dotenv from "dotenv";
dotenv.config();

// Initialize EmailJS with the public key
emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY!);

export const sendEmail = async (templateParams: any) => {
	try {
		const response = await emailjs.send(
			process.env.NEXT_PUBLIC_SERVICE_ID!,
			process.env.NEXT_PUBLIC_TEMPLATE_ID!,
			templateParams
		);
		console.log("Email sent successfully:", response);
	} catch (error: any) {
		console.error("Error sending email:", error.response || error.message);
	}
};
