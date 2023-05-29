<script lang="ts">
	import { goto } from '$app/navigation';
	import { getSession, handleSession } from '$lib/session';
	import { supabaseBrowserClient, signOut } from '$lib/supabase';
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import type { UserInfo, UserWrapperInfo } from '$lib/models/user';

	console.log('VITE_VERCEL_URL', process.env.VITE_VERCEL_URL);
	console.log('VERCEL_URL', process.env.VERCEL_URL);
	process.env.VITE_VERCEL_URL;
	const { session } = getSession();

	/* hydrate the store on data refresh */
	$session = $page.data.user;

	const userFetcher = async (user: UserInfo) => {
		fetch(
			`${dev ? PUBLIC_BASE_URL : `https://${process.env.VITE_VERCEL_URL}`}:${
				dev ? 5175 : 4173
			}/api/user`,
			{
				method: 'POST', // 요청 메소드 설정
				headers: {
					'Content-Type': 'application/json' // 컨텐츠 타입 헤더 설정
					// 필요한 경우 추가적인 헤더를 여기에 입력하세요.
				},
				body: JSON.stringify({ user }) // JSON 형태로 데이터를 보냅니다.
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json(); // 응답을 JSON 형태로 변환합니다.
			})
			.then((data) => console.log(data)) // 응답 데이터를 콘솔에 출력합니다.
			.catch((error) => console.error('Error:', error)); // 에러가 발생하면 콘솔에 출력합니다.
	};
	supabaseBrowserClient.auth.onAuthStateChange(async (event, supabaseSession) => {
		await handleSession(
			event,
			supabaseSession,
			`${dev ? PUBLIC_BASE_URL : `https://${process.env.VITE_VERCEL_URL}`}:${
				dev ? 5175 : 4173
			}/api/cookie`
		);
		if (event === 'SIGNED_OUT') {
			console.log('SIGNED_OUT');
			$session = null;
			goto('/');
		}
		if (!supabaseSession) return;
		if (event === 'SIGNED_IN') {
			$session = supabaseSession.user as unknown as UserInfo;
			userFetcher(supabaseSession.user as unknown as UserInfo);

			goto('/app');
		}
	});
</script>

<nav style="border: solid; border-width: 0 0 2px; padding-bottom: 5px;">
	<a href="/">Home</a>
	{#if $session}
		<a href="/app">App</a>
		<a href="/admin">Admin</a>
		<a href="/boardList">board</a>

		<img
			style="width: 32px; height: 32px; border-radius: 9999px;"
			src={$session.user_metadata.avatar_url}
			alt="person_avatar"
		/>
		<button
			on:click={() => {
				signOut();
			}}>Logout</button
		>
	{:else}
		<a href="/boardList">board</a>

		<a href="/login">Login</a>
	{/if}
</nav>

<slot />
