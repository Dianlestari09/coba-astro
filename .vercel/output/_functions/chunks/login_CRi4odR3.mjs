import { c as createComponent } from './_astro_assets_CfUVQGhN.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_i2QXVHn3.mjs';
import { $ as $$AdminLayout } from './AdminLayout_DwlRyscw.mjs';
import { $ as $$Icon } from './Icon_ClxU2TGL.mjs';

const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
  let errorMessage = "";
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const action = formData.get("action");
      if (action === "logout") {
        Astro2.cookies.delete("admin_session", { path: "/admin" });
        Astro2.cookies.delete("admin_session", { path: "/" });
        return Astro2.redirect("/admin/login");
      }
      const username = formData.get("username")?.toString();
      const password = formData.get("password")?.toString();
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        Astro2.cookies.set("admin_session", "true", {
          path: "/admin",
          httpOnly: true,
          maxAge: 60 * 60 * 24
          // 1 day
        });
        return Astro2.redirect("/admin");
      } else {
        errorMessage = "Invalid username or password";
      }
    } catch (error) {
      errorMessage = `An error occurred: ${error.message}`;
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Login" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-md w-full space-y-8 bg-white p-8 border border-gray-200 rounded-2xl shadow-sm"> <div class="text-center"> <div class="mx-auto h-16 w-16 bg-main/10 rounded-2xl flex items-center justify-center text-main mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:lock", "class": "h-8 w-8" })} </div> <h2 class="text-3xl font-extrabold text-gray-900">
Admin Login
</h2> <p class="mt-2 text-sm text-gray-600">
Enter credentials to manage ProCleaning content
</p> </div> ${errorMessage && renderTemplate`<div class="alert alert-error text-sm py-3 px-4 rounded-lg flex items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:alert-circle", "size": 18 })} <span>${errorMessage}</span> </div>`} <form class="mt-8 space-y-6" method="POST"> <input type="hidden" name="remember" value="true"> <div class="rounded-md shadow-sm space-y-4"> <div> <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label> <input id="username" name="username" type="text" required class="appearance-none rounded-xl relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm" placeholder="Username"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label> <input id="password" name="password" type="password" required class="appearance-none rounded-xl relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm" placeholder="Password"> </div> </div> <div> <button type="submit" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-main hover:bg-main-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main transition-colors cursor-pointer">
Sign in
</button> </div> </form> </div> </div> ` })}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/login.astro", void 0);
const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
