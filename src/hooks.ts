// hooks.ts
export async function handle({ request, resolve }) {
	const cookies = document.cookie;

	const refreshToken = cookies
		.split(';')
		.find((cookie) => cookie.trim().startsWith('sb-refresh-token='));
	const accessToken = cookies
		.split(';')
		.find((cookie) => cookie.trim().startsWith('sb-access-token='));
	const refreshTokenValue = refreshToken ? refreshToken.split('=')[1] : null;
	const accessTokenValue = accessToken ? accessToken.split('=')[1] : null;
	console.log('handlehandlehandle');
	// If the cookie was not found, continue as normal
	if (!session) {
		return await resolve(request);
	}

	// Extract the value of the session cookie
	const value = session.split('=')[1];

	// Add the value to our request object, so we can access it in endpoints and server-side rendered pages
	request.locals.session = value;

	const response = await resolve(request);

	return {
		...response,
		headers: {
			...response.headers
		}
	};
}

// export function getSession(request) {
// 	return {
// 		session: request.locals.session || null
// 	};
// }
