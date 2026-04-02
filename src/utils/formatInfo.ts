import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export function formatInfo(text: string): string {
	const html = marked.parse(text) as string;

	return DOMPurify.sanitize(html);
}
