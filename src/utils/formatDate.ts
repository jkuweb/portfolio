export function formatDateRange(
	initialDate?: string,
	endDate?: string,
): string {
	if (!initialDate) {
		return '';
	}

	const formatDate = (dateStr: string): string => {
		const date = new Date(dateStr);
		const formatted = date.toLocaleDateString('es-ES', {
			month: 'short',
			year: 'numeric',
		});

		return formatted.charAt(0).toUpperCase() + formatted.slice(1);
	};

	const start = formatDate(initialDate);
	const end = endDate ? formatDate(endDate) : 'Actual';

	return `${start} - ${end}`;
}
