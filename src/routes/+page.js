import { client, urlFor } from "$lib/client";

export async function load() {
  const fetchPageInfo = async () => {
    const pageInfo = await client.fetch(`*[_type == "info"][0]`);
    pageInfo.bioImage = urlFor(pageInfo.bioImage).width(250).url();
    return pageInfo;
  };

  const fetchProjects = async () => {
    const projects = await client.fetch(
      `*[_type == "project"] | order(order asc)`
    );
    return projects;
  };

  return {
    pageInfo: fetchPageInfo(),
    projects: fetchProjects(),
  };
}
