<script lang="ts">
	import { createBoard } from '../../../service/board';

	import { getSession } from '$lib/session';
	import { goto } from '$app/navigation';
	const { session } = getSession();
	let title: string;
	let text: string;
	let isWrittedAdmin: boolean = false;

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	console.log('data', data);
	const baseUrl = `https://${data.deploymentGitBranch.VERCEL_URL}`;
</script>

<div>
	{#if $session}
		<form action="">
			<fieldset>
				<legend>add</legend>
				<label for="title">title</label>
				<input type="text" name="title" id="title" bind:value={title} />

				<label for="text" />
				<input type="text" name="text" id="text" bind:value={text} />

				<label for="is_writted_admin" />
				<input type="text" name="is_writted_admin" id="is_writted_admin" />
			</fieldset>

			<button
				type="submit"
				on:click={(e) => {
					e.preventDefault();
					createBoard(baseUrl, {
						title,
						text,
						is_writted_admin: isWrittedAdmin,
						auth: $session
					}).then((board) => {
						goto(`/boardList/${board._id}`);
					});
				}}>submit</button
			>
		</form>
	{/if}
</div>
