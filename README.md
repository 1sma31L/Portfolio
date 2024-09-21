# Personal Website, Portfolio, and Blog

&nbsp;&nbsp;&nbsp;&nbsp;This repository contains the source code for my personal website, portfolio, and blog. That showcases my skills and the projects I've done. And my thoughts and experiences as blog posts.

## Description

 &nbsp;&nbsp;&nbsp;&nbsp;I built this website using `Next.js` for its slick routing SSR and SSG for statically generating blogs at runtime, `React` framework, and `Tailwind CSS`, a utility-first CSS framework. I am also using `TypeScript` to write the code for this website to capture errors at development phase with its great LSP. 
 
 &nbsp;&nbsp;&nbsp;&nbsp;I built this website from scratch, without using any templates or themes, so that I can learn more about web development and improve my skills and also wanted to make a 
 place for my thoughts for the world to see.

## Full Project Structure
``` bash
├── components.json
├── frontmatter.json
├── LICENSE
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
│   ├── icons
│   │   ├── Aceternity.webp
│   │   ├── CSS.webp
│   │   ├── Express.webp
│   │   ├── Figma.svg
│   │   ├── Firebase.svg
│   │   ├── Framer-Motion.svg
│   │   ├── HTML.svg
│   │   ├── JavaScript.svg
│   │   ├── JWT.svg
│   │   ├── Mongo-DB.svg
│   │   ├── Next-JS.webp
│   │   ├── Node-JS.svg
│   │   ├── Postman.svg
│   │   ├── React.svg
│   │   ├── Shadcn-UI.webp
│   │   ├── Socket-IO.webp
│   │   ├── Tailwind-CSS.svg
│   │   ├── TypeScript.svg
│   │   └── vercel.webp
│   └── images
├── README.md
├── src
│   ├── app
│   │   ├── api
│   │   │   └── posts
│   │   │       └── route.ts
│   │   ├── blog
│   │   │   ├── category
│   │   │   │   └── [category]
│   │   │   │       └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── post
│   │   │   │   └── [slug]
│   │   │   │       └── page.tsx
│   │   │   └── tag
│   │   │       └── [tag]
│   │   │           └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── (home)
│   │   │   ├── contact
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── projects
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── opengraph-image.png
│   │   └── sitemap.ts
│   ├── components
│   │   ├── AnimatedDiv.tsx
│   │   ├── BackButton.tsx
│   │   ├── BlogCard.tsx
│   │   ├── BlogNavBar.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── Command.tsx
│   │   ├── FeedBack.tsx
│   │   ├── Footer.tsx
│   │   ├── FormatDistanceToNow.tsx
│   │   ├── Form.tsx
│   │   ├── HomeNavBar.tsx
│   │   ├── InfiniteScroll.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── sections
│   │   │   └── LatestBlogs.tsx
│   │   ├── TechStack.tsx
│   │   ├── ThemeToggler.tsx
│   │   ├── ui
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── command.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   ├── toaster.tsx
│   │   │   └── toast.tsx
│   │   ├── UnderDevBar.tsx
│   │   └── Views.tsx
│   ├── config
│   │   └── firebase.ts
│   ├── constants
│   │   └── index.ts
│   ├── content
│   │   ├── frontmatter.json
│   │   └── posts
│   │       ├── async-await-in-javascript.md
│   │       ├── how-to-chose-your-linux-distribution.md
│   │       └── understanding-integrals-in-calculus.md
│   ├── data
│   │   ├── icons.ts
│   │   ├── nav-items.tsx
│   │   ├── projects.ts
│   │   ├── social-media.tsx
│   │   ├── tech.tsx
│   │   ├── time-line.ts
│   │   └── upcoming-projects.ts
│   ├── hooks
│   │   ├── use-media-query.ts
│   │   └── use-toast.ts
│   ├── lib
│   │   ├── Capitalize.ts
│   │   ├── formatDate.ts
│   │   ├── getPosts.ts
│   │   ├── markdownToHtml.ts
│   │   ├── scrollToTop.ts
│   │   ├── sendEmail.ts
│   │   ├── utils.ts
│   │   └── validation.ts
│   ├── themes
│   │   ├── gruvbox-dark-hard.json
│   │   ├── gruvbox-light-hard.json
│   │   ├── serendipity-morning.json
│   │   └── serendipity-sunset.json
│   └── types
│       └── types.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Dependencies

This project uses the following dependencies:
- **Next.js** (14.2.7) (App Router)
- **React** (18+)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Radix UI** (UI components)
- **ShadCN UI** (UI library) (Buttons, Dropdowns, Card, etc.)
- **React Icons** (Icons :) )
- **Remark & Rehype plugins** (Markdown and HTML processing)
- **Gray Matter** (front matter for Markdown files)
- **React Hook Form** (form handling)
- **Zod** (form validation)
- **emailJS** (form sender as email)
  
## Installing And Running Locally

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/1sma31L/Portfolio.git
   cd Portfolio
2. **Install the dependencies:**

   ```bash
   npm install #to install all the dependencies
   ```
3. **Run the development server:**

   ```bash
    npm run dev #to start the development server
    ```

4. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.**

 
## Contributing

You can contribute to this project by :

1. Suggesting improvements to the website or reporting bugs by creating an issue or a pull request.
2. Adding blog posts and mentioning yourself as the author, However, You must stick to the "FrontMatter" template provided in frontmatter.json, and put any images in "/public/images/" and referencing them just by "/images/..." when using them in the blog post, Don't forget to install [auto-front-matter](https://marketplace.visualstudio.com/items?itemName=condorhero.auto-front-matter) extension to get lastMod, date of creation and reading time (it's already configured in frontmatter.json just use it directly). 
3. Helping me translate the website to any of this languages (Arabic, French).






## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/1sma31L/Portfolio/blob/main/LICENSE) file for details
