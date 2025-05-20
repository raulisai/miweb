import matter from 'gray-matter';

export interface PostMeta {
  title: string;
  date: string;
  slug: string;
}

export interface Post extends PostMeta {
  content: string;
}

async function getPosts(): Promise<PostMeta[]> {
  const files = import.meta.glob('./posts/*.md', { query: '?raw', import: 'default', eager: true });
  console.log('files', files);
  return Object.entries(files).map(([path, raw]) => {
    const { data } = matter(raw as string);
    console.log('frontmatter data:', data); // <-- agrega esto
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    return { ...data, slug } as PostMeta;
  });
}

async function getPost(slug: string): Promise<Post> {
  const file = await import(`../posts/${slug}.md?raw`);
  const { data, content } = matter(file.default);
  return { ...data, content } as Post;
}

export const load = async () => {
  return {
    posts: await getPosts()
  };
};
