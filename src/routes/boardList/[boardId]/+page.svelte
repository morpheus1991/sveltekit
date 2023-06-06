<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getBoards } from '../../../service/board';
	import { baseUrl } from '../../../stores';

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	console.log('board List data', data);

	// const boardId = $page.params.boardId;
	// console.log('baseUrl boardList', baseUrl);
	// let board;

	// onMount(async () => {
	// 	board = await getBoards($baseUrl, boardId);
	// 	console.log('board', board);
	// });
</script>

{#if board}
	<h1>게시글{board.title}</h1>
{/if}
