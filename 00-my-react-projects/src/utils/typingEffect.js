const typingEffect = (
	textArray,
	ref1,
	ref2,
	typingDelay = 200,
	deletingDelay = 35,
	lineChangeDelay = 1000,
	reverseDelay = 2000
) => {
	let i = 0;
	let isDeleting = false;
	let textIndex = 0;
	let currentText = textArray[textIndex].split('|');
	let timeout;

	const typing = () => {
		const firstHalf = currentText[0];
		const secondHalf = currentText[1] || '';

		if (!isDeleting) {
			if (i <= firstHalf.length) {
				ref1.current.textContent = firstHalf.substring(0, i);
				ref2.current.textContent = '';
			} else if (i <= firstHalf.length + secondHalf.length) {
				if (i === firstHalf.length + 1) {
					ref1.current.classList.remove('cursor');
					ref2.current.classList.add('cursor');
				}
				ref1.current.textContent = firstHalf;
				ref2.current.textContent = secondHalf.substring(
					0,
					i - firstHalf.length
				);
			}

			if (i === firstHalf.length + secondHalf.length) {
				setTimeout(() => {
					isDeleting = true;
					typing();
				}, reverseDelay);
			} else {
				i++;
				timeout = setTimeout(
					typing,
					i <= firstHalf.length ? typingDelay : typingDelay / 2
				);
			}
		} else {
			if (ref2.current.textContent.length > 0) {
				ref2.current.textContent = ref2.current.textContent.slice(0, -1);
			} else if (ref1.current.textContent.length > 0) {
				ref1.current.textContent = ref1.current.textContent.slice(0, -1);
			}

			if (ref1.current.textContent === '') {
				ref1.current.classList.add('cursor');
				ref2.current.classList.remove('cursor');

				textIndex = (textIndex + 1) % textArray.length;
				currentText = textArray[textIndex].split('|');

				isDeleting = false;
				i = 0;
				setTimeout(typing, lineChangeDelay / 2);
			} else {
				timeout = setTimeout(typing, deletingDelay);
			}
		}
	};

	typing();
};

export default typingEffect;

// const typingEffect = (
// 	text, // arrary with text: must be as follow [text|text, text|text, ...] - its must have a "|" ()pipe symbol to split text in 2
// 	ref1, // element to render text, i.e., <h1></h1>
// 	ref2, // element to render text, i.e., <h1></h1>
// 	typingDelay = 200,
// 	deletingDelay = 35,
// 	lineChangeDelay = 1000,
// 	reverseDelay = 2000
// ) => {
// 	let i = -1;
// 	let isDeleting = false;
// 	let textIndex = text.length - 1;
// 	let textIndexCounter = 0;
// 	let timeout;
// 	let timeoutWait;
// 	let nextText = false;

// 	const typing = () => {
// 		// TYPING STAGE
// 		if (!isDeleting) {
// 			// set the limit for changing element to render text
// 			const breakLine = text[textIndexCounter].indexOf("|");
// 			// first half o text
// 			if (i < text[textIndexCounter].length && i < breakLine) {
// 				clearTimeout(timeout);
// 				ref1.current.textContent += text[textIndexCounter].charAt(i);
// 				i++;
// 				timeout = setTimeout(typing, typingDelay);
// 				// preparing to change to second half of text
// 				if (i === breakLine) {
// 					timeoutWait = setTimeout(() => {
// 						i++;
// 						ref1.current.classList.remove("cursor");
// 						ref2.current.classList.add("cursor");
// 						typing();
// 					}, lineChangeDelay);
// 				}
// 			}
// 			//second half of text (after "|")
// 			if (i > breakLine) {
// 				clearTimeout(timeoutWait);
// 				clearTimeout(timeout);
// 				ref2.current.textContent += text[textIndexCounter].charAt(i);
// 				i++;
// 				timeout = setTimeout(typing, typingDelay / 2);

// 				if (i === text[textIndexCounter].length) {
// 					clearTimeout(timeout);
// 					timeoutWait = setTimeout(() => {
// 						isDeleting = true;
// 						clearTimeout(timeoutWait);
// 						typing();
// 					}, reverseDelay);
// 				}
// 			}
// 		}
// 		//DELETING STAGE
// 		if (isDeleting) {
// 			clearTimeout(timeout);
// 			let text = ref2.current.textContent;
// 			if (text.length > 0) {
// 				ref2.current.textContent = text.substring(0, text.length - 1);
// 			}
// 			timeout = setTimeout(typing, deletingDelay);
// 			if (text === "") {
// 				clearTimeout(timeout);
// 				timeoutWait = setTimeout(() => {
// 					typing();
// 					nextText = true;
// 				}, lineChangeDelay / 4);
// 			}
// 			if (text === "" && nextText) {
// 				clearTimeout(timeoutWait);
// 				clearTimeout(timeout);
// 				let text = ref1.current.textContent;
// 				ref1.current.classList.add("cursor");
// 				ref2.current.classList.remove("cursor");
// 				if (text.length > 0) {
// 					ref1.current.textContent = text.substring(0, text.length - 1);
// 				}
// 				timeout = setTimeout(typing, deletingDelay);
// 				if (text === "") {
// 					clearTimeout(timeout);
// 					timeoutWait = setTimeout(() => {
// 						nextText = false;
// 						isDeleting = false;
// 						i = -1;
// 						if (textIndexCounter === textIndex) {
// 							textIndexCounter = 0;
// 						} else {
// 							textIndexCounter++;
// 						}
// 						clearTimeout(timeoutWait);
// 						typing();
// 					}, lineChangeDelay / 2);
// 				}
// 			}
// 		}
// 	};
// 	typing();
// };

// export default typingEffect;
