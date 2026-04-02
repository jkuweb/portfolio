import client from '@/lib/client';
import type { Work, WorkWithItems, Works } from './work.model';

export async function getWorks(): Promise<WorkWithItems[]> {
	const works = await client.getContentList<Works>({
		contentType: 'Works',
	});

	const workList = await Promise.all(
		works.map(async (work) => {
			const singleWorkData = await Promise.all(
				work.workList.map((workId) => client.getContent<Work>({ id: workId })),
			);

			return { ...work, singleWorkData };
		}),
	);

	return workList;
}
