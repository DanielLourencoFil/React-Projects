const typingEffect = (
	text, // arrary with text: must be as follow [text|text, text|text, ...] - its must have a "|" ()pipe symbol to split text in 2
	ref1, // element to render text, i.e., <h1></h1>
	ref2, // element to render text, i.e., <h1></h1>
	typingDelay = 200,
	deletingDelay = 35,
	lineChangeDelay = 1000,
	reverseDelay = 2000
) => {
	let i = -1;
	let isDeleting = false;
	let textIndex = text.length - 1;
	let textIndexCounter = 0;
	let timeout;
	let timeoutWait;
	let nextText = false;

	const typing = () => {
		// TYPING STAGE
		if (!isDeleting) {
			// set the limit for changing element to render text
			const breakLine = text[textIndexCounter].indexOf("|");
			// first half o text
			if (i < text[textIndexCounter].length && i < breakLine) {
				clearTimeout(timeout);
				ref1.current.textContent += text[textIndexCounter].charAt(i);
				i++;
				timeout = setTimeout(typing, typingDelay);
				// preparing to change to second half of text
				if (i === breakLine) {
					timeoutWait = setTimeout(() => {
						i++;
						ref1.current.classList.remove("cursor");
						ref2.current.classList.add("cursor");
						typing();
					}, lineChangeDelay);
				}
			}
			//second half of text (after "|")
			if (i > breakLine) {
				clearTimeout(timeoutWait);
				clearTimeout(timeout);
				ref2.current.textContent += text[textIndexCounter].charAt(i);
				i++;
				timeout = setTimeout(typing, typingDelay / 2);

				if (i === text[textIndexCounter].length) {
					clearTimeout(timeout);
					timeoutWait = setTimeout(() => {
						isDeleting = true;
						clearTimeout(timeoutWait);
						typing();
					}, reverseDelay);
				}
			}
		}
		//DELETING STAGE
		if (isDeleting) {
			clearTimeout(timeout);
			let text = ref2.current.textContent;
			if (text.length > 0) {
				ref2.current.textContent = text.substring(0, text.length - 1);
			}
			timeout = setTimeout(typing, deletingDelay);
			if (text === "") {
				clearTimeout(timeout);
				timeoutWait = setTimeout(() => {
					typing();
					nextText = true;
				}, lineChangeDelay / 4);
			}
			if (text === "" && nextText) {
				clearTimeout(timeoutWait);
				clearTimeout(timeout);
				let text = ref1.current.textContent;
				ref1.current.classList.add("cursor");
				ref2.current.classList.remove("cursor");
				if (text.length > 0) {
					ref1.current.textContent = text.substring(0, text.length - 1);
				}
				timeout = setTimeout(typing, deletingDelay);
				if (text === "") {
					clearTimeout(timeout);
					timeoutWait = setTimeout(() => {
						nextText = false;
						isDeleting = false;
						i = -1;
						if (textIndexCounter === textIndex) {
							textIndexCounter = 0;
						} else {
							textIndexCounter++;
						}
						clearTimeout(timeoutWait);
						typing();
					}, lineChangeDelay / 2);
				}
			}
		}
	};
	typing();
};

export default typingEffect;
