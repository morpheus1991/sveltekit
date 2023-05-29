import type { ObjectId } from 'mongodb';

export default class User {
	public text: string;
	public id: ObjectId;
	public uuid: string;
	public email: string;
	public email_confirmed_at: string;
	public user_metadata: {
		avatar_url: string;
		email: string;
		email_verified: true;
		full_name: string;
		iss: string;
		name: string;
		picture: string;
		provider_id: string;
		sub: string;
	};
	public identities: Array<{
		id: string;
		user_id: string;
		identity_data: Array<{
			avatar_url: string;
			email: string;
			email_verified: boolean;
			full_name: string;
			iss: string;
			name: string;
			picture: string;
			provider_id: string;
			sub: string;
		}>;
		provider: string;
		last_sign_in_at: string;
		created_at: string;
		updated_at: string;
	}>;
	constructor(v: UserWrapperInfo) {
		console.log('constructor', v);
		this.text = v.user.text;
		this.id = v.user.id;
		this.uuid = v.user.uuid;
		this.email = v.user.email;
		this.email_confirmed_at = v.user.email_confirmed_at;
		this.user_metadata = v.user.user_metadata;
		this.identities = v.user.identities;
	}
}

export type UserInfo = {
	text: string;
	uuid: string;
	id: ObjectId;
	email: string;
	email_confirmed_at: string;
	user_metadata: {
		avatar_url: string;
		email: string;
		email_verified: true;
		full_name: string;
		iss: string;
		name: string;
		picture: string;
		provider_id: string;
		sub: string;
	};
	identities: Array<{
		id: string;
		user_id: string;
		identity_data: Array<{
			avatar_url: string;
			email: string;
			email_verified: boolean;
			full_name: string;
			iss: string;
			name: string;
			picture: string;
			provider_id: string;
			sub: string;
		}>;
		provider: string;
		last_sign_in_at: string;
		created_at: string;
		updated_at: string;
	}>;
};
export type UserWrapperInfo = {
	user: UserInfo;
};
