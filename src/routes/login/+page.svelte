<script lang="ts">
	import { signIn } from '$lib/supabase';
	// import mongo from '../../db/mongo';
	import { getSession } from '$lib/session';
	const { session } = getSession();
	// const COLLECTION= mongo.collection('users')

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	console.log('data', data);
	const baseUrl = `https://${data.deploymentGitBranch.VERCEL_URL}`;
	console.log(baseUrl);
</script>

<button
	style="margin-top: 12px;"
	on:click={() => {
		signIn('google', baseUrl);
	}}>Google Login</button
>
