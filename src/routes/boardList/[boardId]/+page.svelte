<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getBoards } from '../../../service/board';

	const boardId = $page.params.boardId;
	let board;
	onMount(async () => {
		board = await getBoards(boardId);
		console.log('board', board);
	});
</script>

{#if board}
	<h1>게시글{board.title}</h1>
{/if}
