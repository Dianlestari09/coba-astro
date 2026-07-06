import { c as createComponent, $ as $$Image } from './_astro_assets_BGYhSECt.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, b as renderTemplate, c as addAttribute, s as spreadAttributes, e as renderSlot, d as renderHead } from './entrypoint_D5yeMNjw.mjs';
import { $ as $$Icon, a as $$BaseHead } from './Icon_C6xwaxup.mjs';
import { N as NAV_MENU } from './consts_B7c7UrsP.mjs';
import 'clsx';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Logo;
  const { mode = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="logo"> ${renderComponent($$result, "Image", $$Image, { "src": mode == "light" ? `/img/logo.svg` : `/img/logo-w.svg`, "alt": "logo", "width": "204", "height": "50", "fetchpriority": "high", "loading": "eager", "class": "w-auto h-auto dark:hidden" })} ${renderComponent($$result, "Image", $$Image, { "src": "/img/logo-w.svg", "alt": "logo", "width": "204", "height": "50", "loading": "eager", "class": "hidden dark:block" })} </a>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/Logo.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="footer bg-dark text-white gap-0 block"> <div class="footer-top w-full py-20"> <div class="container"> <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10"> <div> ${renderComponent($$result, "Logo", $$Logo, { "mode": "dark" })} <p class="mt-4">
Stay updated with our latest cleaning tips, service updates, and
            helpful articles on maintaining a spotless home.
</p> </div> <div class="grid grid-cols-2 gap-10"> <nav class="grid gap-3"> <h3 class="text-xl font-semibold">Company</h3> <a href="#" class="hover:underline hover:text-main">About Us</a> <a href="/service" class="hover:underline hover:text-main">Services</a> <a href="/team" class="hover:underline hover:text-main">Our Team</a> </nav> <nav class="grid gap-3"> <h3 class="text-xl font-semibold">Know More</h3> <a href="#" class="hover:underline hover:text-main">Support</a> <a href="/policy" class="hover:underline hover:text-main">Privacy Policy</a> <a href="/terms" class="hover:underline hover:text-main">Terms & conditions</a> </nav> </div> <div class="grid gap-3"> <h3 class="text-xl font-semibold">Newsletter</h3> <form action="/" method="GET" class="mt-3 grid gap-4 grid-cols-1 sm:grid-cols-[2fr_1fr] lg:grid-cols-1"> <input type="text" placeholder="Email Goes here" class="input text-black dark:text-white w-full" name="subcscribe_email" id="subscribe-email"> <button class="btn bg-main border-main text-white rounded-lg hover:bg-green-600 lg:mr-auto shadow-none" type="submit">Send</button> </form> </div> </div> </div> </div> <div class="footer-btm w-full"> <div class="container text-center border-t border-white py-10">
&copy; ${today.getFullYear()} “Procleaning” All Rights Received
</div> </div> </footer>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/Footer.astro", void 0);

const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/HeaderLink.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hidden lg:block mx-auto"> <ul class="menu menu-horizontal gap-x-4"> <!-- Navbar menu content here --> ${NAV_MENU.map((item) => renderTemplate`<li> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": item.url, "class": "hover:bg-white" }, { "default": ($$result2) => renderTemplate`${item.title}` })} </li>`)} </ul> </div>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/Navbar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  Astro2.url.pathname === "/";
  return renderTemplate`${maybeRenderHead()}<header class="header"> <div class="navbar w-full"> <div class="container grid grid-cols-[204px_1fr] lg:grid-cols-[204px_1fr_auto] items-center"> ${renderComponent($$result, "Logo", $$Logo, {})} ${renderComponent($$result, "Navabar", $$Navbar, {})} <div class="flex gap-3 ml-auto"> <a href="#" class="hidden sm:flex btn bg-main border-main text-white rounded-lg hover:bg-green-600">Get a quote</a> <div class="flex-none lg:hidden"> <label for="my-drawer-2" aria-label="open sidebar" class="btn btn-square btn-ghost ml-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:menu" })} </label> </div> </div> </div> </div> </header>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/Header.astro", void 0);

const $$Drawer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="drawer-side"> <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"><span class="sr-only">Open menu</span> </label> <div class="menu bg-dark text-white min-h-full w-80 p-4"> ${renderComponent($$result, "Logo", $$Logo, { "mode": "dark" })} <ul class="mt-4"> ${NAV_MENU.map((item) => renderTemplate`<li> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": item.url, "class": "hover:bg-black" }, { "default": ($$result2) => renderTemplate`${item.title}` })} </li>`)} </ul> <div class="flex flex-col gap-2 items-center w-full mt-auto"> <a href="#" class="btn bg-main border-main text-white rounded-lg hover:bg-green-600 hover:text-white! w-full">Get a quote</a> </div> </div> </div>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/components/Drawer.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Main;
  const { title, description, image } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body> <div class="drawer min-h-screen"> <input id="my-drawer-2" type="checkbox" class="drawer-toggle" title="Toggle navigation menu"> <label for="my-drawer-2" class="sr-only"> Toggle navigation menu </label> <div class="drawer-content flex flex-col min-h-screen"> <main class="min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${renderComponent($$result, "Drawer", $$Drawer, {})} </div> </body></html>`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/layouts/Main.astro", void 0);

export { $$Main as $, $$Logo as a };
