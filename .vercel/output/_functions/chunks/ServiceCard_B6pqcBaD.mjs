import { c as createComponent, $ as $$Image } from './_astro_assets_BGYhSECt.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, r as renderComponent, b as renderTemplate } from './entrypoint_D5yeMNjw.mjs';
import { $ as $$Icon } from './Icon_C6xwaxup.mjs';

const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { data, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class=""> <a${addAttribute(`/service/${id}`, "href")}> ${data.thumbnail && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": data.thumbnail, "alt": data.title, "width": "400", "height": "200", "format": "webp", "quality": 45, "class": "w-full h-auto aspect-2/1 rounded-xl object-cover mb-4" })}`} <h3 class="font-semibold text-xl sm:text-2xl my-4">${data.title}</h3> <p class="mb-4 mt-4 text-sm sm:text-base">${data.description}</p> <button class="btn btn-outline hover:bg-main hover:text-white hover:border-main rounded-lg">
Book Now
${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:arrow-up-right", "size": 16 })} </button> </a> </article>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/card/ServiceCard.astro", void 0);

export { $$ServiceCard as $ };
