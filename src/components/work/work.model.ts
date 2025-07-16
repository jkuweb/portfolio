import type { Media } from '@content-island/api-client';

export interface Work {
	id: string;
	language: 'es';
	title: string;
	info: string;
	image: Media;
	technologies: string[];
	link: string;
}
