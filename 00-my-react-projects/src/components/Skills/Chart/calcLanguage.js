export const calcLanguage = (data) => {
	let uniqueLanguagesValues = [];
	let filterData = [];
	let languagePercentage = [];

	// (1) get language unique values
	// (2) filter the data for only language ocurrence and stars numbers
	data.forEach((item) => {
		const { language } = item;
		if (uniqueLanguagesValues.indexOf(language) === -1 && language) {
			uniqueLanguagesValues.push(language);

			//create a object from unique values with label value keys (to use with ChartFusion)
			languagePercentage.push({
				label: language,
				value: 0,
			});
		}
		if (language) {
			filterData.push(language);
		}
	});

	languagePercentage.forEach((lang) => {
		filterData.forEach((item) => {
			if (item === lang.label) {
				lang.value++;
			}
		});
	});

	//limit languages to the 5 most popular
	languagePercentage = languagePercentage
		.sort(function (a, b) {
			return b.value - a.value;
		})
		.slice(0, 5);

	return languagePercentage;
};
