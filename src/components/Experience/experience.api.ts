import client from '@/lib/client';
import type { Experience, Enterprise } from './experience.model';

export async function getExperience(): Promise<
	(Experience & { empresaData?: Enterprise[] })[]
> {
	const experience = await client.getContentList<Experience>({
		contentType: 'Experience',
	});

	const experienceWithEmpresa = await Promise.all(
		experience.map(async (exp) => {
			if (exp.enterprises.length > 0) {
				const empresaData = await Promise.all(
					exp.enterprises.map(async (empresaId) => {
						const empresa = await client.getContent<Enterprise>({
							id: empresaId,
						});

						return empresa;
					}),
				);

				return { ...exp, empresaData };
			}

			return exp;
		}),
	);

	return experienceWithEmpresa;
}
