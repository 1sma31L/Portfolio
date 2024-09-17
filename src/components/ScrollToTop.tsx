"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Scroll() {
	let pathname = usePathname();
	useEffect(() => {
		window.scroll(0, 0);
	}, [pathname]);
	return <></>;
}
