<script>
	import { scrollLock } from '../stores';
	import Icon from '@iconify/svelte';

	export let hasCloseButton;
</script>

<div class="flex justify-between h-[50px] mb-[24px] p-[16px] bg-black dark:bg-smoke text-white rounded-t-xl">
	<Icon icon="mdi:vs-code" width="24px" />
	{#if hasCloseButton}<button on:click={scrollLock.toggle} class="hover:opacity-[0.5]"
			><Icon icon="ic:round-close" width="24px" /></button
		>{/if}
</div>
