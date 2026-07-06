import { c as createComponent, $ as $$Image } from './_astro_assets_CfUVQGhN.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate, r as renderComponent, e as renderSlot, F as Fragment } from './entrypoint_i2QXVHn3.mjs';
import 'clsx';
import { $ as $$Icon } from './Icon_ClxU2TGL.mjs';
import { f as formatFrontmatterDate } from './date_C3ZKKFC4.mjs';
import { $ as $$Main } from './Main_DY2inJpw.mjs';

const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/FormattedDate.astro", void 0);

const $$NewsCardRelated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NewsCardRelated;
  const { id, data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group h-full"> <a${addAttribute(`/blog/${id}`, "href")} class="flex flex-col gap-3 h-full border border-gray-200 overflow-hidden rounded-xl"> <div class="text-center w-full flex-1 flex flex-col justify-between items-center p-4"> <p class="flex flex-wrap gap-2 gap-x-4 items-center uppercase justify-center text-xs"> <span class="btn btn-outline px-2 py-1 h-auto text-[10px] rounded-md">${data.category.title}</span> <span>${data.author.name}</span> <time${addAttribute(data.pubDate.toISOString(), "datetime")}> ${formatFrontmatterDate(data.pubDate)} </time> </p> <h3 class="font-semibold text-xl sm:text-2xl mb-4 mt-0! group-hover:underline"> ${data.title} </h3> <p class="mb-8 mt-0! text-sm sm:text-base">${data.description}</p> <button class="btn bg-main border-main text-white rounded-lg hover:bg-green-600 w-full mt-auto">
Read more
${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:arrow-up-right", "size": 16 })} </button> </div> </a> </article>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/card/NewsCardRelated.astro", void 0);

const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    title,
    description,
    pubDate,
    updatedDate,
    thumbnail,
    author,
    category,
    relatedPosts = [],
    socials = false,
    breadcrumbParent = "Blog"
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": title, "description": description, "image": thumbnail }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container pt-0 pb-10 lg:py-20"> <article class="post"> <div class="breadcrumbs text-sm"> <ul class="flex! flex-wrap"> <li><a href="/">Home</a></li> <li><a href="./">${breadcrumbParent}</a></li> <li>${title}</li> </ul> </div> <div class="title text-center my-5 sm:my-10"> <div class="flex flex-wrap gap-x-6 gap-y-2 justify-center items-center"> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": pubDate })} ${updatedDate && renderTemplate`<div class="last-updated-on">
Last updated on ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": updatedDate })} </div>`} ${author && `By ${author.name}`} ${category && renderTemplate`<a${addAttribute(`/blog/${category.slug}`, "href")} class="bg-main text-white rounded py-1 px-2"> ${category.title} </a>`} </div> <h1>${title}</h1> </div> <div class="hero-image"> ${thumbnail && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "width": 1020, "height": 510, "src": thumbnail, "alt": "", "class": "w-full h-auto aspect-2/1 object-cover rounded-lg", "format": "webp", "quality": 45, "fetchpriority": "high", "loading": "eager" })}`} </div> <div class="prose"> <div class="max-w-5xl mx-auto pt-5 lg:pt-10"> ${renderSlot($$result2, $$slots["default"])} <hr class="mt-5 lg:mt-20 opacity-10"> <div class="flex justify-between flex-wrap items-center gap-4 pt-5 lg:pt-10"> ${socials && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <p class="font-semibold w-full sm:w-auto">Contacts:</p> <div class="flex flex-wrap justify-start gap-x-6 gap-y-2 items-center mr-auto"> <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" title="whatsapp" class="hover:-rotate-12"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "simple-icons:whatsapp", "size": 20 })} </a> <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" title="telegram" class="hover:-rotate-12"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "simple-icons:telegram", "size": 20 })} </a> <a href="viber://chat?number=%2B1234567890" target="_blank" rel="noopener noreferrer" title="viber" class="hover:-rotate-12"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "simple-icons:viber", "size": 20 })} </a> <a href="tel:+1234567890" title="phone" class="hover:-rotate-12"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "heroicons:phone", "size": 20 })} </a> </div> ` })}`} <a href="./" class="btn btn-outline"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-left", "size": 18 })} Go Back</a> </div> </div> </div> ${relatedPosts.length > 0 && renderTemplate`<section class="mt-10"> <h2>Latest Post</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"> ${relatedPosts.map((item) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCardRelated, { ...item })}`)} </div> </section>`} </article> </div> ` })}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
