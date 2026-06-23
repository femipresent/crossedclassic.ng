
// Prefer a local backend when developing (file:// or localhost).
// If you want to force the production backend, set `window.CROSSED_CLASSIC_API_BASE`
// before this script runs (e.g. in an environment-specific wrapper).
;(function(){
	try {
		const isFile = location && location.protocol === 'file:';
		const isLocalhost = location && (location.hostname === 'localhost' || location.hostname === '127.0.0.1');

		if (typeof window.CROSSED_CLASSIC_API_BASE !== 'undefined' && window.CROSSED_CLASSIC_API_BASE) {
			// explicit override already set
			return;
		}

		if (isFile || isLocalhost) {
			window.CROSSED_CLASSIC_API_BASE = 'http://localhost:8000';
		} else {
			window.CROSSED_CLASSIC_API_BASE = 'https://cc-backend-maqs.onrender.com';
		}
	} catch (e) {
		// fallback to remote backend
		window.CROSSED_CLASSIC_API_BASE = 'https://cc-backend-maqs.onrender.com';
	}
})();
