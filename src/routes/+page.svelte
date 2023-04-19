<script>
	export let data;
	let { pageInfo, projects } = data;
	import { urlFor } from '$lib/client';
	import { currentLanguage } from '$lib/stores';
	import SectionHero from '$lib/components/sections/SectionHero.svelte';
	import SectionProjects from '../lib/components/sections/SectionProjects.svelte';
	import SectionAbout from '$lib/components/sections/SectionAbout.svelte';
	import Footer from '../lib/components/sections/Footer.svelte';
	import Modal from '../lib/components/Modal.svelte';
</script>

<Modal />

<SectionHero titles={pageInfo.titles[0]} currentLanguage={$currentLanguage} />
<SectionProjects {projects} />
<SectionAbout
	bioImage={urlFor(pageInfo.bioImage).width(250).url()}
	bioImageAlt={pageInfo.name}
	bioText={pageInfo.bioText[$currentLanguage]}
/>
<Footer />
