import { c as createComponent, $ as $$Image } from './_astro_assets_BGYhSECt.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, r as renderComponent, b as renderTemplate } from './entrypoint_D5yeMNjw.mjs';
import { $ as $$Icon } from './Icon_C6xwaxup.mjs';

const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TeamCard;
  const { id, data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group"> <a${addAttribute(`/team/${id}`, "href")}> ${data.thumbnail && renderTemplate`<div class="bg-[radial-gradient(circle_at_center,transparent,rgba(54,184,100,0.4))] bg-cover rounded-xl overflow-hidden w-full mb-4"> ${renderComponent($$result, "Image", $$Image, { "src": data.thumbnail, "alt": data.title, "width": "370", "height": "300", "format": "webp", "quality": 45, "class": "w-full h-auto object-cover" })} </div>`} <h3 class="font-semibold text-xl sm:text-2xl group-hover:underline"> ${data.title} </h3> <div class="flex gap-1 items-center text-yellow-500 my-2"> ${Array.from({ length: data.rating }).map((star) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:star-solid", "size": 24 })}`)} </div> <p class="mt-4 text-sm sm:text-base">${data.description}</p> </a> <div class="flex flex-wrap justify-start gap-x-6 gap-y-2 items-center mt-4"> <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" title="whatsapp" class="hover:-rotate-12"> ${renderComponent($$result, "Icon", $$Icon, { "name": "simple-icons:whatsapp", "size": 20 })} </a> <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" title="telegram" class="hover:-rotate-12"> ${renderComponent($$result, "Icon", $$Icon, { "name": "simple-icons:telegram", "size": 20 })} </a> <a href="viber://chat?number=%2B1234567890" target="_blank" rel="noopener noreferrer" title="viber" class="hover:-rotate-12"> ${renderComponent($$result, "Icon", $$Icon, { "name": "simple-icons:viber", "size": 20 })} </a> <a href="tel:+1234567890" title="phone" class="hover:-rotate-12"> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:phone", "size": 20 })} </a> </div> </article>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/card/TeamCard.astro", void 0);

export { $$TeamCard as $ };
