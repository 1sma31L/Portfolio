# Personal Website, Portfolio, and Blog
&nbsp;&nbsp;&nbsp;&nbsp;This repository contains the source code for my personal website, portfolio, and blog. That showcases my skills and the projects I've done. And my thoughts and experiences as blog posts.

## Description

 &nbsp;&nbsp;&nbsp;&nbsp;I built this website using `Next.js` for its slick routing SSR and SSG for statically generating blogs at runtime, `React` framework, and `Tailwind CSS`, a utility-first CSS framework. I am also using `TypeScript` to write the code for this website to capture errors at development phase with its great LSP. 
 
 &nbsp;&nbsp;&nbsp;&nbsp;I built this website from scratch, without using any templates or themes, so that I can learn more about web development and improve my skills and also wanted to make a 
 place for my thoughts for the world to see.

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
2. Adding blog posts (/src/content/posts) and mentioning yourself as the author, However, You must stick to the "FrontMatter" template provided in frontmatter.json, and put any images in "/public/images/" and referencing them just by "/images/..." when using them in the blog post, Don't forget to install [auto-front-matter](https://marketplace.visualstudio.com/items?itemName=condorhero.auto-front-matter) extension to get lastMod, date of creation and reading time (it's already configured in frontmatter.json just use it directly). 





## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/1sma31L/Portfolio/blob/main/LICENSE) file for details
