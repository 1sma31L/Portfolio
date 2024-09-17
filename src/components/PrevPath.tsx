"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

const PreviousPathTracker = () => {
	const pathname = usePathname();
	const [previousPath, setPreviousPath] = useState<string | null>(null);

	useEffect(() => {
		setPreviousPath((prev) => (pathname !== prev ? pathname : prev));
	}, [pathname]);

	return null;
};

export default PreviousPathTracker;
