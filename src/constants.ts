/** @type {import('./$types').LayoutServerData} */
export let data;

console.log(data);
export const testUrl = data;
export const baseUrl = import.meta.env.VITE_VERCEL_URL;
