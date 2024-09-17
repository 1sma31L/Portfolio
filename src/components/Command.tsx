/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";
import { useEffect, useState } from "react";

import { CgProfile } from "react-icons/cg";
import { FaTerminal } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { LuPenLine } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";
import { RxMoon } from "react-icons/rx";
import { SiGmail } from "react-icons/si";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

type Post = {
	slug: string;
	frontMatter: {
		title: string;
	};
};

export default function Command() {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();
	const [posts, setPosts] = useState<Post[]>([]);
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.metaKey || e.ctrlKey) {
				if (e.key.toLowerCase() !== "r") {
					e.preventDefault();
					switch (e.key) {
						// Open
						case "k":
							setOpen((open) => !open);
							break;
						case "i":
							setTheme(resolvedTheme === "light" ? "dark" : "light");
							break;
						case "m":
							window.open("mailto:im.boussekine@gmail.com", "_blank");
							setOpen(false);
							break;
						// Pages
						case "a":
							router.push("/");
							setOpen(false);
							break;
						case "p":
							router.push("/projects");
							setOpen(false);
							break;
						case "c":
							router.push("/contact");
							setOpen(false);
							break;
						case "b":
							router.push("/blog");
							setOpen(false);
							break;
						default:
							break;
					}
				}
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [resolvedTheme]);
	useEffect(() => {
		// Fetch posts from the API
		const fetchPosts = async () => {
			const response = await fetch("/api/posts");
			const data = await response.json();
			setPosts(data);
		};

		fetchPosts();
		console.log(posts);
	}, []);
	return (
		<>
			<p
				className="text-sm text-muted-foreground flex gap-1 cursor-pointer "
				onClick={() => {
					setOpen(true);
				}}>
				Press{" "}
				<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
					<span className="text-xs">⌘</span>K
				</kbd>
			</p>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>

					<CommandItem>
						{resolvedTheme === "light" ? (
							<RxMoon className="mr-2 h-4 w-4" />
						) : (
							<PiSunLight className="mr-2 h-4 w-4" />
						)}
						<span>Toggle Theme</span>
						<CommandShortcut>⌘I</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<SiGmail className="mr-2 h-4 w-4" />
						<span>Mail</span>
						<CommandShortcut>⌘M</CommandShortcut>
					</CommandItem>
					<CommandSeparator />
					<CommandGroup heading="Pages">
						<CommandItem>
							<CgProfile className="mr-2 h-4 w-4" />
							<span>Portfolio</span>
							<CommandShortcut>⌘A</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<FaTerminal className="mr-2 h-4 w-4" />
							<span>Projects</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<MdEmail className="mr-2 h-4 w-4" />
							<span>Contact</span>
							<CommandShortcut>⌘C</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<LuPenLine className="mr-2 h-4 w-4" />
							<span>Blog</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
					</CommandGroup>

					<CommandGroup heading="All Articles">
						{posts.map(({ slug, frontMatter }) => (
							<CommandItem
								key={slug}
								className="cursor-pointer"
								onSelect={() => {
									router.push(`/blog/post/${slug}`);
									setOpen(false);
								}}>
								<div className="flex items-center gap-2">
									<IoDocumentText className="mr-w h-4 w-4" />
									<span> {frontMatter.title}</span>
								</div>
								<CommandShortcut>Click</CommandShortcut>
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
