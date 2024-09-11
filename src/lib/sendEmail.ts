import emailjs from "@emailjs/browser";
import dotenv from "dotenv";
dotenv.config();

if (process.env.PUBLIC_KEY !== undefined) {
	emailjs.init(process.env.PUBLIC_KEY);
} else {
	console.error("Error initializing EmailJS: Public key not found");
}

export const sendEmail = async (templateParams: any) => {
	try {
		if (
			process.env.SERVICE_ID !== undefined &&
			process.env.TEMPLATE_ID !== undefined
		) {
			const response = await emailjs.send(
				process.env.SERVICE_ID,
				process.env.TEMPLATE_ID,
				templateParams
			);
			console.log("Email sent successfully:", response);
		} else {
			console.error(
				"Error sending email: Problem with EmailJS configuration (service or template ID not found)"
			);
		}
	} catch (error: any) {
		console.error("Error sending email:", error.response || error.message);
	}
};
