import { error } from '@sveltejs/kit';
import { posts } from '../data.js';


export async function load({ params }: { params: { slug: string } }) {
  const postSlug = params.slug;
  const post = posts.find((post) => post.slug === postSlug);
  if (!post) {
    throw error(404, 'Not found');
  }
  return ({ post });
}
