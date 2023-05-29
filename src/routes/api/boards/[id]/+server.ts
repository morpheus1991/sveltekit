import { ObjectId } from 'mongodb';
import type { RequestEvent } from '../$types';
import mongo from '../../../../db/mongo';
import { json } from '@sveltejs/kit';

const COLLECTION = mongo.collection('boards');

const findBoard = async (id: string) => {
	const board = await COLLECTION.findOne({ _id: new ObjectId(id) });
	console.log('findBoard', board);
	return board;
};
export async function GET(requestEvent: RequestEvent) {
	const { id } = requestEvent.params as { id: string };
	console.log('a', id);
	const board = await findBoard(id);
	return json(board);
}
