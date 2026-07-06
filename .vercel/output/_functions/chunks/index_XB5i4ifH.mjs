import { c as createComponent } from './_astro_assets_BGYhSECt.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_D5yeMNjw.mjs';
import { o as getDbServices } from './dbService_Bh0_QA6x.mjs';
import { $ as $$Main } from './Main_BU0KBZJW.mjs';
import { $ as $$Pagination } from './pagination_B1oHukE7.mjs';
import { $ as $$ServiceCard } from './ServiceCard_B6pqcBaD.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const allServices = await getDbServices();
  const pageSize = 6;
  const url = new URL(Astro2.request.url);
  const currentPage = parseInt(url.searchParams.get("page") || "1");
  const lastPage = Math.max(1, Math.ceil(allServices.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const data = allServices.slice(startIndex, endIndex);
  const page = {
    data,
    currentPage,
    lastPage,
    url: {
      prev: currentPage > 1 ? `/service?page=${currentPage - 1}` : null,
      next: currentPage < lastPage ? `/service?page=${currentPage + 1}` : null
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "Service" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="breadcrumbs text-sm mb-6"> <ul class="flex! flex-wrap"> <li><a href="/">Home</a></li> <li>Service</li> </ul> </div> <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch"> ${data.map((post) => renderTemplate`<li> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { ...post })} </li>`)} </ul> ${page.lastPage != 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })}`} </div> </section> ` })}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/service/index.astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/service/index.astro";
const $$url = "/service";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
