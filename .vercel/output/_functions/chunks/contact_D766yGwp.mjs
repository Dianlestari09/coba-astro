import { c as createComponent } from './_astro_assets_BGYhSECt.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate } from './entrypoint_D5yeMNjw.mjs';
import { $ as $$Main } from './Main_BU0KBZJW.mjs';
import { $ as $$Contacts } from './Contacts_CwACs217.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "Contact us" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Contacts", $$Contacts, {})} ` })}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/contact.astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
