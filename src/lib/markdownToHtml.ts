import 'katex/dist/katex.min.css';

import fs from 'fs';
import { getSingletonHighlighter } from 'shiki';
import path from 'path';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import stripJsonComments from 'strip-json-comments';
import { themesDirectory } from '@/constants';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import { unified } from 'unified';

const lightTheme = JSON.parse(
  stripJsonComments(
    fs.readFileSync(
      path.join(themesDirectory, '../themes/serendipity-morning.json'),
      'utf-8'
    )
  )
);

const darkTheme = JSON.parse(
  stripJsonComments(
    fs.readFileSync(
      path.join(themesDirectory, '../themes/gruvbox-dark-hard.json'),
      //to get path inetllisense
      'utf-8'
    )
  )
);

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeAutoLinkHeadings, {
    properties: {
      className: ['heading-anchor'],
    },
    behavior: 'wrap',
  })
  .use(rehypeKatex)
  .use(rehypePrettyCode, {
    getHighlighter: () =>
      getSingletonHighlighter({
        themes: ['synthwave-84', 'snazzy-light'],
        langs: ['javascript', 'html', 'css', 'typescript', 'sql', 'c'],
      }),
    theme: {
      dark: 'synthwave-84',
      light: 'snazzy-light',
    },
    defaultLang: 'javascript',
    transformers: [
      transformerCopyButton({
        visibility: 'hover',
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
