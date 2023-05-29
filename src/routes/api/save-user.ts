// save-user.js

import mongo from '../../db/mongo';
import type { RequestEvent } from './$types';

async function saveUser(req: RequestEvent, res: Response) {
	try {
		const db = mongo;
		const collection = db.collection('users');

		const { user } = req.body;

		await collection.insertOne(user);
		console.log('User saved:', user);

		res.status(200).end();
	} catch (error) {
		console.error('MongoDB Error:', error);
		res.status(500).json({ message: 'Failed to save user' });
	}
}

module.exports = saveUser;
