<script>
	import { currentLanguage } from '$lib/stores';
	import Icon from '@iconify/svelte';
	export let language = 'en';
	export let isSelected = false;
	const icons = {
		en: 'circle-flags:uk',
		zh: 'emojione:flag-for-china',
		fr: 'emojione:flag-for-france'
	};
</script>

<button
	class={`text-[50px] transition-all border-electroBlue rounded-full ${
		isSelected === true ? 'shadow-glowOuter dark:shadow-glowWhite' : 'shadow-none opacity-50'
	}`}
	on:click={() => currentLanguage.set(language)}><Icon icon={icons[language]} /></button
>
