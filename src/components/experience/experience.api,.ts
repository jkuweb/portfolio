import client from '@/lib/client';
import type { Experience } from './experience.mode';

export async function getExperience(): Promise<Experience[]> {
	const experience = await client.getContentList<Experience>({
		contentType: 'Experience',
	});

	return experience;
}
