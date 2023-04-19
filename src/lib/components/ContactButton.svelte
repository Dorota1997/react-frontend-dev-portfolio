<script>
	import Icon from '@iconify/svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { scrollLock, modalType } from '$lib/stores';

	let element;
	let intersecting;

	const handleClick = () => {
		scrollLock.toggle();
		modalType.set('contact');
	};
</script>

<IntersectionObserver {element} bind:intersecting>
	<div class="relative">
		<div bind:this={element} class="button-container relative">
			<div class="button-wrapper">
				<button class={intersecting ? 'button' : 'button corner'} on:click={handleClick}>
					{#if intersecting}
						<span>Contact Me</span>
					{:else}
						<Icon icon="ci:mail" style="margin: auto" />
					{/if}
				</button>
			</div>
		</div>
	</div>
</IntersectionObserver>

<style>
	.button-container {
		position: relative;
		display: flex;
		height: 170px;
	}

	.button-wrapper {
		position: absolute;
		height: 100vh;
		width: 100%;
		left: 0;
		top: 0;
	}

	.button {
		position: absolute;
		width: 250px;
		margin: 0 auto;
		padding: 15px 20px;
		bottom: calc(100vh - 100px);
		right: 50%;
		transform: translate(50%);
		background-color: white;
		color: #5828e3;
		font-weight: 700;
		font-size: 0.688rem;
		line-height: 18px;
		letter-spacing: 1.54px;
		text-transform: uppercase;
		border-radius: 25px;
		border: 2px solid #5828e3;
		cursor: pointer;
		transition: all 0.4s ease-in;
	}

	.button.corner {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
		width: 64px;
		height: 64px;
		padding: 10px;
		border: 4px solid #5828e3;
		border-radius: 50%;
		z-index: 100;
		color: #5828e3;
		font-size: 32px;
		background-color: white;
	}

	.button:hover {
		box-shadow: 0 0px 20px rgb(88 40 227 / 70%);
		transition: box-shadow 0.2s ease-out;
	}

	@media (prefers-color-scheme: dark) {
		.button:hover {
			box-shadow: 0 0px 20px rgb(255 255 255 / 70%);
			transition: box-shadow 0.2s ease-out;
		}
	}
</style>
