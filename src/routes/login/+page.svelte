<script lang="ts">
	import { signIn } from '$lib/supabase';
	// import mongo from '../../db/mongo';
	import { getSession } from '$lib/session';
	const { session } = getSession();
	// const COLLECTION= mongo.collection('users')
</script>

<button
	style="margin-top: 12px;"
	on:click={() => {
		signIn('google');
		// COLLECTION.insertOne({$session})
		console.log('session', $session);
		// fetch()
	}}>Github Login</button
>
