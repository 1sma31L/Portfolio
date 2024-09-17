"use client";

import { TbArrowBadgeLeft, TbArrowBadgeLeftFilled } from "react-icons/tb";

import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();

	return (
		<button type="button" onClick={() => router.back()}>
			<span className="flex justify-start items-center text-zinc-400 hover:text-black transition-colors duration-150 dark:text-zinc-500 dark:hover:text-white group">
				<TbArrowBadgeLeft className="mb-1 group-hover:hidden block " />
				<TbArrowBadgeLeftFilled className="mb-1 group-hover:block hidden " />
				<span className="inline-block">Back</span>
			</span>
		</button>
	);
}
