// export const load = ({ locals }) => {
// 	const user = locals.session.user;
// 	return {
// 		user
// 	};
// };
// import { env } from '$env/dynamic/private';

// /** @type {import('./$types').LayoutServerLoad} */
// export function load() {
// 	return {
// 		deploymentGitBranch: env
// 	};
// }

import { PUBLIC_VITE_VERCEL_URL } from '$env/static/public';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	return {
		deploymentGitBranch: PUBLIC_VITE_VERCEL_URL
	};
}
