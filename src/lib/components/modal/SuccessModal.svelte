<script>
	import Icon from '@iconify/svelte';
	import { blur } from 'svelte/transition';
</script>

<div transition:blur>
	<p class="text-center text-[32px] font-bold mb-[32px]">Success!</p>
	<Icon
		icon="material-symbols:check-circle-rounded"
		width="250px"
		color="green"
		style="margin: auto"
	/>
</div>
