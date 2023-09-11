import type { LayoutServerLoad } from './$types';
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

export const load: LayoutServerLoad = async () => {
	return {
		message: 'LayoutServerLoad data: App ' + today.getFullYear()
	};
};
