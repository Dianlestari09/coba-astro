import { c as createComponent } from './_astro_assets_B11Dm5az.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_mLsl_CHG.mjs';
import { r as renderScript } from './script_CDQj9iQ1.mjs';
import { $ as $$AdminLayout } from './AdminLayout_Debj3qGI.mjs';
import { g as getRawBlogById, s as saveDbBlog } from './dbService_DktUCkoo.mjs';
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
  let blogData = {
    title: "",
    slug: "",
    description: "",
    body: "",
    author_name: "",
    author_slug: "",
    category_title: "",
    category_slug: "",
    thumbnail: ""
  };
  if (idVal) {
    isEditMode = true;
    const existingBlog = await getRawBlogById(Number(idVal));
    if (existingBlog) {
      blogData = existingBlog;
    } else {
      return Astro2.redirect("/admin/blog");
    }
  }
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const title = formData.get("title")?.toString() || "";
      const slug = formData.get("slug")?.toString() || "";
      const description = formData.get("description")?.toString() || "";
      const body = formData.get("body")?.toString() || "";
      const author_name = formData.get("author_name")?.toString() || "";
      const author_slug = formData.get("author_slug")?.toString() || "";
      const category_title = formData.get("category_title")?.toString() || "";
      const category_slug = formData.get("category_slug")?.toString() || "";
      const thumbnail = formData.get("thumbnail")?.toString() || "";
      if (!title || !slug || !description || !body) {
        throw new Error("Title, Slug, Description, and Content fields are required.");
      }
      const thumbnailPath = thumbnail || blogData.thumbnail;
      const payload = {
        slug,
        title,
        description,
        body,
        thumbnail: thumbnailPath,
        author_name: author_name || "Admin",
        author_slug: author_slug || "admin",
        category_title: category_title || "Uncategorized",
        category_slug: category_slug || "uncategorized"
      };
      if (isEditMode) {
        payload.id = idVal;
      }
      await saveDbBlog(payload);
      return Astro2.redirect("/admin/blog");
    } catch (error) {
      errorMessage = error.message;
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": isEditMode ? "Edit Blog" : "Create Blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <!-- Breadcrumbs & Title --> <div class="mb-8"> <div class="breadcrumbs text-sm text-gray-400 p-0 mb-2"> <ul class="flex! flex-wrap"> <li><a href="/admin" class="hover:text-main">Admin</a></li> <li><a href="/admin/blog" class="hover:text-main">Blogs</a></li> <li>${isEditMode ? "Edit" : "Create"}</li> </ul> </div> <h1 class="text-3xl font-bold text-gray-900"> ${isEditMode ? "Edit Blog Post" : "Create New Blog"} </h1> <p class="text-gray-500 mt-1"> ${isEditMode ? "Make modifications to this blog post." : "Add a brand new blog post to your site."} </p> </div> <!-- Error Alert --> ${errorMessage && renderTemplate`<div class="alert alert-error text-sm py-3 px-4 rounded-lg flex items-center gap-2 mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:alert-circle", "size": 18 })} <span>${errorMessage}</span> </div>`} <!-- Form Panel --> <div class="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm"> <form method="POST" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Title --> <div class="form-control"> <label for="title" class="label-text font-bold text-gray-700 mb-1.5">Title</label> <input type="text" id="title" name="title"${addAttribute(blogData.title, "value")} required class="input input-bordered rounded-xl w-full" placeholder="e.g. Eco-Friendly Cleaning Tips"> </div> <!-- Slug --> <div class="form-control"> <label for="slug" class="label-text font-bold text-gray-700 mb-1.5">Slug (URL friendly path)</label> <input type="text" id="slug" name="slug"${addAttribute(blogData.slug, "value")} required class="input input-bordered rounded-xl w-full" placeholder="e.g. eco-friendly-cleaning-tips"> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Category Title --> <div class="form-control"> <label for="category_title" class="label-text font-bold text-gray-700 mb-1.5">Category Title</label> <input type="text" id="category_title" name="category_title"${addAttribute(blogData.category_title, "value")} class="input input-bordered rounded-xl w-full" placeholder="e.g. Cleaning"> </div> <!-- Category Slug --> <div class="form-control"> <label for="category_slug" class="label-text font-bold text-gray-700 mb-1.5">Category Slug</label> <input type="text" id="category_slug" name="category_slug"${addAttribute(blogData.category_slug, "value")} class="input input-bordered rounded-xl w-full" placeholder="e.g. cleaning"> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Author Name --> <div class="form-control"> <label for="author_name" class="label-text font-bold text-gray-700 mb-1.5">Author Name</label> <input type="text" id="author_name" name="author_name"${addAttribute(blogData.author_name, "value")} class="input input-bordered rounded-xl w-full" placeholder="e.g. John Doe"> </div> <!-- Author Slug --> <div class="form-control"> <label for="author_slug" class="label-text font-bold text-gray-700 mb-1.5">Author Slug</label> <input type="text" id="author_slug" name="author_slug"${addAttribute(blogData.author_slug, "value")} class="input input-bordered rounded-xl w-full" placeholder="e.g. john-doe"> </div> </div> <!-- Description --> <div class="form-control"> <label for="description" class="label-text font-bold text-gray-700 mb-1.5">Brief Description (Excerpt)</label> <textarea id="description" name="description" rows="3" required class="textarea textarea-bordered rounded-xl w-full" placeholder="A short summary of the blog post to display in listings...">${blogData.description}</textarea> </div> <!-- Body / Content (Rich HTML support) --> <div class="form-control"> <label for="body" class="label-text font-bold text-gray-700 mb-1.5">Content Body (HTML or Markdown supported)</label> <textarea id="body" name="body" rows="10" required class="textarea textarea-bordered rounded-xl w-full font-mono text-sm" placeholder="Write blog content here. You can use HTML tags like <p>, <h3>, <ul> etc.">${blogData.body}</textarea> </div> <!-- Thumbnail Image URL --> <div class="form-control"> <label for="thumbnail" class="label-text font-bold text-gray-700 mb-1.5">Thumbnail Image URL</label> <input type="url" id="thumbnail" name="thumbnail"${addAttribute(blogData.thumbnail, "value")} class="input input-bordered rounded-xl w-full" placeholder="https://example.com/images/photo.jpg"> ${blogData.thumbnail && renderTemplate`<div class="flex items-center gap-3 mt-3 border border-gray-200 rounded-xl p-3 bg-gray-50"> <img${addAttribute(blogData.thumbnail, "src")} alt="Preview" class="h-12 w-16 object-cover rounded-md"> <span class="text-xs text-gray-400 truncate font-mono">${blogData.thumbnail}</span> </div>`} <p class="text-xs text-gray-400 mt-1.5">Paste an external image URL (e.g. from Imgur, Google Drive, etc.)</p> </div> <!-- Action Form Buttons --> <div class="flex justify-end gap-3 pt-6 border-t border-gray-100"> <a href="/admin/blog" class="btn btn-outline border-gray-300 text-gray-600 rounded-xl px-6 hover:bg-gray-100">
Cancel
</a> <button type="submit" class="btn bg-main border-main text-white hover:bg-main-hover rounded-xl px-8 cursor-pointer">
Save Blog
</button> </div> </form> </div> </div> ` })} ${renderScript($$result, "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/blog/edit.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/blog/edit.astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/blog/edit.astro";
const $$url = "/admin/blog/edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Edit,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
