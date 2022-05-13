export const checkScreenWidth = (width, cb) => {
	if (window.innerWidth < width) {
		cb(true);
	} else {
		cb(false);
	}
};
