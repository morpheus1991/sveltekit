import type { ObjectId } from 'mongodb';
import type { RequestEvent } from './$types';
import { json } from '@sveltejs/kit';
import Board from '../../../lib/models/board';
import mongo from '../../../db/mongo';
import type { UserWrapperInfo } from '$lib/models/user';

const COLLECTION = mongo.collection('boards');
const findBoard = async (id: ObjectId) => {
	const board = await COLLECTION.findOne(id);
	return board;
};

export async function POST(requestEvent: RequestEvent) {
	const { auth, title, text, is_writted_admin } = await requestEvent.request.json();
	console.log(auth, 'user');
	const board = new Board(auth as UserWrapperInfo['user'], title, text, is_writted_admin);
	await COLLECTION.insertOne(board);
	return json(board);
}

export async function GET(requestEvent: RequestEvent) {
	const boards = await COLLECTION.find().sort({ _id: -1 }).limit(20).toArray();
	return json(boards);
}
