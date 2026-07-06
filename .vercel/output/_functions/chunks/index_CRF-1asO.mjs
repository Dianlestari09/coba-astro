import { c as createComponent } from './_astro_assets_CfUVQGhN.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_i2QXVHn3.mjs';
import { $ as $$AdminLayout } from './AdminLayout_DwlRyscw.mjs';
import { c as checkConnection, s as supabase } from './db_DwGLUwly.mjs';
import { $ as $$Icon } from './Icon_ClxU2TGL.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const isLoggedIn = Astro2.cookies.get("admin_session")?.value === "true";
  if (!isLoggedIn) {
    return Astro2.redirect("/admin/login");
  }
  const isDbConnected = await checkConnection();
  let blogCount = 0;
  let serviceCount = 0;
  let teamCount = 0;
  if (isDbConnected) {
    try {
      const { data: bData } = await supabase.from("blogs").select("id");
      const { data: sData } = await supabase.from("services").select("id");
      const { data: tData } = await supabase.from("teams").select("id");
      blogCount = bData?.length || 0;
      serviceCount = sData?.length || 0;
      teamCount = tData?.length || 0;
    } catch (e) {
      console.error("Error fetching stats:", e);
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <!-- Welcome Header --> <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10"> <div> <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard Overview</h1> <p class="text-gray-500 mt-1">Welcome back, Admin! Here is the latest status of your website content.</p> </div> <!-- Database Connection Status Badge --> <div class="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-gray-200 shadow-sm"> <div${addAttribute(`h-3 w-3 rounded-full ${isDbConnected ? "bg-green-500 animate-pulse" : "bg-red-500"}`, "class")}></div> <span class="text-sm font-semibold text-gray-700">
Database: ${isDbConnected ? "Connected (Supabase)" : "Disconnected"} </span> </div> </div> <!-- Quick Stats Grid --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"> <!-- Blogs Stats Card --> <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"> <div class="flex justify-between items-start mb-4"> <div class="p-3 bg-blue-50 text-blue-600 rounded-xl"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:newspaper", "size": 24 })} </div> <span class="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">Blogs</span> </div> <div> <span class="block text-4xl font-extrabold text-gray-900 mb-1">${blogCount}</span> <span class="text-sm text-gray-500">Total blog posts published</span> </div> <div class="border-t border-gray-100 mt-6 pt-4"> <a href="/admin/blog" class="text-sm font-semibold text-main hover:text-main-hover inline-flex items-center gap-1">
Manage blogs
${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-right", "size": 16 })} </a> </div> </div> <!-- Services Stats Card --> <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"> <div class="flex justify-between items-start mb-4"> <div class="p-3 bg-emerald-50 text-emerald-600 rounded-xl"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:sparkles", "size": 24 })} </div> <span class="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">Services</span> </div> <div> <span class="block text-4xl font-extrabold text-gray-900 mb-1">${serviceCount}</span> <span class="text-sm text-gray-500">Active cleaning services offered</span> </div> <div class="border-t border-gray-100 mt-6 pt-4"> <a href="/admin/service" class="text-sm font-semibold text-main hover:text-main-hover inline-flex items-center gap-1">
Manage services
${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-right", "size": 16 })} </a> </div> </div> <!-- Team Members Stats Card --> <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"> <div class="flex justify-between items-start mb-4"> <div class="p-3 bg-amber-50 text-amber-600 rounded-xl"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:users", "size": 24 })} </div> <span class="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">Team</span> </div> <div> <span class="block text-4xl font-extrabold text-gray-900 mb-1">${teamCount}</span> <span class="text-sm text-gray-500">Registered cleaning team members</span> </div> <div class="border-t border-gray-100 mt-6 pt-4"> <a href="/admin/team" class="text-sm font-semibold text-main hover:text-main-hover inline-flex items-center gap-1">
Manage team
${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-right", "size": 16 })} </a> </div> </div> </div> <!-- Quick Action Section --> <div class="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm mb-10"> <h2 class="text-xl font-bold text-gray-900 mb-2">Quick Actions</h2> <p class="text-gray-500 text-sm mb-6">Instantly create new entries across different categories.</p> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4"> <a href="/admin/blog/edit" class="btn btn-outline border-gray-200 hover:border-main hover:bg-main/5 hover:text-main rounded-xl flex items-center justify-center gap-2 py-4 h-auto normal-case font-semibold cursor-pointer"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:plus-circle", "class": "text-main", "size": 20 })} <span>Write Blog Post</span> </a> <a href="/admin/service/edit" class="btn btn-outline border-gray-200 hover:border-main hover:bg-main/5 hover:text-main rounded-xl flex items-center justify-center gap-2 py-4 h-auto normal-case font-semibold cursor-pointer"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:plus-circle", "class": "text-main", "size": 20 })} <span>Add Service</span> </a> <a href="/admin/team/edit" class="btn btn-outline border-gray-200 hover:border-main hover:bg-main/5 hover:text-main rounded-xl flex items-center justify-center gap-2 py-4 h-auto normal-case font-semibold cursor-pointer"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:plus-circle", "class": "text-main", "size": 20 })} <span>Add Team Member</span> </a> </div> </div> </div> ` })}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/index.astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
