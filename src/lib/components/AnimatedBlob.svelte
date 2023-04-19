<script>
	import KUTE from 'kute.js';
	import { browser } from '$app/environment';

	if (browser) {
		const tween = KUTE.fromTo(
			'#blob1',
			{ path: '#blob1' },
			{ path: '#blob2' },
			{ repeat: 999, duration: 6000, yoyo: true }
		);
		tween.start();
	}
</script>

<div class="z-[-10] absolute top-0 bottom-0 frosted-glass">
	<svg
		id="visual"
		viewBox="0 0 900 600"
		width="900"
		height="600"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		version="1.1"
	>
		<g transform="translate(450 300)"
			><path
				id="blob1"
				d="M71.7 -124.1C93.3 -111.6 111.6 -93.3 124.1 -71.7C136.6 -50 143.3 -25 143.3 0C143.3 25 136.6 50 124.1 71.7C111.6 93.3 93.3 111.6 71.7 124.1C50 136.6 25 143.3 0 143.3C-25 143.3 -50 136.6 -71.7 124.1C-93.3 111.6 -111.6 93.3 -124.1 71.7C-136.6 50 -143.3 25 -143.3 0C-143.3 -25 -136.6 -50 -124.1 -71.7C-111.6 -93.3 -93.3 -111.6 -71.7 -124.1C-50 -136.6 -25 -143.3 0 -143.3C25 -143.3 50 -136.6 71.7 -124.1"
				fill="#6600FF"
			/></g
		>
		<g transform="translate(473.31555057630715 323.040348408233)" style="visibility: hidden"
			><path
				id="blob2"
				d="M58.1 -97.9C70.5 -93.4 72.5 -68.2 67.3 -48.4C62.2 -28.7 49.8 -14.3 45.9 -2.3C42 9.8 46.6 19.7 43.6 25.4C40.7 31.2 30.4 32.9 21.8 38.8C13.3 44.8 6.7 54.9 -2.9 59.9C-12.5 65 -25 65 -32.2 58.3C-39.4 51.6 -41.4 38.3 -51.8 27.5C-62.2 16.7 -81.1 8.3 -95.5 -8.3C-110 -25 -119.9 -50 -115.6 -71.4C-111.3 -92.7 -92.6 -110.4 -71 -109.6C-49.3 -108.8 -24.7 -89.4 -0.9 -87.8C22.8 -86.2 45.7 -102.4 58.1 -97.9"
				fill="#6600FF"
			/></g
		>
	</svg>
</div>
