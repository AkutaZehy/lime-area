//Note: This script is actually decprecated and not used in the project. 

export function loadCounterScript() {
	const script = document.createElement('script');
	script.src = `${document.currentScript?.src}/?clt=${localStorage.getItem('compteurlt') || 0}&ca=${localStorage.getItem('compteuraut') || 0}`;
	script.async = true;

	script.onerror = () => {
		console.error('Failed to load the counter script.');
	};

	script.onload = () => {
		console.log('Counter script loaded successfully.');
	};

	document.body.appendChild(script);
}