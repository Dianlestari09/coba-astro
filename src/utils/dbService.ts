import { query, checkConnection } from './db';

// Fallback lists in case XAMPP MySQL is not connected or running.
// This ensures the site never crashes during builds or local setup.
const FALLBACK_BLOGS = [
  {
    id: 'eco-friendly-cleaning',
    data: {
      title: 'Eco-Friendly Cleaning: How We Keep Your Home Green (Fallback)',
      description: 'Learn about our commitment to eco-friendly practices. We share the eco-conscious products...',
      pubDate: new Date('2022-07-08'),
      thumbnail: '/news/b1.jpg',
      category: { slug: 'cleaning', title: 'Cleaning' },
      author: { slug: 'john-helton', name: 'John Helton' }
    },
    body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is fallback data because the local database is not connected.</p>'
  },
  {
    id: 'maintain-clean-home',
    data: {
      title: 'How to Maintain a Clean Home Between Professional Visits (Fallback)',
      description: 'Get practical advice on maintaining cleanliness between our scheduled visits.',
      pubDate: new Date('2022-07-08'),
      thumbnail: '/news/b2.jpg',
      category: { slug: 'cat-1', title: 'Category1' },
      author: { slug: 'john-helton', name: 'John Helton' }
    },
    body: '<p>Some basic content. This is fallback data because the local database is not connected.</p>'
  }
];

const FALLBACK_SERVICES = [
  {
    id: 'office-cleaning',
    data: {
      title: 'Office Cleaning (Fallback)',
      description: 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:',
      pubDate: new Date('2022-07-08'),
      thumbnail: '/services/s1.jpg',
      featured: true
    },
    body: '<p>Office cleaning description fallback.</p>'
  },
  {
    id: 'house-cleaning',
    data: {
      title: 'House Cleaning (Fallback)',
      description: 'While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:',
      pubDate: new Date('2022-07-08'),
      thumbnail: '/services/s2.jpg',
      featured: true
    },
    body: '<p>House cleaning description fallback.</p>'
  }
];

const FALLBACK_TEAMS = [
  {
    id: 'erick-reynolds',
    data: {
      title: 'Bruce Williams (Fallback)',
      description: 'He is an expert cleaning staff member who provides thorough cleaning with precision,',
      pubDate: new Date('2022-07-08'),
      thumbnail: '/team/team1.jpg',
      featured: true,
      rating: 5
    },
    body: '<p>Team member description fallback.</p>'
  }
];

// Helper to check if DB is connected
let dbConnected = false;
async function isConnected() {
  dbConnected = await checkConnection();
  return dbConnected;
}

// ---------------- BLOGS CRUD ----------------

export async function getDbBlogs() {
  try {
    if (!(await isConnected())) return FALLBACK_BLOGS;
    const rows = await query('SELECT * FROM blogs ORDER BY pubDate DESC');
    return rows.map((row: any) => ({
      id: row.slug,
      data: {
        title: row.title,
        description: row.description,
        pubDate: new Date(row.pubDate),
        updatedDate: row.updatedDate ? new Date(row.updatedDate) : undefined,
        thumbnail: row.thumbnail,
        category: { slug: row.category_slug, title: row.category_title },
        author: { slug: row.author_slug, name: row.author_name }
      },
      body: row.body
    }));
  } catch (e) {
    console.error('Error fetching blogs from DB:', e);
    return FALLBACK_BLOGS;
  }
}

export async function getDbBlogBySlug(slug: string) {
  try {
    if (!(await isConnected())) {
      return FALLBACK_BLOGS.find(b => b.id === slug) || null;
    }
    const rows = await query('SELECT * FROM blogs WHERE slug = ?', [slug]);
    if (!rows || rows.length === 0) return null;
    const row = rows[0];
    return {
      id: row.slug,
      data: {
        title: row.title,
        description: row.description,
        pubDate: new Date(row.pubDate),
        updatedDate: row.updatedDate ? new Date(row.updatedDate) : undefined,
        thumbnail: row.thumbnail,
        category: { slug: row.category_slug, title: row.category_title },
        author: { slug: row.author_slug, name: row.author_name }
      },
      body: row.body
    };
  } catch (e) {
    console.error(`Error fetching blog by slug ${slug}:`, e);
    return FALLBACK_BLOGS.find(b => b.id === slug) || null;
  }
}

