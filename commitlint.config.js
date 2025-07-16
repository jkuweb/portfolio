export default {
	extends: ['@commitlint/config-conventional'],
	formatter: '@commitlint/format',
};
/*
Las reglas convencionales son las siguientes:

		chore: Cambios en tareas, configuración, y otros aspectos relacionados con el mantenimiento del proyecto.
		docs: Cambios en la documentación.
		feat: Nuevas características.
		fix: Correcciones de errores.
		style: Cambios que no afectan el significado del código (espacios en blanco, formato, punto y coma que faltan, etc.).
		test: Añadir o modificar pruebas.

*/
