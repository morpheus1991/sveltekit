import { createClient, SupabaseClient, type Provider } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { dev } from '$app/environment';
import { VITE_VERCEL_URL } from '$env/static/private';

export const supabaseBrowserClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export let supabaseServerClient: SupabaseClient | undefined;
export const createSupabaseServerClient = (access_token: string) => {
	supabaseServerClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		global: {
			headers: { Authorization: `Bearer ${access_token}` }
		},
		auth: {
			autoRefreshToken: false,
			persistSession: false,
			detectSessionInUrl: false
		}
	});
};

export const signIn = async (provider: string) => {
	try {
		const { error } = await supabaseBrowserClient.auth.signInWithOAuth({
			provider: provider as Provider,
			options: {
				redirectTo: `${VITE_VERCEL_URL}:${dev ? 5175 : 4173}/login`
			}
		});
		if (error) console.error(error);
	} catch (err: unknown) {
		console.error(err);
	}
};

export const signOut = async () => {
	try {
		const { error } = await supabaseBrowserClient.auth.signOut();
		if (error) console.error(error);
	} catch (err: unknown) {
		console.error(err);
	}
};
