import matter from 'gray-matter';
import type { Post } from '$lib/types';


async function getPost(slug: string): Promise<Post> {
  const file = await import(`$lib/posts/${slug}.md?raw`);
  const { data, content } = matter(file.default);
  return { ...data, content } as Post;
}

import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try {
    return {
      post: await getPost(params.slug)
    };
  } catch (e) {
    throw error(404, 'Post not found');
  }
};

export const prerender = true;