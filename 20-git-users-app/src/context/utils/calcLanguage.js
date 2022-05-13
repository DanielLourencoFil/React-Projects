export const calcLanguage = (data) => {
	let uniqueLanguagesValues = [];
	let filterData = [];
	let languagePercentage = [];
	let languageStars = [];

	// (1) get language unique values
	// (2) filter the data for only language ocurrence and stars numbers
	data.forEach((item) => {
		const { language, stargazers_count } = item;
		if (uniqueLanguagesValues.indexOf(language) === -1 && language) {
			uniqueLanguagesValues.push(language);

			//create a object from unique values with label value keys (to use with ChartFusion)
			// the parameter are use percentage and number of stars tha a language received
			languagePercentage.push({
				label: language,
				value: 0,
			});
			languageStars.push({
				label: language,
				value: 0,
			});
		}
		if (language) {
			filterData.push({ language, stargazers_count });
		}
	});

	// set the values for use percentage
	languagePercentage.forEach((lang) => {
		filterData.forEach((item) => {
			if (item.language === lang.label) {
				lang.value++;
			}
		});
	});

	//set the values for stars numbers
	languageStars.forEach((lang) => {
		filterData.forEach((item) => {
			if (item.language === lang.label) {
				lang.value += item.stargazers_count;
			}
		});
	});

	//limit languages to the 5 most popular
	languagePercentage = languagePercentage
		.sort(function (a, b) {
			return b.value - a.value;
		})
		.slice(0, 5);

	//limit languages Stars to the 5 most popular
	languageStars = languageStars
		.sort(function (a, b) {
			return b.value - a.value;
		})
		.slice(0, 5);

	return [languagePercentage, languageStars];
};
