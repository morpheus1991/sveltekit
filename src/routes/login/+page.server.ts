// import { redirect } from '@sveltejs/kit';
// import type { LocalsInfo } from '../../../types';
// export const load = async ({ locals }: LocalsInfo) => {
// 	if (!locals.session.user) throw redirect(307, '/login');
// };
// import { env } from '$env/dynamic/private';

// /** @type {import('./$types').LayoutServerLoad} */
// export function load() {
// 	return {
// 		deploymentGitBranch: env
// 	};
// }
// export const load = ({ locals }) => {
// 	const user = locals.session.user;
// 	return {
// 		user
// 	};
// };
import { env } from '$env/dynamic/private';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	return {
		deploymentGitBranch: env
	};
}
