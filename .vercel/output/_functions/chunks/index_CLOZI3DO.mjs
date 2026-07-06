import { c as createComponent } from './_astro_assets_B11Dm5az.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_mLsl_CHG.mjs';
import { $ as $$AdminLayout } from './AdminLayout_Debj3qGI.mjs';
import { d as deleteDbBlog, a as getRawBlogsTable } from './dbService_DktUCkoo.mjs';
import { f as formatFrontmatterDate } from './date_C3ZKKFC4.mjs';
import { $ as $$Icon } from './Icon_C9kaGRW1.mjs';

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
        await deleteDbBlog(Number(idVal));
        successMessage = "Blog post deleted successfully!";
      }
    } catch (error) {
      errorMessage = `Error deleting blog post: ${error.message}`;
    }
  }
  const blogs = await getRawBlogsTable();
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Manage Blogs" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <!-- Header Section --> <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"> <div> <h1 class="text-3xl font-bold text-gray-900">Manage Blogs</h1> <p class="text-gray-500 mt-1">Create, update, and delete blog posts for the website.</p> </div> <a href="/admin/blog/edit" class="btn bg-main border-main text-white hover:bg-main-hover rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:plus", "size": 18 })}
Add New Blog
</a> </div> <!-- Feedback Alerts --> ${successMessage && renderTemplate`<div class="alert alert-success text-sm py-3 px-4 rounded-lg flex items-center gap-2 mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:check-circle", "size": 18 })} <span>${successMessage}</span> </div>`} ${errorMessage && renderTemplate`<div class="alert alert-error text-sm py-3 px-4 rounded-lg flex items-center gap-2 mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:alert-circle", "size": 18 })} <span>${errorMessage}</span> </div>`} <!-- Table List --> <div class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"> <div class="overflow-x-auto w-full"> <table class="table w-full"> <!-- head --> <thead> <tr class="bg-gray-50 text-gray-500 border-b border-gray-200"> <th class="py-4 pl-6 text-xs font-bold uppercase tracking-wider">Blog Details</th> <th class="py-4 text-xs font-bold uppercase tracking-wider">Category</th> <th class="py-4 text-xs font-bold uppercase tracking-wider">Author</th> <th class="py-4 text-xs font-bold uppercase tracking-wider">Published Date</th> <th class="py-4 pr-6 text-right text-xs font-bold uppercase tracking-wider">Actions</th> </tr> </thead> <tbody class="divide-y divide-gray-100"> ${blogs.length === 0 ? renderTemplate`<tr> <td colspan="5" class="py-8 text-center text-gray-400"> <div class="flex flex-col items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:folder-open", "size": 32 })} <span>No blog posts found. Click "Add New Blog" to create one.</span> </div> </td> </tr>` : blogs.map((blog) => renderTemplate`<tr class="hover:bg-gray-50/50 transition-colors"> <!-- Thumbnail & Title --> <td class="py-4 pl-6 flex items-center gap-4"> <div class="avatar"> <div class="mask rounded-lg w-16 h-12 bg-gray-100"> ${blog.thumbnail ? renderTemplate`<img${addAttribute(blog.thumbnail, "src")}${addAttribute(blog.title, "alt")} class="object-cover w-full h-full">` : renderTemplate`<div class="flex items-center justify-center h-full w-full bg-gray-100 text-gray-400"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:image", "size": 16 })} </div>`} </div> </div> <div> <div class="font-bold text-gray-800 line-clamp-1">${blog.title}</div> <div class="text-xs text-gray-400 font-mono mt-0.5">/${blog.slug}</div> </div> </td> <!-- Category --> <td class="py-4"> <span class="badge badge-outline border-gray-300 text-gray-600 rounded-md"> ${blog.category_title} </span> </td> <!-- Author --> <td class="py-4"> <div class="text-sm text-gray-700 font-medium">${blog.author_name}</div> </td> <!-- Date --> <td class="py-4"> <div class="text-sm text-gray-500">${formatFrontmatterDate(new Date(blog.pubDate))}</div> </td> <!-- Action Buttons --> <td class="py-4 pr-6 text-right"> <div class="flex justify-end items-center gap-2"> <a${addAttribute(`/admin/blog/edit?id=${blog.id}`, "href")} class="btn btn-outline border-gray-200 text-gray-600 hover:bg-main hover:text-white hover:border-main btn-xs rounded-lg flex items-center gap-1.5 h-8"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:pencil", "size": 12 })}
Edit
</a> <form method="POST" class="inline" onsubmit="return confirm('Are you sure you want to delete this blog post?');"> <input type="hidden" name="action" value="delete"> <input type="hidden" name="id"${addAttribute(blog.id, "value")}> <button type="submit" class="btn btn-outline border-red-200 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 btn-xs rounded-lg flex items-center gap-1.5 h-8 cursor-pointer"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:trash-2", "size": 12 })}
Delete
</button> </form> </div> </td> </tr>`)} </tbody> </table> </div> </div> </div> ` })}`;
}, "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/blog/index.astro", void 0);

const $$file = "D:/Kuliah/Magang/ProCleaning-main/src/pages/admin/blog/index.astro";
const $$url = "/admin/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
