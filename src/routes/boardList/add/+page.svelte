<script lang="ts">
	import { createBoard } from '../../../service/board';

	import { getSession } from '$lib/session';
	import { goto } from '$app/navigation';
	const { session } = getSession();
	let title: string;
	let text: string;
	let isWrittedAdmin: boolean = false;
</script>

<div>
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
				createBoard({ title, text, is_writted_admin, auth: $session }).then((board) => {
					goto(`/boardList/${board._id}`);
				});
			}}>submit</button
		>
	</form>
</div>
