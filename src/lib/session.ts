import { error } from '@sveltejs/kit';
import { setContext, getContext, hasContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import type { UserInfo } from './models/user';

interface SessionContext {
	session: Writable<UserInfo | null>; // You may replace unknown with your session type
}

const keys = { session: Symbol() };

const getCookieValue = (cookieName: string) => {
	const cookies = typeof window === 'undefined' ? '' : document.cookie;
	const cookie = cookies.split(';').find((cookie) => cookie.trim().startsWith(`${cookieName}=`));
	return cookie ? cookie.split('=')[1] : null;
};

const initSession = (): SessionContext => {
	const existingSession = getCookieValue('sb-access-token');
	console.log('existingSession', existingSession);
	const sessionContext = { session: writable<UserInfo | null>(existingSession || null) };
	setContext(keys.session, sessionContext);
	return sessionContext;
};

export const getSession = (): SessionContext => {
	console.log('getSession', hasContext(keys.session));
	initSession();
	// return hasContext(keys.session) ? getContext<SessionContext>(keys.session) : initSession();
};

export const handleSession = async (
	event: string,
	session: unknown,
	api: string
): Promise<boolean> => {
	// You may replace unknown with your session type
	const setCookie = async (method: string, body: string | null = null) => {
		try {
			await fetch(api, {
				method,
				body
			});
		} catch (err) {
			console.error('set cookie error', err);
			// throw error(500, err);
		}
	};

	if (event === 'SIGNED_OUT') {
		await setCookie('DELETE');
	}

	if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
		await setCookie('POST', JSON.stringify(session));
	}

	return true;
};
