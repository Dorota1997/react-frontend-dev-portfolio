import { client } from '$lib/client';

export async function load({ params }) {
	const pageInfo = await client.fetch(`*[_type == "info"][0]`);
	const projects = await client.fetch(`*[_type == "project"] | order(order asc)`);

	if (pageInfo && projects) {
		return {
			pageInfo,
			projects
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
