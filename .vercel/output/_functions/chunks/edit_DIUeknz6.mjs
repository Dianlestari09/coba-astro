import { c as createComponent } from './_astro_assets_BGYhSECt.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_D5yeMNjw.mjs';
import { r as renderScript } from './script_Cd2HGhbl.mjs';
import { $ as $$AdminLayout } from './AdminLayout_FUdI7iL0.mjs';
import { h as getRawTeamById, i as saveDbTeam } from './dbService_Bh0_QA6x.mjs';
import { $ as $$Icon } from './Icon_C6xwaxup.mjs';

const prerender = false;
const $$Edit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Edit;
  const isLoggedIn = Astro2.cookies.get("admin_session")?.value === "true";
  if (!isLoggedIn) {
    return Astro2.redirect("/admin/login");
  }
  let errorMessage = "";
  const idVal = Astro2.url.searchParams.get("id");
  let isEditMode = false;
  let teamData = {
    title: "",
    slug: "",
    description: "",
    body: "",
    thumbnail: "",
    featured: false,
    rating: 5
  };
  if (idVal) {
    isEditMode = true;
    const existingTeam = await getRawTeamById(Number(idVal));
    if (existingTeam) {
      teamData = {
        ...existingTeam,
        featured: Boolean(existingTeam.featured),
        rating: Number(existingTeam.rating || 5)
      };
    } else {
      return Astro2.redirect("/admin/team");
    }
  }
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const title = formData.get("title")?.toString() || "";
      const slug = formData.get("slug")?.toString() || "";
      const description = formData.get("description")?.toString() || "";
      const body = formData.get("body")?.toString() || "";
      const featured = formData.get("featured") === "on";
      const rating = parseInt(formData.get("rating")?.toString() || "5");
      const thumbnail = formData.get("thumbnail")?.toString() || "";
      if (!title || !slug || !description || !body) {
        throw new Error("Name, Slug, Description, and Content fields are required.");
      }
      const thumbnailPath = thumbnail || teamData.thumbnail;
      const payload = {
        slug,
        title,
        description,
        body,
        thumbnail: thumbnailPath,
        featured,
        rating
      };
      if (isEditMode) {
        payload.id = idVal;
      }
      await saveDbTeam(payload);
      return Astro2.redirect("/admin/team");
    } catch (error) {
      errorMessage = error.message;
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": isEditMode ? "Edit Team Member" : "Create Team Member" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <!-- Breadcrumbs --> <div class="mb-8"> <div class="breadcrumbs text-sm text-gray-400 p-0 mb-2"> <ul class="flex! flex-wrap"> <li><a href="/admin" class="hover:text-main">Admin</a></li> <li><a href="/admin/team" class="hover:text-main">Team</a></li> <li>${isEditMode ? "Edit" : "Create"}</li> </ul> </div> <h1 class="text-3xl font-bold text-gray-900"> ${isEditMode ? "Edit Team Member" : "Add Team Member"} </h1> <p class="text-gray-500 mt-1"> ${isEditMode ? "Make modifications to this team member's details." : "Add a brand new cleaning expert to your team."} </p> </div> <!-- Error Alert --> ${errorMessage && renderTemplate`<div class="alert alert-error text-sm py-3 px-4 rounded-lg flex items-center gap-2 mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:alert-circle", "size": 18 })} <span>${errorMessage}</span> </div>`} <!-- Form Panel --> <div class="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm"> <form method="POST" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Name / Title --> <div class="form-control"> <label for="title" class="label-text font-bold text-gray-700 mb-1.5">Expert Name</label> <input type="text" id="title" name="title"${addAttribute(teamData.title, "value")} required class="input input-bordered rounded-xl w-full" placeholder="e.g. Erick Reynolds"> </div> <!-- Slug --> <div class="form-control"> <label for="slug" class="label-text font-bold text-gray-700 mb-1.5">Slug (URL friendly path)</label> <input type="text" id="slug" name="slug"${addAttribute(teamData.slug, "value")} required class="input input-bordered rounded-xl w-full" placeholder="e.g. erick-reynolds"> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Rating Selection --> <div class="form-control"> <label for="rating" class="label-text font-bold text-gray-700 mb-1.5">Expert Rating (Stars)</label> <select id="rating" name="rating" class="select select-bordered rounded-xl w-full"> ${[5, 4, 3, 2, 1].map((num) => renderTemplate`<option${addAttribute(num, "value")}${addAttribute(teamData.rating === num, "selected")}>${num} Stars</option>`)} </select> </div> <!-- Featured Status --> <div class="form-control border border-gray-100 rounded-xl p-4 bg-gray-50/50 flex justify-center"> <label class="label cursor-pointer flex items-center justify-between gap-4 p-0 w-full"> <div> <span class="label-text font-bold text-gray-700">Featured Expert</span> <p class="text-xs text-gray-400 mt-0.5">Showcase this expert on the homepage.</p> </div> <input type="checkbox" name="featured"${addAttribute(teamData.featured, "checked")} class="checkbox checkbox-success rounded-lg"> </label> </div> </div> <!-- Description --> <div class="form-control"> <label for="description" class="label-text font-bold text-gray-700 mb-1.5">Brief Description (Excerpt)</label> <textarea id="description" name="description" rows="3" required class="textarea textarea-bordered rounded-xl w-full" placeholder="A short tagline or background description...">${teamData.description}</textarea> </div> <!-- Body / Content --> <div class="form-control"> <label for="body" class="label-text font-bold text-gray-700 mb-1.5">Detailed Bio (HTML/Markdown)</label> <textarea id="body" name="body" rows="10" required class="textarea textarea-bordered rounded-xl w-full font-mono text-sm" placeholder="Detailed background, work expertise, or certificates...">${teamData.body}</textarea> </div> <!-- Profile Photo URL --> <div class="form-control"> <label for="thumbnail" class="label-text font-bold text-gray-700 mb-1.5">Profile Photo URL</label> <input type="url" id="thumbnail" name="thumbnail"${addAttribute(teamData.thumbnail, "value")} class="input input-bordered rounded-xl w-full" placeholder="https://example.com/images/photo.jpg"> ${teamData.thumbnail && renderTemplate`<div class="flex items-center gap-3 mt-3 border border-gray-200 rounded-xl p-3 bg-gray-50"> <img${addAttribute(teamData.thumbnail, "src")} alt="Preview" class="h-12 w-12 object-cover rounded-full"> <span class="text-xs text-gray-400 truncate font-mono">${teamData.thumbnail}</span> </div>`} <p class="text-xs text-gray-400 mt-1.5">Paste an external image URL (e.g. from Imgur, Google Drive, etc.)</p> </div> <!-- Buttons --> <div class="flex justify-end gap-3 pt-6 border-t border-gray-100"> <a href="/admin/team" class="btn btn-outline border-gray-300 text-gray-600 rounded-xl px-6 hover:bg-gray-100">
Cancel
</a> <button type="submit" class="btn bg-main border-main text-white hover:bg-main-hover rounded-xl px-8 cursor-pointer">
Save Expert
</button> </div> </form> </div> </div> ` })} ${renderScript($$result, "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/team/edit.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/team/edit.astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/team/edit.astro";
const $$url = "/admin/team/edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Edit,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
