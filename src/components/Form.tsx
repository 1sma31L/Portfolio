"use client";
import { db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { sendEmail } from "@/lib/sendEmail";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { getFormSchema, type FormValues } from "../lib/validation";
// import { toast } from "sonner";
import { useToast } from "@/hooks/use-toast";

const messagesCollectionRef = collection(db, "inbox");

export function ContactForm() {
	const formSchema = getFormSchema();
	const { toast } = useToast();
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: "",
			honeypot: "",
		},
	});

	const { handleSubmit, formState, control, watch, setError, clearErrors } =
		form;
	const { isSubmitting } = formState;
	const [messageStatus, setMessageStatus] = useState<string>("idle");
	useEffect(() => {
		const subscription = watch((value: any, { name }: any) => {
			if (name === "message" && /http|www|href/.test(value.message ?? "")) {
				setError("message", {
					type: "manual",
					message: "Message must not contain URLs",
				});
			} else {
				clearErrors("message");
			}
		});
		return () => {
			subscription.unsubscribe();
		};
	}, [watch, setError, clearErrors]);

	async function onSubmit(data: FormValues) {
		if (data.honeypot) {
			return;
		}

		const formData = new FormData();
		Object.entries(data).forEach(([key, value]) => {
			if (value) {
				formData.append(key, value.toString());
			}
		});

		try {
			await addDoc(messagesCollectionRef, {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				message: data.message,
			});
			await sendEmail({
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				message: data.message,
			});
			setMessageStatus("sent");
			toast({
				variant: "default",
				title: "Your Message Has Been Sent Successfully.",
				description: new Date().toLocaleString(),
			});
			form.reset();
		} catch (error: any) {
			setMessageStatus("error");
			toast({
				variant: "destructive",
				title: "An Error Occured.",
				description: (
					<>
						{error.message || "Unexpected error occurred,"}
						<br />
						Please try again, or report this issue on GitHub.
					</>
				),
			});
		}
	}

	useEffect(() => {
		if (messageStatus === "error" || messageStatus === "sent") {
			setTimeout(() => {
				setMessageStatus("idle");
			}, 4000);
		}
	}, [messageStatus]);
	return (
		<div className="flex justify-center items-center">
			<Card className="w-full max-w-4xl dark:bg-black">
				<CardHeader>
					<CardDescription className="text-pretty">
						Please, fill out the form below and I&apos;ll get back to you as
						soon as possible.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form noValidate onSubmit={handleSubmit(onSubmit)}>
							<div className="space-y-4">
								<div className="grid grid-cols-2 gap-4 ">
									<div className="space-y-2">
										<FormField
											control={control}
											name="firstName"
											render={({ field }) => (
												<FormItem>
													<FormLabel>First Name</FormLabel>
													<FormControl>
														<Input
															{...field}
															id="first-name"
															placeholder="Your first name"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div className="space-y-2">
										<FormField
											control={control}
											name="lastName"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Last Name</FormLabel>
													<FormControl>
														<Input
															{...field}
															id="last-name"
															placeholder="Your last name"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>
								<div className="space-y-2">
									<FormField
										control={control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														{...field}
														id="email"
														placeholder="Your email address"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="space-y-2">
									<FormField
										control={control}
										name="message"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Message</FormLabel>
												<FormControl>
													<Textarea
														{...field}
														id="message"
														placeholder="Enter your message here..."
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								{/* Honeypot Field */}
								<div style={{ display: "none" }}>
									<FormField
										control={control}
										name="honeypot"
										render={({ field }) => (
											<FormItem>
												<Input
													{...field}
													id="honeypot"
													tabIndex={-1}
													autoComplete="off"
												/>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<Button
								type="submit"
								disabled={
									isSubmitting ||
									messageStatus === "sent" ||
									messageStatus === "error"
								}
								className={`w-full mt-6 ${
									(messageStatus === "sent" && "!bg-green-500") ||
									(messageStatus === "error" && "!bg-red-500")
								}`}>
								{messageStatus !== "idle" ? (
									messageStatus + "!"
								) : !isSubmitting ? (
									"Send Message"
								) : (
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								)}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
