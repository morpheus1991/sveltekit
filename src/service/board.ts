import { dev } from '$app/environment';
import type { BoardCreateBody } from '$lib/models/board';
import { json } from '@sveltejs/kit';
import { process.env.VITE_VERCEL_URL } from '../constants';

export const getBoards = async (id?: string) => {
	const endPoint = id
		? `${process.env.VITE_VERCEL_URL}:${dev ? 5175 : 4173}/api/boards/${id}`
		: `${process.env.VITE_VERCEL_URL}:${dev ? 5175 : 4173}/api/boards`;

	console.log('endPoint', endPoint);

	return await fetch(endPoint)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json(); // 응답을 JSON 형태로 변환합니다.
		})
		.catch((error) => console.error('Error:', error)); // 에러가 발생하면 콘솔에 출력합니다.
};

export const createBoard = async (board: BoardCreateBody) => {
	const endPoint = `${process.env.VITE_VERCEL_URL}:${dev ? 5175 : 4173}/api/boards`;
	console.log('endPoint', endPoint);
	return await fetch(endPoint, {
		method: 'POST',
		body: JSON.stringify(board)
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json(); // 응답을 JSON 형태로 변환합니다.
		})
		.catch((error) => console.error('Error:', error)); // 에러가 발생하면 콘솔에 출력합니다.
};
