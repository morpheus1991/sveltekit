import type { RequestEvent } from '../$types';
import { comments } from '../../../lib/comments';

export function GET() {
	return new Response(JSON.stringify(comments), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
export async function POST(requestEvent: RequestEvent) {
	const { request } = requestEvent;
	const { text } = await request.json();

	const newComment = {
		id: comments.length + 1,
		text
	};
	comments.push(newComment);
	return new Response(JSON.stringify(newComment), { status: 201 });
}
