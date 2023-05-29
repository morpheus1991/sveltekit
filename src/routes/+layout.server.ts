export const load = ({ locals }) => {
	const user = locals.session.user;
	return {
		user
	};
};

import { VERCEL_COMMIT_REF } from '$env/static/private';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	return {
		deploymentGitBranch: VERCEL_COMMIT_REF
	};
}
