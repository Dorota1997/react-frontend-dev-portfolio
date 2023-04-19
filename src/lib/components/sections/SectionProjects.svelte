<script>
	export let projects;
	import { currentLanguage, scrollLock, modalProps, modalType } from '$lib/stores';

	const handleClickProject = (props) => {
		scrollLock.toggle();
		modalProps.set(props);
		modalType.set('project');
	};
</script>

<section class="max-w-[1200px] mx-auto">
	<h2>Projects</h2>
	<ul class="flex flex-wrap justify-center items-center gap-[32px]">
		{#each projects as project}
			<li
				class="rounded-xl border-black dark:border-smoke border-2 hover:scale-[1.05] transition-all hover:rotate-[-15deg] origin-bottom-left cursor-pointer"
			>
				<button
					class="p-[12px] bg-white dark:bg-darkSmoke"
					on:click={() => handleClickProject(project)}
				>
					<video class="w-[320px]" src={project.preview} autoplay muted loop>
						<track kind="captions" /></video
					>
					<p
						class="w-[100px] mx-auto bg-black dark:bg-smoke rounded-bl-lg rounded-br-lg text-center text-white"
					>
						{project.startDate}
					</p>
					<p class="my-[16px] text-black dark:text-white text-center font-bold text-[24px]">
						{project.title[$currentLanguage]}
					</p>
				</button>
			</li>
		{/each}
	</ul>
</section>
