import { json, type RequestEvent } from '@sveltejs/kit';
import { comments } from '../../../../lib/comments';

type Comments = {
	id: number;
	text: string;
}[];
const findComment = (id: string, comments: Comments) => {
	return comments.find((comment) => comment.id === Number(id));
};
export function GET(requestEvent: RequestEvent) {
	const { params } = requestEvent;
	const { commentId } = params;
	if (commentId) return json(findComment(commentId, comments));
}

export async function PATCH(requestEvent) {
	const { params, request } = requestEvent;
	const { commentId } = params;
	const { text } = await request.json();

	const findedComment = findComment(commentId, comments);
	if (findedComment) findedComment.text = text;
	console.log(comments);
	return json(findComment(commentId, comments));
}
