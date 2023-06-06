<script lang="ts">
	import { onMount } from 'svelte';
	import { getBoards } from '../../service/board';

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	console.log('board List data 테스트', data.VERCEL_URL);
	// let boards = [];
	// onMount(async () => {
	// 	const data = await getBoards(data.VERCEL_URL);
	// 	console.log(data);
	// 	boards = data;
	// });

	console.log(`${data.VERCEL_URL}:${dev ? 5175 : 4173}/api/boards`);
</script>

<!-- 
{#each boards as board}
	<div>{board._id}</div>
{/each} -->

<a href="./boardList/add">글쓰기</a>
