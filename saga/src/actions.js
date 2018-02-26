export function getData() {
	return { type: 'START' };
}

export function isLoaded() {
	return { type: 'LOADED', data: 'LOADED' };
}
