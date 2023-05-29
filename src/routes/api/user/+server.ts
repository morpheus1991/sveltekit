// import { json, type RequestEvent } from '@sveltejs/kit';
import { json, type RequestEvent } from '@sveltejs/kit';
import mongo from '../../../db/mongo';
import User from '$lib/models/user';
import { ObjectId } from 'mongodb';

const COLLECTION = mongo.collection('users');
export async function POST(requestEvent: RequestEvent) {
	console.log('실행됨');
	const v = await requestEvent.request.json();
	console.log(v, 'v');
	console.log(v.user.id, 'v.user.id');
	const user = await COLLECTION.findOne({ uuid: v.uuid });

	console.log(user, 'user');
	if (!user) {
		const newUser = new User(v);
		await COLLECTION.insertOne(newUser);
		return json(newUser);
	}
	// const board = new Board(text);

	return json(user);
}
