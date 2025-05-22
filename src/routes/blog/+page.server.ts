import matter from 'gray-matter';
import type { PostMeta } from '$lib/types';

async function getPosts(): Promise<PostMeta[]> {
  const files = import.meta.glob('$lib/posts/*.md', { query: '?raw', import: 'default', eager: true });
  console.log('files', files);
  return Object.entries(files).map(([path, raw]) => {
    const { data } = matter(raw as string);
    console.log('frontmatter data:', data); // <-- agrega esto
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    return { ...data, slug } as PostMeta;
  });
}


export const load = async () => {
  return {
    posts: await getPosts()
  };
};

export const prerender = true;