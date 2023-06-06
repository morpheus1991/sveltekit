<script lang="ts">
	import { onMount } from 'svelte';
	import { getBoards } from '../../service/board';

	export let baseUrl: string = '';

	console.log('board List data 테스트', baseUrl);
	let boards = [];
	onMount(async () => {
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
