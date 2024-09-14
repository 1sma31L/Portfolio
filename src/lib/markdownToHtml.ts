import { unified } from "unified";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
// import { getSingletonHighlighter } from "shiki"; //Having issues with this when using --turbo
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";

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
		// getHighlighter: () =>
		// 	getSingletonHighlighter({
		// 		themes: ["catppuccin-mocha", "catppuccin-latte"],
		// 		langs: ["javascript"],
		// 	}),
		theme: {
			dark: "catppuccin-mocha",
			light: "catppuccin-latte",
		},
		defaultLang: "javascript",
		transformers: [
			transformerCopyButton({
				visibility: "always",
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
