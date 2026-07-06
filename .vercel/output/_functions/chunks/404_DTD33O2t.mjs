import { c as createComponent } from './_astro_assets_BGYhSECt.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_D5yeMNjw.mjs';
import { $ as $$Main, a as $$Logo } from './Main_BU0KBZJW.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "Not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section flex-1 flex flex-col justify-center items-center"> <div class="container text-center grid gap-4"> <div class="text-center mx-auto"> ${renderComponent($$result2, "Logo", $$Logo, {})} </div> <h1 class="text-5xl lg:text-[10em] font-bold leading-none">404</h1> <p>Sorry, we couldn't find that page</p> <a href="/" class="btn btn-neutral mx-auto shadow-none rounded-none">GO TO HOME</a> </div> </section> ` })}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/404.astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
