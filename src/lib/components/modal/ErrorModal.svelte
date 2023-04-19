<script>
	import Icon from '@iconify/svelte';
	import { blur } from 'svelte/transition';
</script>

<div transition:blur>
	<p class="text-center text-[32px] font-bold mb-[32px]">Something broke on my end :(</p>
	<p class="text-center font-bold mb-[32px]">Please email me: seanredmon@seanred.io</p>
	<Icon icon="icon-park:link-cloud-faild" width="250px" color="red" style="margin: auto" />
</div>
