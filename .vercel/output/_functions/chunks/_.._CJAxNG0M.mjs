import { c as createComponent } from './_astro_assets_CfUVQGhN.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead, u as unescapeHTML } from './entrypoint_i2QXVHn3.mjs';
import { $ as $$BlogPost } from './BlogPost_TQmGkxDL.mjs';
import { $ as $$Main } from './Main_DY2inJpw.mjs';
import { $ as $$NewsCardMain } from './NewsCardMain_DdcNoFEB.mjs';
import { m as getDbBlogBySlug, l as getDbBlogs, n as getDbBlogsExcept } from './dbService_DMZWjpnj.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const post = await getDbBlogBySlug(slug || "");
  let isCategory = false;
  let categoryBlogs = [];
  let categoryTitle = "";
  let relatedPosts = [];
  let url = "";
  let image = "";
  if (!post) {
    const blogs = await getDbBlogs();
    categoryBlogs = blogs.filter((b) => b.data.category.slug === slug);
    if (categoryBlogs.length > 0) {
      isCategory = true;
      categoryTitle = categoryBlogs[0].data.category.title;
    } else {
      return Astro2.redirect("/404");
    }
  } else {
    relatedPosts = await getDbBlogsExcept(post.id, 3);
    const site = Astro2.site?.toString() ?? "";
    url = `${site}blog/${post.id}/`;
    image = post.data.thumbnail || "";
  }
  return renderTemplate`${isCategory ? renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": categoryTitle }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<section class="section"><div class="container"><!-- Breadcrumbs --><div class="breadcrumbs text-sm mb-6"><ul class="flex! flex-wrap"><li><a href="/">Home</a></li><li><a href="/blog">Blog</a></li><li>Category: ${categoryTitle}</li></ul></div><!-- Posts grid --><ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">${categoryBlogs.map((item) => renderTemplate`<li>${renderComponent($$result2, "NewsCard", $$NewsCardMain, { ...item })}</li>`)}</ul></div></section>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${post && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.data.title,
    "description": post.data.description,
    "image": image,
    "datePublished": post.data.pubDate.toISOString(),
    ...post.data.updatedDate ? { "dateModified": post.data.updatedDate.toISOString() } : {},
    "author": {
      "@type": "Person",
      "name": post.data.author?.name ?? "ProCleaning"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ProCleaning"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  })))}${post && renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { ...post.data, "relatedPosts": relatedPosts, "breadcrumbParent": "Blog", "title": post.data.title, "description": post.data.description, "image": post.data.thumbnail }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${unescapeHTML(post.body)}` })}` })}`}` })}`}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/blog/[...slug].astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
