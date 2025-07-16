import type { Media } from '@content-island/api-client';

export interface About {
	id: string;
	language: 'es';
	title: string;
	picture: Media;
	textBio: string;
	technologies: string[];
}
