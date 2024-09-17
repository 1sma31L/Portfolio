import "katex/dist/katex.min.css";

import { getSingletonHighlighter } from "shiki";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { unified } from "unified";

const processor = unified()
	.use(remarkParse)
	.use(remarkGfm)
	.use(remarkMath)
	.use(remarkRehype)
	.use(rehypeSlug)
	.use(rehypeAutoLinkHeadings, {
		properties: {
			className: ["heading-anchor"],
		},
		behavior: "wrap",
	})
	.use(rehypeKatex)
	.use(rehypePrettyCode, {
		getHighlighter: () =>
			getSingletonHighlighter({
				themes: ["catppuccin-mocha", "catppuccin-latte"],
				langs: ["javascript"],
			}),
		theme: {
			dark: "catppuccin-mocha",
			light: "catppuccin-latte",
		},
		defaultLang: "javascript",
		transformers: [
			transformerCopyButton({
				visibility: "hover",
				feedbackDuration: 3_000,
			}),
		],
	})
	.use(rehypeStringify);

export default async function markdownToHtml(markdown: string) {
	const result = await processor.process(markdown);
	return {
		htmlContent: String(result),
	};
}
