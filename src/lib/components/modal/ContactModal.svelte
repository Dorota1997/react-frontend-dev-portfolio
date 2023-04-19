<script>
	import { scrollLock } from '../../stores';
	import WindowBar from '../WindowBar.svelte';
	import { fly, blur } from 'svelte/transition';
	import SuccessModal from './SuccessModal.svelte';
	import ErrorModal from './ErrorModal.svelte';
	import ContactForm from './ContactForm.svelte';

	let loading = false;
	let status;

	async function handleSubmit(e) {
		e.preventDefault();
		loading = true;
		const formData = new FormData(e.target);
		const json = Object.fromEntries(formData.entries());

		const response = await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify(json),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		loading = false;
		if (response.ok) {
			status = 'success';
		} else {
			status = 'error';
		}
	}
</script>

<div
	class="fixed z-[999] w-[100svw] h-[100svh] flex flex-col justify-center items-center bg-black/75"
	on:click|self={scrollLock.toggle}
	on:keypress={null}
	transition:blur={{ duration: 500 }}
>
	<div
		class="w-full max-w-[600px] h-full max-h-[600px] flex flex-col mx-[auto] my-[24px] bg-white dark:bg-darkSmoke rounded-xl overflow-hidden"
		in:fly={{ y: 200, duration: 500 }}
		out:blur
	>
		<WindowBar hasCloseButton />

		{#if !loading && status === 'success'}
			<SuccessModal />
		{:else if !loading && status === 'error'}
			<ErrorModal />
		{:else}
			<ContactForm {status} {loading} {handleSubmit} />
		{/if}
	</div>
</div>
