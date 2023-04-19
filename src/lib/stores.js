import { writable } from 'svelte/store';

function createScrollLock(initState) {
	const { subscribe, set, update } = writable(initState);

	return {
		subscribe,
		toggle: () => {
			update((state) => !state);
			document.body.classList.toggle('scroll-lock');
		}
	};
}

export const currentLanguage = writable('en');
export const scrollLock = createScrollLock(false);
export const modalProps = writable(null);
export const modalType = writable(null);
