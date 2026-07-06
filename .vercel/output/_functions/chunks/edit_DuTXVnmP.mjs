import { c as createComponent } from './_astro_assets_B11Dm5az.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_mLsl_CHG.mjs';
import { r as renderScript } from './script_CDQj9iQ1.mjs';
import { $ as $$AdminLayout } from './AdminLayout_Debj3qGI.mjs';
import { b as getRawServiceById, c as saveDbService } from './dbService_DktUCkoo.mjs';
import { $ as $$Icon } from './Icon_C9kaGRW1.mjs';

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
  let serviceData = {
    title: "",
    slug: "",
    description: "",
    body: "",
    thumbnail: "",
    featured: false
  };
  if (idVal) {
    isEditMode = true;
    const existingService = await getRawServiceById(Number(idVal));
    if (existingService) {
      serviceData = {
        ...existingService,
        featured: Boolean(existingService.featured)
      };
    } else {
      return Astro2.redirect("/admin/service");
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
      const thumbnail = formData.get("thumbnail")?.toString() || "";
      if (!title || !slug || !description || !body) {
        throw new Error("Title, Slug, Description, and Content fields are required.");
      }
      const thumbnailPath = thumbnail || serviceData.thumbnail;
      const payload = {
        slug,
        title,
        description,
        body,
        thumbnail: thumbnailPath,
        featured
      };
      if (isEditMode) {
        payload.id = idVal;
      }
      await saveDbService(payload);
      return Astro2.redirect("/admin/service");
    } catch (error) {
      errorMessage = error.message;
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": isEditMode ? "Edit Service" : "Create Service" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <!-- Breadcrumbs --> <div class="mb-8"> <div class="breadcrumbs text-sm text-gray-400 p-0 mb-2"> <ul class="flex! flex-wrap"> <li><a href="/admin" class="hover:text-main">Admin</a></li> <li><a href="/admin/service" class="hover:text-main">Services</a></li> <li>${isEditMode ? "Edit" : "Create"}</li> </ul> </div> <h1 class="text-3xl font-bold text-gray-900"> ${isEditMode ? "Edit Service Details" : "Create New Service"} </h1> <p class="text-gray-500 mt-1"> ${isEditMode ? "Make modifications to this service item." : "Add a brand new service type to your site."} </p> </div> <!-- Error Alert --> ${errorMessage && renderTemplate`<div class="alert alert-error text-sm py-3 px-4 rounded-lg flex items-center gap-2 mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:alert-circle", "size": 18 })} <span>${errorMessage}</span> </div>`} <!-- Form Panel --> <div class="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm"> <form method="POST" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Title --> <div class="form-control"> <label for="title" class="label-text font-bold text-gray-700 mb-1.5">Service Title</label> <input type="text" id="title" name="title"${addAttribute(serviceData.title, "value")} required class="input input-bordered rounded-xl w-full" placeholder="e.g. Sofa Cleaning"> </div> <!-- Slug --> <div class="form-control"> <label for="slug" class="label-text font-bold text-gray-700 mb-1.5">Slug (URL friendly path)</label> <input type="text" id="slug" name="slug"${addAttribute(serviceData.slug, "value")} required class="input input-bordered rounded-xl w-full" placeholder="e.g. sofa-cleaning"> </div> </div> <!-- Featured Status --> <div class="form-control border border-gray-100 rounded-xl p-4 bg-gray-50/50"> <label class="label cursor-pointer flex items-center justify-between gap-4 p-0"> <div> <span class="label-text font-bold text-gray-700">Featured Service</span> <p class="text-xs text-gray-400 mt-0.5">Featured services are showcased on the home page.</p> </div> <input type="checkbox" name="featured"${addAttribute(serviceData.featured, "checked")} class="checkbox checkbox-success rounded-lg"> </label> </div> <!-- Description --> <div class="form-control"> <label for="description" class="label-text font-bold text-gray-700 mb-1.5">Brief Description (Excerpt)</label> <textarea id="description" name="description" rows="3" required class="textarea textarea-bordered rounded-xl w-full" placeholder="A short summary of what this service covers...">${serviceData.description}</textarea> </div> <!-- Body / Content --> <div class="form-control"> <label for="body" class="label-text font-bold text-gray-700 mb-1.5">Detailed Content (HTML/Markdown)</label> <textarea id="body" name="body" rows="10" required class="textarea textarea-bordered rounded-xl w-full font-mono text-sm" placeholder="Detailed description or lists of sofa cleaning steps...">${serviceData.body}</textarea> </div> <!-- Thumbnail Image URL --> <div class="form-control"> <label for="thumbnail" class="label-text font-bold text-gray-700 mb-1.5">Service Thumbnail URL</label> <input type="url" id="thumbnail" name="thumbnail"${addAttribute(serviceData.thumbnail, "value")} class="input input-bordered rounded-xl w-full" placeholder="https://example.com/images/photo.jpg"> ${serviceData.thumbnail && renderTemplate`<div class="flex items-center gap-3 mt-3 border border-gray-200 rounded-xl p-3 bg-gray-50"> <img${addAttribute(serviceData.thumbnail, "src")} alt="Preview" class="h-12 w-16 object-cover rounded-md"> <span class="text-xs text-gray-400 truncate font-mono">${serviceData.thumbnail}</span> </div>`} <p class="text-xs text-gray-400 mt-1.5">Paste an external image URL (e.g. from Imgur, Google Drive, etc.)</p> </div> <!-- Buttons --> <div class="flex justify-end gap-3 pt-6 border-t border-gray-100"> <a href="/admin/service" class="btn btn-outline border-gray-300 text-gray-600 rounded-xl px-6 hover:bg-gray-100">
Cancel
</a> <button type="submit" class="btn bg-main border-main text-white hover:bg-main-hover rounded-xl px-8 cursor-pointer">
Save Service
</button> </div> </form> </div> </div> ` })} ${renderScript($$result, "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/service/edit.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/service/edit.astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/service/edit.astro";
const $$url = "/admin/service/edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Edit,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
