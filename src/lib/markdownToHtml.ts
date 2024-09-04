import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
// import remarkSlug from "remark-slug";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export default async function markdownToHtml(markdown: string) {
	return String(
		await unified()
			.use(remarkParse)
			.use(remarkGfm)
			.use(remarkMath)
			// .use(remarkSlug)
			.use(remarkRehype)
			.use(rehypeKatex)
			.use(rehypeShiki, {
				themes: {
					light: "one-light",
					dark: "poimandres",
				},
			})
			.use(rehypeStringify)
			.process(markdown)
	);
}
