import type { Media } from '@content-island/api-client';

export interface Works {
	id: string;
	language: 'es';
	lastUpdate: string;
	workList: string[];
}

export interface Work {
	id: string;
	language: 'es';
	lastUpdate: string;
	title: string;
	info: string;
	image: Media;
	technologies: string[];
	link: string;
	repo: string;
}

export interface WorkWithItems extends Works {
	singleWorkData: Work[];
}
