import { c as createComponent } from './_astro_assets_CfUVQGhN.mjs';
import 'piccolore';
import { b as renderTemplate, r as renderComponent, u as unescapeHTML, m as maybeRenderHead } from './entrypoint_i2QXVHn3.mjs';
import { l as getDbBlogs } from './dbService_DMZWjpnj.mjs';
import { $ as $$Main } from './Main_DY2inJpw.mjs';
import { $ as $$Pagination } from './pagination_DtFQaUgf.mjs';
import { $ as $$NewsCardMain } from './NewsCardMain_DdcNoFEB.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getDbBlogs();
  const pageSize = 6;
  const url = new URL(Astro2.request.url);
  const currentPage = parseInt(url.searchParams.get("page") || "1");
  const lastPage = Math.max(1, Math.ceil(allPosts.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const data = allPosts.slice(startIndex, endIndex);
  const page = {
    data,
    currentPage,
    lastPage,
    size: pageSize,
    url: {
      prev: currentPage > 1 ? `/blog?page=${currentPage - 1}` : null,
      next: currentPage < lastPage ? `/blog?page=${currentPage + 1}` : null
    }
  };
  const site = Astro2.site?.toString() ?? "";
  const baseUrl = `${site}blog/`;
  const itemList = data.map((post, index) => {
    return {
      "@type": "ListItem",
      position: index + 1 + (currentPage - 1) * pageSize,
      url: `${site}blog/${post.id}/`
    };
  });
  return renderTemplate(_a || (_a = __template(['<!-- ✅ SEO: CollectionPage + ItemList --><script type="application/ld+json">', "<\/script> ", ""])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog",
    url: baseUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: itemList
    }
  })), renderComponent($$result, "Layout", $$Main, { "title": "Blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <!-- Breadcrumbs --> <div class="breadcrumbs text-sm mb-6"> <ul class="flex! flex-wrap"> <li><a href="/">Home</a></li> <li>Blog</li> </ul> </div> <!-- Posts grid --> <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch"> ${data.map((post) => renderTemplate`<li> ${renderComponent($$result2, "NewsCard", $$NewsCardMain, { ...post })} </li>`)} </ul> ${page.lastPage != 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })}`} </div> </section> ` }));
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/blog/index.astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
