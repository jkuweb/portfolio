import client from '@/lib/client';
import type { About } from './about.model';

export async function getAbout(): Promise<About> {
	try {
		const aboutContent = await client.getContent<About>({
			id: '687540ab925315b3e0cdbb98',
			contentType: 'About',
		});

		return aboutContent;
	} catch (error) {
		throw error;
	}
}
