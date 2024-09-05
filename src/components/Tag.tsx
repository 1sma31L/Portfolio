import React from "react";

function Tag({ text, icon }: { text: string; icon?: JSX.Element }) {
	return (
		<div className="inline-block ">
			<div className="flex justify-end items-start gap-1 border px-1 py-[2px] rounded bg-zinc-100 dark:bg-zinc-800">
				{icon && <p className="text-sm mt-[2px]">{icon}</p>}
				<p className="text-sm">{text}</p>
			</div>
		</div>
	);
}

export default Tag;
