import client from '@/lib/client';
import type { Post } from './post.model';

export async function getPosts(): Promise<Post[]> {
	const posts = await client.getContentList<Post>({
		contentType: 'Post',
	});

	return posts;
}
