import { VERCEL_URL, BASE_URL, VITE_VERCEL_URL } from '$env/static/private';

export const baseUrl = BASE_URL || VERCEL_URL || VITE_VERCEL_URL;
