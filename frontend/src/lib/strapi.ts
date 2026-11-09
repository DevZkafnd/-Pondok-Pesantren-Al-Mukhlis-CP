/**
 * Strapi CMS Client
 * 
 * Client sederhana untuk mengambil data dari Strapi CMS.
 * Belum digunakan secara aktif pada fase setup ini.
 */

const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337';

interface StrapiRequestOptions {
  endpoint: string;
  query?: Record<string, string | number | boolean>;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
}

/**
 * Helper untuk membuat request ke Strapi API
 */
async function strapiRequest<T>({
  endpoint,
  query = {},
  method = 'GET',
  body,
}: StrapiRequestOptions): Promise<T> {
  const queryString = new URLSearchParams(
    Object.entries(query).map(([key, value]) => [key, String(value)])
  ).toString();

  const url = `${STRAPI_URL}/api${endpoint}${queryString ? `?${queryString}` : ''}`;

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body && method !== 'GET') {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Strapi request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Contoh: Mengambil daftar artikel
 * (Akan digunakan setelah content type dibuat di Strapi)
 */
export async function getArticles() {
  // return strapiRequest({
  //   endpoint: '/articles',
  //   query: {
  //     populate: '*',
  //     sort: 'publishedAt:desc',
  //   },
  // });
  return { data: [] };
}

/**
 * Contoh: Mengambil single page content
 * (Akan digunakan setelah content type dibuat di Strapi)
 */
export async function getPageContent(slug: string) {
  // return strapiRequest({
  //   endpoint: `/pages/${slug}`,
  //   query: {
  //     populate: '*',
  //   },
  // });
  return { data: null };
}

/**
 * Helper untuk mendapatkan URL media dari Strapi
 */
export function getStrapiMediaUrl(url: string | null | undefined): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

export { STRAPI_URL };
