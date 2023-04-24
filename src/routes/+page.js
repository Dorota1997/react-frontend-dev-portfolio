import { client, urlFor } from "$lib/client";
export const prerender = true;

export async function load({ params }) {
  const pageInfo = await client.fetch(`*[_type == "info"][0]`);
  pageInfo.bioImage = urlFor(pageInfo.bioImage).width(250).url();
  const projects = await client.fetch(
    `*[_type == "project"] | order(order asc)`
  );

  if (pageInfo && projects) {
    return {
      pageInfo,
      projects,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error"),
  };
}
