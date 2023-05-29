export const google = {
	clientId: 'YOUR_GOOGLE_CLIENT_ID',
	clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
	authUrl:
		'https://accounts.google.com/o/oauth2/v2/auth?scope=email&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:5000/auth/callback/google&response_type=code&client_id=YOUR_GOOGLE_CLIENT_ID',
	tokenEndpoint: 'https://oauth2.googleapis.com/token',
	userEndpoint: 'https://openidconnect.googleapis.com/v1/userinfo'
};

export const kakao = {
	clientId: 'YOUR_KAKAO_CLIENT_ID',
	clientSecret: 'YOUR_KAKAO_CLIENT_SECRET',
	authUrl:
		'https://kauth.kakao.com/oauth/authorize?client_id=YOUR_KAKAO_CLIENT_ID&redirect_uri=http://localhost:5000/auth/callback/kakao&response_type=code',
	tokenEndpoint: 'https://kauth.kakao.com/oauth/token',
	userEndpoint: 'https://kapi.kakao.com/v2/user/me'
};
