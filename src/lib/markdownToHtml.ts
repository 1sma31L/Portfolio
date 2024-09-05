import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
// import rehypeShiki from "@shikijs/rehype";
// import remarkSlug from "remark-slug";

export default async function markdownToHtml(markdown: string) {
	return String(
		await unified()
			.use(remarkParse)
			.use(remarkRehype)
			.use(remarkGfm)
			.use(remarkMath)
			.use(rehypeKatex)
			.use(rehypePrettyCode, {
				theme: {
					dark: "catppuccin-mocha",
					light: "catppuccin-latte",
				},
				defaultLang: "javascript",
			})
			.use(rehypeStringify)
			.process(markdown)
	);
}
