"use client";

import * as React from "react";

import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Capitalize from "@/lib/Capitalize";
import Link from "next/link";
import { Suspense } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useSearchParams } from "next/navigation";

const ITEMS_TO_DISPLAY = 3;
type TItem = {
	href?: string;
	label: string;
};

function BreadcrumbContent({ label }: { label: string }) {
	const searchParams = useSearchParams();
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const [isClient, setIsClient] = React.useState(false);

	React.useEffect(() => {
		setIsClient(true);
	}, []);
	const items: TItem[] = [
		{ href: "/", label: "Home" },
		{ href: "/blog", label: "Blog" },
	];
	if (searchParams.get("category")) {
		const category = searchParams.get("category");
		items.push({
			href: `/blog/category/${category}`,
			label: Capitalize(category || "Category"),
		});
	} else if (searchParams.get("tag")) {
		const tag = searchParams.get("tag");
		items.push({
			href: `/blog/tag/${tag}`,
			label: Capitalize(tag || "Tag"),
		});
	}

	items.push({ label });

	return (
		isClient && (
			<Breadcrumb>
				<BreadcrumbList>
					{/* Render breadcrumb logic here */}
					<BreadcrumbItem>
						<BreadcrumbLink href={items[0].href}>
							{items[0].label}
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					{items.length > ITEMS_TO_DISPLAY && (
						<>
							<BreadcrumbItem>
								{isDesktop ? (
									<DropdownMenu>
										<DropdownMenuTrigger
											className="flex items-center gap-1"
											aria-label="Toggle menu">
											<BreadcrumbEllipsis className="h-4 w-4" />
										</DropdownMenuTrigger>
										<DropdownMenuContent align="start">
											{items.slice(1, -2).map((item, index) => (
												<DropdownMenuItem key={index}>
													<Link href={item.href ? item.href : "#"}>
														{item.label}
													</Link>
												</DropdownMenuItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
								) : (
									<Drawer>
										<DrawerTrigger aria-label="Toggle Menu">
											<BreadcrumbEllipsis className="h-4 w-4" />
										</DrawerTrigger>
										<DrawerContent>
											<DrawerHeader className="text-left">
												<DrawerTitle>Navigate to</DrawerTitle>
												<DrawerDescription>
													Select a page to navigate to.
												</DrawerDescription>
											</DrawerHeader>
											<div className="grid gap-1 px-4">
												{items.slice(1, -2).map((item, index) => (
													<Link
														key={index}
														href={item.href ? item.href : "#"}
														className="py-1 text-sm">
														{item.label}
													</Link>
												))}
											</div>
											<DrawerFooter className="pt-4">
												<DrawerClose asChild>
													<Button variant="outline">Close</Button>
												</DrawerClose>
											</DrawerFooter>
										</DrawerContent>
									</Drawer>
								)}
							</BreadcrumbItem>
							<BreadcrumbSeparator />
						</>
					)}
					{items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
						<BreadcrumbItem key={index}>
							{item.href ? (
								<>
									<BreadcrumbLink
										asChild
										className="max-w-20 truncate md:max-w-none">
										<Link href={item.href}>{item.label}</Link>
									</BreadcrumbLink>
									<BreadcrumbSeparator />
								</>
							) : (
								<BreadcrumbPage className="max-w-20 truncate md:max-w-none">
									{item.label}
								</BreadcrumbPage>
							)}
						</BreadcrumbItem>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		)
	);
}

export default function BreadcrumbResponsive({ label }: { label: string }) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BreadcrumbContent label={label} />
		</Suspense>
	);
}
