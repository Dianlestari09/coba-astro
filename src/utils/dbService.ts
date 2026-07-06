import { supabase, checkConnection } from './db';

// Fallback lists in case Supabase is not connected or running.
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
    const { data: rows, error } = await supabase
      .from('blogs')
      .select('*')
      .order('pubDate', { ascending: false });

    if (error) throw error;
    if (!rows) return FALLBACK_BLOGS;

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
    console.error('Error fetching blogs from Supabase:', e);
    return FALLBACK_BLOGS;
  }
}

export async function getDbBlogBySlug(slug: string) {
  try {
    if (!(await isConnected())) {
      return FALLBACK_BLOGS.find(b => b.id === slug) || null;
    }
    const { data: rows, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug);

    if (error) throw error;
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
    console.error(`Error fetching blog by slug ${slug} from Supabase:`, e);
    return FALLBACK_BLOGS.find(b => b.id === slug) || null;
  }
}

export async function getDbBlogsExcept(slug: string, limit: number = 3) {
  try {
    if (!(await isConnected())) {
      return FALLBACK_BLOGS.filter(b => b.id !== slug).slice(0, limit);
    }
    const { data: rows, error } = await supabase
      .from('blogs')
      .select('*')
      .neq('slug', slug)
      .order('pubDate', { ascending: false })
      .limit(limit);

    if (error) throw error;
    if (!rows) return FALLBACK_BLOGS.filter(b => b.id !== slug).slice(0, limit);

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
    console.error(`Error fetching related blogs from Supabase:`, e);
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

  const payload: any = {
    slug: data.slug,
    title: data.title,
    description: data.description,
    body: data.body,
    author_slug: data.author_slug,
    author_name: data.author_name,
    category_slug: data.category_slug,
    category_title: data.category_title,
    updatedDate: new Date().toISOString()
  };

  if (data.thumbnail) {
    payload.thumbnail = data.thumbnail;
  }

  if (data.id) {
    // Update
    const { error } = await supabase
      .from('blogs')
      .update(payload)
      .eq('id', data.id);
    if (error) throw error;
  } else {
    // Insert
    payload.pubDate = data.pubDate || new Date().toISOString();
    const { error } = await supabase
      .from('blogs')
      .insert([payload]);
    if (error) throw error;
  }
}

export async function deleteDbBlog(id: number) {
  const conn = await isConnected();
  if (!conn) throw new Error('Database not connected. Cannot perform write operations.');
  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

export async function getRawBlogsTable() {
  if (!(await isConnected())) return [];
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('pubDate', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function getRawBlogById(id: number) {
  if (!(await isConnected())) return null;
  const { data: rows, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id);
  if (error) throw error;
  return rows && rows.length > 0 ? rows[0] : null;
}


// ---------------- SERVICES CRUD ----------------

export async function getDbServices() {
  try {
    if (!(await isConnected())) return FALLBACK_SERVICES;
    const { data: rows, error } = await supabase
      .from('services')
      .select('*')
      .order('pubDate', { ascending: false });

    if (error) throw error;
    if (!rows) return FALLBACK_SERVICES;

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
    console.error('Error fetching services from Supabase:', e);
    return FALLBACK_SERVICES;
  }
}

export async function getDbServiceBySlug(slug: string) {
  try {
    if (!(await isConnected())) {
      return FALLBACK_SERVICES.find(s => s.id === slug) || null;
    }
    const { data: rows, error } = await supabase
      .from('services')
      .select('*')
      .eq('slug', slug);

    if (error) throw error;
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
    console.error(`Error fetching service by slug ${slug} from Supabase:`, e);
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

  const payload: any = {
    slug: data.slug,
    title: data.title,
    description: data.description,
    body: data.body,
    featured: data.featured,
    updatedDate: new Date().toISOString()
  };

  if (data.thumbnail) {
    payload.thumbnail = data.thumbnail;
  }

  if (data.id) {
    const { error } = await supabase
      .from('services')
      .update(payload)
      .eq('id', data.id);
    if (error) throw error;
  } else {
    payload.pubDate = data.pubDate || new Date().toISOString();
    const { error } = await supabase
      .from('services')
      .insert([payload]);
    if (error) throw error;
  }
}

export async function deleteDbService(id: number) {
  const conn = await isConnected();
  if (!conn) throw new Error('Database not connected. Cannot perform write operations.');
  const { error } = await supabase
    .from('services')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

export async function getRawServicesTable() {
  if (!(await isConnected())) return [];
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('pubDate', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function getRawServiceById(id: number) {
  if (!(await isConnected())) return null;
  const { data: rows, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id);
  if (error) throw error;
  return rows && rows.length > 0 ? rows[0] : null;
}


// ---------------- TEAMS CRUD ----------------

export async function getDbTeams() {
  try {
    if (!(await isConnected())) return FALLBACK_TEAMS;
    const { data: rows, error } = await supabase
      .from('teams')
      .select('*')
      .order('pubDate', { ascending: false });

    if (error) throw error;
    if (!rows) return FALLBACK_TEAMS;

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
    console.error('Error fetching teams from Supabase:', e);
    return FALLBACK_TEAMS;
  }
}

export async function getDbTeamBySlug(slug: string) {
  try {
    if (!(await isConnected())) {
      return FALLBACK_TEAMS.find(t => t.id === slug) || null;
    }
    const { data: rows, error } = await supabase
      .from('teams')
      .select('*')
      .eq('slug', slug);

    if (error) throw error;
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
    console.error(`Error fetching team by slug ${slug} from Supabase:`, e);
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

  const payload: any = {
    slug: data.slug,
    title: data.title,
    description: data.description,
    body: data.body,
    featured: data.featured,
    rating: data.rating,
    updatedDate: new Date().toISOString()
  };

  if (data.thumbnail) {
    payload.thumbnail = data.thumbnail;
  }

  if (data.id) {
    const { error } = await supabase
      .from('teams')
      .update(payload)
      .eq('id', data.id);
    if (error) throw error;
  } else {
    payload.pubDate = data.pubDate || new Date().toISOString();
    const { error } = await supabase
      .from('teams')
      .insert([payload]);
    if (error) throw error;
  }
}

export async function deleteDbTeam(id: number) {
  const conn = await isConnected();
  if (!conn) throw new Error('Database not connected. Cannot perform write operations.');
  const { error } = await supabase
    .from('teams')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

export async function getRawTeamsTable() {
  if (!(await isConnected())) return [];
  const { data, error } = await supabase
    .from('teams')
    .select('*')
    .order('pubDate', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function getRawTeamById(id: number) {
  if (!(await isConnected())) return null;
  const { data: rows, error } = await supabase
    .from('teams')
    .select('*')
    .eq('id', id);
  if (error) throw error;
  return rows && rows.length > 0 ? rows[0] : null;
}
