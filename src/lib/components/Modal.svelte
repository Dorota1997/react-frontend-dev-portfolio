<script>
	import { scrollLock, modalType } from '../stores';
	import ProjectModal from './modal/ProjectModal.svelte';
	import ContactModal from './modal/ContactModal.svelte';
</script>

{#if $scrollLock && $modalType === 'project'}
	<ProjectModal />
{:else if $scrollLock && $modalType === 'contact'}
	<ContactModal />
{/if}
