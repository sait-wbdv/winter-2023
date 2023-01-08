import { h as getContext } from './index.js';

/**
 * @type {import('$app/stores').getStores}
 */
const getStores = () => {
	const stores = getContext('__svelte__');

	return {
		page: {
			subscribe: stores.page.subscribe
		},
		navigating: {
			subscribe: stores.navigating.subscribe
		},
		updated: stores.updated
	};
};

/** @type {typeof import('$app/stores').page} */
const page = {
	/** @param {(value: any) => void} fn */
	subscribe(fn) {
		const store = getStores().page;
		return store.subscribe(fn);
	}
};

export { page as p };