export async function getDbBlogsExcept(slug: string, limit: number = 3) {
  try {
    if (!(await isConnected())) {
      return FALLBACK_BLOGS.filter(b => b.id !== slug).slice(0, limit);
    }
    const rows = await query('SELECT * FROM blogs WHERE slug != ? ORDER BY pubDate DESC LIMIT ?', [slug, limit]);
    return rows.map((row: any) => ({
      id: row.slug,
      data: {
        title: row.title,
        description: row.description,
        pubDate: new Date(row.pubDate),
        updatedDate: row.updatedDate ? new Date(row.updatedDate) : undefined,
        thumbnail: row.thumbnail,
        category: { slug: row.category_slug, title: row.category_title },
        author: { slug: row.author_slug, name: row.author_name }
      },
      body: row.body
    }));
  } catch (e) {
    console.error(`Error fetching related blogs:`, e);
    return FALLBACK_BLOGS.filter(b => b.id !== slug).slice(0, limit);
  }
}

export async function saveDbBlog(data: {
  id?: string; // row id in table, optional for insert
  slug: string;
  title: string;
  description: string;
  body: string;
  pubDate?: Date;
  thumbnail?: string;
  author_slug: string;
  author_name: string;
  category_slug: string;
  category_title: string;
}) {
  const conn = await isConnected();
  if (!conn) throw new Error('Database not connected. Cannot perform write operations.');

  if (data.id) {
    // Update
    await query(
      `UPDATE blogs SET 
        slug = ?, title = ?, description = ?, body = ?, 
        thumbnail = COALESCE(?, thumbnail), author_slug = ?, author_name = ?, 
        category_slug = ?, category_title = ? 
       WHERE id = ?`,
      [
        data.slug, data.title, data.description, data.body, 
        data.thumbnail || null, data.author_slug, data.author_name, 
        data.category_slug, data.category_title, data.id
      ]
    );
  } else {
    // Insert
    await query(
      `INSERT INTO blogs 
        (slug, title, description, body, pubDate, thumbnail, author_slug, author_name, category_slug, category_title) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.slug, data.title, data.description, data.body, 
        data.pubDate || new Date(), data.thumbnail || null, data.author_slug, 
        data.author_name, data.category_slug, data.category_title
      ]
    );
  }
}

export async function deleteDbBlog(id: number) {
  const conn = await isConnected();
  if (!conn) throw new Error('Database not connected. Cannot perform write operations.');
  await query('DELETE FROM blogs WHERE id = ?', [id]);
}

export async function getRawBlogsTable() {
  if (!(await isConnected())) return [];
  return await query('SELECT * FROM blogs ORDER BY pubDate DESC');
}

export async function getRawBlogById(id: number) {
  if (!(await isConnected())) return null;
  const rows = await query('SELECT * FROM blogs WHERE id = ?', [id]);
  return rows && rows.length > 0 ? rows[0] : null;
}


// ---------------- SERVICES CRUD ----------------

export async function getDbServices() {
  try {
    if (!(await isConnected())) return FALLBACK_SERVICES;
    const rows = await query('SELECT * FROM services ORDER BY pubDate DESC');
    return rows.map((row: any) => ({
      id: row.slug,
      data: {
        title: row.title,
        description: row.description,
        pubDate: new Date(row.pubDate),
        updatedDate: row.updatedDate ? new Date(row.updatedDate) : undefined,
        thumbnail: row.thumbnail,
        featured: Boolean(row.featured)
      },
      body: row.body
    }));
  } catch (e) {
    console.error('Error fetching services from DB:', e);
    return FALLBACK_SERVICES;
  }
}

export async function getDbServiceBySlug(slug: string) {
  try {
    if (!(await isConnected())) {
      return FALLBACK_SERVICES.find(s => s.id === slug) || null;
    }
    const rows = await query('SELECT * FROM services WHERE slug = ?', [slug]);
    if (!rows || rows.length === 0) return null;
    const row = rows[0];
    return {
      id: row.slug,
      data: {
        title: row.title,
        description: row.description,
        pubDate: new Date(row.pubDate),
        updatedDate: row.updatedDate ? new Date(row.updatedDate) : undefined,
        thumbnail: row.thumbnail,
        featured: Boolean(row.featured)
      },
      body: row.body
    };
  } catch (e) {
    console.error(`Error fetching service by slug ${slug}:`, e);
    return FALLBACK_SERVICES.find(s => s.id === slug) || null;
  }
}

export async function saveDbService(data: {
  id?: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  pubDate?: Date;
  thumbnail?: string;
  featured: boolean;
}) {
  const conn = await isConnected();
  if (!conn) throw new Error('Database not connected. Cannot perform write operations.');

  if (data.id) {
    await query(
      `UPDATE services SET 
        slug = ?, title = ?, description = ?, body = ?, 
        thumbnail = COALESCE(?, thumbnail), featured = ? 
       WHERE id = ?`,
      [
        data.slug, data.title, data.description, data.body, 
        data.thumbnail || null, data.featured ? 1 : 0, data.id
      ]
    );
  } else {
    await query(
      `INSERT INTO services 
        (slug, title, description, body, pubDate, thumbnail, featured) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        data.slug, data.title, data.description, data.body, 
        data.pubDate || new Date(), data.thumbnail || null, data.featured ? 1 : 0
      ]
    );
  }
}

