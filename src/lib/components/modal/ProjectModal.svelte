<script>
	import { currentLanguage, scrollLock, modalProps } from '../../stores';
	import { urlFor } from '../../client';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import WindowBar from '..//WindowBar.svelte';
	import Icon from '@iconify/svelte';
	import { fly, blur } from 'svelte/transition';

	let carousel; // for calling methods of the carousel instance
</script>

<div
	class="fixed z-[999] w-[100svw] h-[100svh] flex flex-col justify-center items-center bg-black/75"
	on:click|self={scrollLock.toggle}
	on:keypress={null}
	transition:blur={{ duration: 500 }}
>
	<div
		class="w-full max-w-[800px] h-full max-h-[1100px] flex flex-col mx-[auto] my-[24px] bg-white dark:bg-darkSmoke rounded-xl"
		in:fly={{ y: 200, duration: 500 }}
		out:blur
	>
		<WindowBar hasCloseButton />
		<div class="overflow-auto">
			{#if browser}
				<Carousel bind:this={carousel} autoplay infinite swiping>
					{#each $modalProps.images as image}
						<img classname="flex justify-center items-center" src={urlFor(image).url()} alt="" />
					{/each}
				</Carousel>
			{/if}
			<div class="px-[16px] md:px-[32px]">
				<p class="text-[24px] font-bold my-[24px]">{$modalProps.title[$currentLanguage]}</p>
				<ul class="flex gap-[16px] mb-[24px] text-[14px]">
					<li>
						<a
							href={$modalProps.githubURL}
							class="flex justify-center items-center px-[12px] py-[6px] bg-purple-600 rounded-full text-white font-bold hover:shadow-glowOuter dark:hover:shadow-glowWhite transition-shadow"
							>Github<Icon icon="mdi:github" width="24px" style="margin-left: 8px" /></a
						>
					</li>
					<li>
						<a
							href={$modalProps.liveSiteURL}
							class="flex justify-center items-center px-[12px] py-[6px] bg-black dark:bg-white rounded-full text-white dark:text-black font-bold hover:shadow-glowOuter dark:hover:shadow-glowWhite transition-shadow"
							>Live Site<Icon icon="iconoir:www" width="24px" style="margin-left: 8px" /></a
						>
					</li>
				</ul>
				<p class="mb-[24px]">{$modalProps.description[$currentLanguage]}</p>
				<ul class="flex flex-wrap justify-center mt-[auto] text-center">
					{#each $modalProps.technologies as tech}
						<li class="m-[16px] flex flex-col">
							<Icon icon={tech.class} width="50px" style="margin: auto" />{tech.name}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
