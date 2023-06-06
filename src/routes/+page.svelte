<script>
	import { getSession } from '$lib/session';
	import { dev } from '$app/environment';
	import { baseUrl } from '../stores';

	// const { session } = getSession();
	// $session = session;
	// const clickHandler = () => {
	// 	console.log($session);
	// 	fetch(`${$baseUrl}/boards`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json' // 컨텐츠 타입 헤더 설정
	// 			// 필요한 경우 추가적인 헤더를 여기에 입력하세요.
	// 		},
	// 		body: JSON.stringify({ text: 'test', auth: $session }) // JSON 형태로 데이터를 보냅니다.
	// 	});
	// };
</script>

<h1>HOME</h1>

<button
	on:click={() => {
		// clickHandler();
	}}>aaa</button
>
