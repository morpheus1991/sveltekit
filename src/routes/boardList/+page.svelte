<script lang="ts">
	import { onMount } from 'svelte';
	import { getBoards } from '../../service/board';
	import { dev } from '$app/environment';
	import { getSession } from '$lib/session';
	import { goto } from '$app/navigation';
	/** @type {import('./$types').LayoutServerData} */
	export let data;

	console.log('data', data);
	let boards = [];

	const baseUrl = `https://${data.deploymentGitBranch.VERCEL_URL}`;
	console.log(baseUrl);
	onMount(async () => {
		if (!getSession()) {
			goto('/');
		}
		const data = await getBoards(baseUrl);
		console.log(data);
		boards = data;
	});

	console.log(`${baseUrl}/api/boards`);
</script>

{#each boards as board}
	<div>{board._id}</div>
{/each}

<a href="./boardList/add">글쓰기</a>
