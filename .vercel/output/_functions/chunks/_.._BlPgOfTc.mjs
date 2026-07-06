import { c as createComponent } from './_astro_assets_CfUVQGhN.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML } from './entrypoint_i2QXVHn3.mjs';
import { $ as $$BlogPost } from './BlogPost_TQmGkxDL.mjs';
import { p as getDbServiceBySlug } from './dbService_DMZWjpnj.mjs';

const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const post = await getDbServiceBySlug(slug || "");
  if (!post) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data, "breadcrumbParent": "Service", "title": post.data.title, "description": post.data.description, "image": post.data.thumbnail }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(post.body)}` })} ` })}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/service/[...slug].astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/service/[...slug].astro";
const $$url = "/service/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
