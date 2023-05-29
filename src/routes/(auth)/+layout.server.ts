import { redirect } from '@sveltejs/kit';
import { supabaseServerClient } from '$lib/supabase';
import type { LocalsInfo } from '../../types';

export const load = async ({ locals }: LocalsInfo) => {
	console.log(locals.session.user.identities[0], 'locals');
	if (!locals.session.user) throw redirect(307, '/login');

	/* use the server client */
	//let { data, error } = await supabaseServerClient.from('').select('')
};
