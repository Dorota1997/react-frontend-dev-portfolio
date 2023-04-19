import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
	dataset: 'production', // this is from those question during 'sanity init'
	apiVersion: '2022-02-21',
	useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
