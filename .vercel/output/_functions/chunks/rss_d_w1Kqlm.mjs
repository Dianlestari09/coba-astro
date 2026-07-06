import { l as getDbBlogs } from './dbService_DktUCkoo.mjs';
import rss from '@astrojs/rss';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from './consts_B7c7UrsP.mjs';

async function GET(context) {
	const posts = await getDbBlogs();

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
		})),
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
