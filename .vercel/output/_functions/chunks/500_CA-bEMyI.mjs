import { c as createComponent } from './_astro_assets_BGYhSECt.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_D5yeMNjw.mjs';
import { $ as $$Main, a as $$Logo } from './Main_BU0KBZJW.mjs';

const $$500 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$500;
  const { error } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "500 Error" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section flex-1 flex flex-col justify-center items-center"> <div class="container text-center grid gap-4"> <div class="text-center mx-auto"> ${renderComponent($$result2, "Logo", $$Logo, {})} </div> <h1 class="text-5xl lg:text-9xl font-bold">500</h1> <p> ${error instanceof Error ? error.message : "Unknown error"} </p> <a href="/" class="btn btn-neutral mx-auto shadow-none rounded-none">GO TO HOME</a> </div> </section> ` })}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/500.astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$500,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
