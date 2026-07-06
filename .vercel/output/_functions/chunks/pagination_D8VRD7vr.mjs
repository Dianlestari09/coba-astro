import { c as createComponent } from './_astro_assets_B11Dm5az.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, r as renderComponent, b as renderTemplate } from './entrypoint_mLsl_CHG.mjs';
import { $ as $$Icon } from './Icon_C9kaGRW1.mjs';

const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Pagination;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-20 flex items-center gap-4"> ${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} class="btn btn-outline"> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:arrow-left", "size": 18 })}
Previous
</a>`} <span>
Page ${page.currentPage} of ${page.lastPage} </span> ${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} class="btn btn-outline">
Next ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:arrow-right", "size": 18 })} </a>`} </div>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/pagination.astro", void 0);

export { $$Pagination as $ };
