<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getBoards } from '../../../service/board';
	/** @type {import('./$types').LayoutServerData} */
	export let data;
	console.log('data.deploymentGitBranch.VERCEL_URL', data.deploymentGitBranch.VERCEL_URL);
	const boardId = $page.params.boardId;
	let board;

	onMount(async () => {
		board = await getBoards(data.deploymentGitBranch.VERCEL_URL, boardId);
		console.log('board', board);
	});
</script>

{#if board}
	<h1>게시글{board.title}</h1>
{/if}
