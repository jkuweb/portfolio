import client from '@/lib/client';
import type { Hero } from './hero.model';

export async function getHero(): Promise<Hero> {
	const hero = await client.getContent<Hero>({
		contentType: 'Hero',
		id: '6876af18925315b3e0cdbbe4',
	});

	return hero;
}
