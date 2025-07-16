import client from '@/lib/client';
import type { Work } from './work.model';

export async function getWorks(): Promise<Work[]> {
	const works = await client.getContentList<Work>({
		contentType: 'Work',
	});

	return works;
}
