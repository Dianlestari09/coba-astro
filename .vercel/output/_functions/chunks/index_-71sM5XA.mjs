import { c as createComponent } from './_astro_assets_CfUVQGhN.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_i2QXVHn3.mjs';
import { $ as $$AdminLayout } from './AdminLayout_DwlRyscw.mjs';
import { j as deleteDbTeam, k as getRawTeamsTable } from './dbService_DMZWjpnj.mjs';
import { $ as $$Icon } from './Icon_ClxU2TGL.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const isLoggedIn = Astro2.cookies.get("admin_session")?.value === "true";
  if (!isLoggedIn) {
    return Astro2.redirect("/admin/login");
  }
  let errorMessage = "";
  let successMessage = "";
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const action = formData.get("action");
      const idVal = formData.get("id");
      if (action === "delete" && idVal) {
        await deleteDbTeam(Number(idVal));
        successMessage = "Team member deleted successfully!";
      }
    } catch (error) {
      errorMessage = `Error deleting team member: ${error.message}`;
    }
  }
  const teams = await getRawTeamsTable();
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Manage Team" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <!-- Header Section --> <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"> <div> <h1 class="text-3xl font-bold text-gray-900">Manage Team</h1> <p class="text-gray-500 mt-1">Add, update, and remove expert cleaning team members.</p> </div> <a href="/admin/team/edit" class="btn bg-main border-main text-white hover:bg-main-hover rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:plus", "size": 18 })}
Add Team Member
</a> </div> <!-- Feedback Alerts --> ${successMessage && renderTemplate`<div class="alert alert-success text-sm py-3 px-4 rounded-lg flex items-center gap-2 mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:check-circle", "size": 18 })} <span>${successMessage}</span> </div>`} ${errorMessage && renderTemplate`<div class="alert alert-error text-sm py-3 px-4 rounded-lg flex items-center gap-2 mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:alert-circle", "size": 18 })} <span>${errorMessage}</span> </div>`} <!-- Table List --> <div class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"> <div class="overflow-x-auto w-full"> <table class="table w-full"> <thead> <tr class="bg-gray-50 text-gray-500 border-b border-gray-200"> <th class="py-4 pl-6 text-xs font-bold uppercase tracking-wider">Name / Role</th> <th class="py-4 text-xs font-bold uppercase tracking-wider">Rating</th> <th class="py-4 text-xs font-bold uppercase tracking-wider">Featured</th> <th class="py-4 pr-6 text-right text-xs font-bold uppercase tracking-wider">Actions</th> </tr> </thead> <tbody class="divide-y divide-gray-100"> ${teams.length === 0 ? renderTemplate`<tr> <td colspan="4" class="py-8 text-center text-gray-400"> <div class="flex flex-col items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:folder-open", "size": 32 })} <span>No team members found. Click "Add Team Member" to create one.</span> </div> </td> </tr>` : teams.map((people) => renderTemplate`<tr class="hover:bg-gray-50/50 transition-colors"> <!-- Thumbnail & Name --> <td class="py-4 pl-6 flex items-center gap-4"> <div class="avatar"> <div class="mask rounded-lg w-12 h-12 bg-gray-100"> ${people.thumbnail ? renderTemplate`<img${addAttribute(people.thumbnail, "src")}${addAttribute(people.title, "alt")} class="object-cover w-full h-full">` : renderTemplate`<div class="flex items-center justify-center h-full w-full bg-gray-100 text-gray-400"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:user", "size": 16 })} </div>`} </div> </div> <div> <div class="font-bold text-gray-800 line-clamp-1">${people.title}</div> <div class="text-xs text-gray-400 font-mono mt-0.5">/${people.slug}</div> </div> </td> <!-- Rating --> <td class="py-4"> <div class="flex gap-0.5 items-center text-yellow-500"> ${Array.from({ length: people.rating || 5 }).map(() => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "heroicons:star-solid", "size": 16 })}`)} <span class="text-xs text-gray-400 ml-1">(${people.rating || 5})</span> </div> </td> <!-- Featured --> <td class="py-4"> ${people.featured ? renderTemplate`<span class="badge badge-success text-white text-xs font-semibold rounded-md py-1.5">Featured</span>` : renderTemplate`<span class="badge badge-ghost text-gray-400 text-xs font-medium rounded-md py-1.5">No</span>`} </td> <!-- Actions --> <td class="py-4 pr-6 text-right"> <div class="flex justify-end items-center gap-2"> <a${addAttribute(`/admin/team/edit?id=${people.id}`, "href")} class="btn btn-outline border-gray-200 text-gray-600 hover:bg-main hover:text-white hover:border-main btn-xs rounded-lg flex items-center gap-1.5 h-8"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:pencil", "size": 12 })}
Edit
</a> <form method="POST" class="inline" onsubmit="return confirm('Are you sure you want to delete this team member?');"> <input type="hidden" name="action" value="delete"> <input type="hidden" name="id"${addAttribute(people.id, "value")}> <button type="submit" class="btn btn-outline border-red-200 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 btn-xs rounded-lg flex items-center gap-1.5 h-8 cursor-pointer"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:trash-2", "size": 12 })}
Delete
</button> </form> </div> </td> </tr>`)} </tbody> </table> </div> </div> </div> ` })}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/team/index.astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/team/index.astro";
const $$url = "/admin/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
