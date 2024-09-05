import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";

export default async function markdownToHtml(markdown: string) {
	const result = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkMath)
		.use(remarkRehype)
		.use(rehypeSlug)
		.use(rehypeAutoLinkHeadings, {
			properties: {
				className: ["heading-anchor"], // Customize class names if needed
			},
			behavior: "wrap", // 'append' or 'prepend' based on where you want the link
		})
		.use(rehypeKatex)
		.use(rehypePrettyCode, {
			theme: {
				dark: "catppuccin-mocha",
				light: "catppuccin-latte",
			},
			defaultLang: "javascript",
		})
		.use(rehypeStringify)
		.process(markdown);

	return {
		htmlContent: String(result),
	};
}
