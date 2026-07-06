import { c as createComponent } from './_astro_assets_BGYhSECt.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_D5yeMNjw.mjs';
import { $ as $$Main } from './Main_BU0KBZJW.mjs';
import { $ as $$NewsCardMain } from './NewsCardMain_ZWMlh4FY.mjs';
import { l as getDbBlogs } from './dbService_Bh0_QA6x.mjs';

const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const blogs = await getDbBlogs();
  const authorBlogs = blogs.filter((b) => b.data.author.slug === slug);
  if (authorBlogs.length === 0) {
    return Astro2.redirect("/404");
  }
  const authorName = authorBlogs[0].data.author.name;
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": `Posts by ${authorName}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <!-- Breadcrumbs --> <div class="breadcrumbs text-sm mb-6"> <ul class="flex! flex-wrap"> <li><a href="/">Home</a></li> <li><a href="/blog">Blog</a></li> <li>Author: ${authorName}</li> </ul> </div> <!-- Posts grid --> <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch"> ${authorBlogs.map((post) => renderTemplate`<li> ${renderComponent($$result2, "NewsCard", $$NewsCardMain, { ...post })} </li>`)} </ul> </div> </section> ` })}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/authors/[...slug].astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/authors/[...slug].astro";
const $$url = "/authors/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
