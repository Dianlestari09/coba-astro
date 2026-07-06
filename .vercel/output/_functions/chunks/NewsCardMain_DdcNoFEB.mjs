import { c as createComponent, $ as $$Image } from './_astro_assets_CfUVQGhN.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, r as renderComponent, b as renderTemplate } from './entrypoint_i2QXVHn3.mjs';
import { $ as $$Icon } from './Icon_ClxU2TGL.mjs';
import { f as formatFrontmatterDate } from './date_C3ZKKFC4.mjs';

const $$NewsCardMain = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NewsCardMain;
  const { id, data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group h-full flex flex-col gap-3 border border-gray-200 overflow-hidden rounded-xl"> ${data.thumbnail && renderTemplate`<div class="grid"> <a${addAttribute(`/blog/${id}`, "href")} class="[grid-area:1/1/2/2]"> ${renderComponent($$result, "Image", $$Image, { "src": data.thumbnail, "alt": data.title, "width": "500", "height": "250", "format": "webp", "quality": 45, "class": "aspect-2/1 w-full h-auto object-cover " })} </a> <a${addAttribute(`/blog/${data.category.slug}`, "href")} class="btn bg-main border-main shadow-none text-white px-3 py-1 h-auto text-xs rounded-md [grid-area:1/1/2/2] mb-auto mr-auto mt-2 ml-2"> ${data.category.title} </a> </div>`} <div class="text-center w-full flex-1 flex flex-col justify-between items-center p-4"> <p class="flex flex-wrap gap-2 gap-x-4 items-center uppercase justify-center text-sm mb-4"> <a${addAttribute(`/authors/${data.author.slug}`, "href")} class="hover:underline">${data.author.name}</a> <time${addAttribute(data.pubDate.toISOString(), "datetime")}> ${formatFrontmatterDate(data.pubDate)} </time> </p> <a${addAttribute(`/blog/${id}`, "href")} class="flex-1 flex flex-col justify-between w-full"> <h3 class="font-semibold text-xl sm:text-2xl group-hover:underline"> ${data.title} </h3> <p class="mb-6 text-sm sm:text-base">${data.description}</p> <button class="btn bg-main border-main text-white rounded-lg hover:bg-green-600 w-full mt-auto">
Read more
${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:arrow-up-right", "size": 16 })} </button> </a> </div> </article>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/card/NewsCardMain.astro", void 0);

export { $$NewsCardMain as $ };
