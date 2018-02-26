export default function reduser(state = 'Nothing', action) {
	switch (action.type) {
		case 'START':
			console.log('started');
			return 'started';
		case 'LOADED':
			console.log('loaded');
			return action.data;
		case 'ERROR':
			console.log('error');
			return 'error';
		default:
			return state;
	}
}
