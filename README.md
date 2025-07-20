# UX Casefolio Template

A responsive (but barebones) starting template for case study heavy portfolios, built with [Astro](https://astro.build) and [TailwindCSS](https://tailwindcss.com). 

I guess you could also use it as a blog with some tweaks! 😅 

- [Template Demo](https://ux-casefolio-template-demo.netlify.app/) 🚀
- [An actual portfolio extended from this](https://otsha.net) ✨

## Running Locally

0. You should have Node.js & npm installed.

1. Select "Use this template" to create yourself a copy of this repository

2. Clone the newly created repository and navigate to its root

3. Install the required dependencies

```bash
npm install
```

4. Create a new file named `.env` and add environment variables for the site's title and copyright information

```env
SITE_TITLE=My Cool Portfolio
COPYRIGHT_NAME=My Name
COPYRIGHT_YEAR=2025
```

5. Run the application in development mode

```bash
npm run dev
```

## Editing Portfolio Contents

### Title & Footer

You can edit the site title, as well as the copyright information by updating the `.env` file.

### Custom Favicon, Hero and Profile Images

Place these in the `public/` directory at the root of the repository.

- The `icon` should be a `png` file, and it's recommended to keep small in size. If you'd like to use another image type / filename, you can edit the site's `<head>` in `src/layouts/DefaultLayout.astro`.
- The `hero` image should be a `jpg` file. It is displayed on the index page and takes up the entire screen by default. You can change the file path in `src/components/Hero.astro` if you'd like to use, say, `webp` (which I would generally recommend due to smaller file size).
- The `profile` image should be a `jpg` file as well. It is displayed on the index page in the "About" section. You can change the file path in `src/content/about.md`.

### About Section

The about section contents can be edited in `src/content/about.md`. Here's where you are also able to change the path of your profile photo, if you'd like.

### Editing Cases

The cases are an [Astro content collection](https://docs.astro.build/en/guides/content-collections/) located in `src/content/cases`. The configuration can be found in `src/content/content.config.js` and the rendering component in `src/pages/cases/[slug].astro`.

Editing the case files is simple. You can use Markdown to format your cases. Each `.md` file in the `src/content/cases` directory corresponds to a case. All cases in the directory are automatically displayed on the index page under the "Cases" section (using `src/components/CaseSection.astro`).

The frontmatter of each case should have a title and a path to a cover image that will be displayed in the case section on the index page and as a hero image on the case page. The cover image should be placed in the `public/` directory at the root of the repository, but further directory structure is up to you.

e.g.
```md
---

title: My Design Case Study
coverImage: /img/cases/case-1-hero.png

---

# My Design Case Study

Write your content here!

You can also use lists:

- Item 1
- Item 2
- Item 3

...and images in the `public/` directory:

![](/img/cases/case-1-design-demo.png)

Markdown files can also utilize HTML and Tailwind classes if you need further customization!

<p class="text-red-600">Like this!</p>
```

### External Links

You can add external links to the navigation bar by updating `src/components/Nav.astro`. There's already an example of an external link. You can simply use the `Navlink` component.

### Customization

The application is mostly using [TailwindCSS](https://tailwindcss.com) to style each component individually. Additionally, some global styling (font, root element styling, text formatting) is provided in `src/global.css`. Feel free to customize in your preferred way. 

> Note that you can also use HTML and tailwind classes within your case `.md` files, if you need to style something specific!

## Deployment

If you use Cloudflare Pages, Netlify, Heroku or Vercel you should be able to simply connect the repo and deploy. See the Astro [docs](https://docs.astro.build/en/guides/deploy/) for more info.

For custom deployments, the build command is `npm run build` / `astro build`. The built static site is then located in the `dist/` folder.

> **The build command does not optimize any images for web.** Make sure to use optimized images to reduce your bandwidth. I'd generally recommend using `webp` images and pushing the file size as small as possible without decimating the quality. If your cases contain a lot of images, insert them as HTML and make use of [lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading#images_and_iframes)!
