import { ObjectId } from 'mongodb';
import type User from './user';

export default class Board {
	id: ObjectId;
	like: number;
	create_at: Date;

	constructor(
		public auth: User,
		public title: string,
		public text: string,
		public is_writted_admin: boolean
	) {
		this.id = new ObjectId();
		this.like = 0;
		this.create_at = new Date();
	}
}

export type BoardCreateBody = {
	auth: User;
	title: string;
	text: string;
	is_writted_admin: boolean;
};