export async function deleteDbService(id: number) {
  const conn = await isConnected();
  if (!conn) throw new Error('Database not connected. Cannot perform write operations.');
  await query('DELETE FROM services WHERE id = ?', [id]);
}

export async function getRawServicesTable() {
  if (!(await isConnected())) return [];
  return await query('SELECT * FROM services ORDER BY pubDate DESC');
}

export async function getRawServiceById(id: number) {
  if (!(await isConnected())) return null;
  const rows = await query('SELECT * FROM services WHERE id = ?', [id]);
  return rows && rows.length > 0 ? rows[0] : null;
}


// ---------------- TEAMS CRUD ----------------

export async function getDbTeams() {
  try {
    if (!(await isConnected())) return FALLBACK_TEAMS;
    const rows = await query('SELECT * FROM teams ORDER BY pubDate DESC');
    return rows.map((row: any) => ({
      id: row.slug,
      data: {
        title: row.title,
        description: row.description,
        pubDate: new Date(row.pubDate),
        updatedDate: row.updatedDate ? new Date(row.updatedDate) : undefined,
        thumbnail: row.thumbnail,
        featured: Boolean(row.featured),
        rating: Number(row.rating)
      },
      body: row.body
    }));
  } catch (e) {
    console.error('Error fetching teams from DB:', e);
    return FALLBACK_TEAMS;
  }
}

export async function getDbTeamBySlug(slug: string) {
  try {
    if (!(await isConnected())) {
      return FALLBACK_TEAMS.find(t => t.id === slug) || null;
    }
    const rows = await query('SELECT * FROM teams WHERE slug = ?', [slug]);
    if (!rows || rows.length === 0) return null;
    const row = rows[0];
    return {
      id: row.slug,
      data: {
        title: row.title,
        description: row.description,
        pubDate: new Date(row.pubDate),
        updatedDate: row.updatedDate ? new Date(row.updatedDate) : undefined,
        thumbnail: row.thumbnail,
        featured: Boolean(row.featured),
        rating: Number(row.rating)
      },
      body: row.body
    };
  } catch (e) {
    console.error(`Error fetching team by slug ${slug}:`, e);
    return FALLBACK_TEAMS.find(t => t.id === slug) || null;
  }
}

export async function saveDbTeam(data: {
  id?: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  pubDate?: Date;
  thumbnail?: string;
  featured: boolean;
  rating: number;
}) {
  const conn = await isConnected();
  if (!conn) throw new Error('Database not connected. Cannot perform write operations.');

  if (data.id) {
    await query(
      `UPDATE teams SET 
        slug = ?, title = ?, description = ?, body = ?, 
        thumbnail = COALESCE(?, thumbnail), featured = ?, rating = ? 
       WHERE id = ?`,
      [
        data.slug, data.title, data.description, data.body, 
        data.thumbnail || null, data.featured ? 1 : 0, data.rating, data.id
      ]
    );
  } else {
    await query(
      `INSERT INTO teams 
        (slug, title, description, body, pubDate, thumbnail, featured, rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.slug, data.title, data.description, data.body, 
        data.pubDate || new Date(), data.thumbnail || null, data.featured ? 1 : 0, data.rating
      ]
    );
  }
}

export async function deleteDbTeam(id: number) {
  const conn = await isConnected();
  if (!conn) throw new Error('Database not connected. Cannot perform write operations.');
  await query('DELETE FROM teams WHERE id = ?', [id]);
}

export async function getRawTeamsTable() {
  if (!(await isConnected())) return [];
  return await query('SELECT * FROM teams ORDER BY pubDate DESC');
}

export async function getRawTeamById(id: number) {
  if (!(await isConnected())) return null;
  const rows = await query('SELECT * FROM teams WHERE id = ?', [id]);
  return rows && rows.length > 0 ? rows[0] : null;
}
