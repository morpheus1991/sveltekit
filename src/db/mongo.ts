import { MONGO_URL } from '$env/static/private';
import { MongoClient } from 'mongodb';

const client = new MongoClient(MONGO_URL);

export function start_mongo() {
	console.log('start mongo...');
	return client.connect().then(() => {
		console.log('connected success!');
	});
}

export default client.db();
