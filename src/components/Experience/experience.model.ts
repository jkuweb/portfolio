export interface Experience {
	id: string;
	language: 'es';
	lastUpdate: string;
	title: string;
	enterprises: string[];
	role?: string;
	date?: string;
	info?: string;
}

export interface Enterprise {
	id: string;
	language: 'es';
	lastUpdate: string;
	name: string;
	info?: string;
	logo?: string;
	initialDate?: string;
	endDate?: string;
	url?: string;
}
