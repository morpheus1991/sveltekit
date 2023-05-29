<script>
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { getSession } from '$lib/session';
	import { dev } from '$app/environment';

	const { session } = getSession();
	const clickHandler = () => {
		console.log($session);
		fetch(`${dev ? PUBLIC_BASE_URL : NEXT_PUBLIC_VERCEL_URL}:${dev ? 5175 : 4173}/boards`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json' // 컨텐츠 타입 헤더 설정
				// 필요한 경우 추가적인 헤더를 여기에 입력하세요.
			},
			body: JSON.stringify({ text: 'test', auth: $session }) // JSON 형태로 데이터를 보냅니다.
		});
	};
</script>

<h1>HOME</h1>
<p>👇 will redirect you to /login if you aren't authenticated.</p>
<a href="/app">App</a>

<button
	on:click={() => {
		clickHandler();
	}}>aaa</button
>
