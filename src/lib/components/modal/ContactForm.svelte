<script>
	export let handleSubmit;
	export let loading;
	export let status;
	import { Rainbow } from 'svelte-loading-spinners';
</script>

<div transition:blur>
	<p class="text-center text-[32px] font-bold mb-[32px]">Contact Sean</p>
	<form on:submit={handleSubmit} class="flex flex-col justify-center px-[16px]">
		<label>
			Your Name
			<input
				class="focus:shadow-glow dark:focus:shadow-glowWhite"
				name="name"
				type="text"
				required
			/>
		</label>
		<label>
			Email
			<input
				class="focus:shadow-glow dark:focus:shadow-glowWhite"
				name="email"
				type="email"
				required
			/>
		</label>
		<label>
			Message
			<input
				class="focus:shadow-glow dark:focus:shadow-glowWhite"
				name="message"
				type="text"
				required
			/>
		</label>
		{#if loading}
			<div
				class="w-[250px] flex justify-center mx-auto py-[15px] mt-[24px] px-[20px] text-electroBlue text-[24px] hover:Rainbow-glow transition-Rainbow disabled:Rainbow-none"
			>
				<Rainbow size="60" color="#5828E3" unit="px" duration="1s" />
			</div>
		{:else}
			<button
				type="submit"
				disabled={loading}
				class="w-[250px] flex justify-center mx-auto py-[15px] mt-[24px] px-[20px] rounded-full border-2 border-electroBlue dark:border-white text-electroBlue dark:text-white text-[24px] hover:shadow-glow dark:hover:shadow-glowWhite transition-all disabled:shadow-none"
				>Send
			</button>
		{/if}
	</form>
</div>
