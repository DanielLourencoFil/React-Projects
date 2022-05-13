export const calcReposPopularity = (data) => {
	let reposPopByStars = [];
	let reposPopByForks = [];
	data.forEach((item) => {
		const { name, stargazers_count, forks } = item;
		reposPopByStars.push({
			label: name,
			value: stargazers_count,
		});
		reposPopByForks.push({
			label: name,
			value: forks,
		});
	});
	//sort by < order (higher to smaller)
	//select only the first 5
	reposPopByForks
		.sort(function (a, b) {
			return b.value - a.value;
		})
		.slice(0, 5);
	reposPopByForks = reposPopByForks.slice(0, 5);

	//sort by < order (higher to smaller)
	//select only the first 5

	reposPopByStars
		.sort(function (a, b) {
			return b.value - a.value;
		})
		.slice(0, 5);
	reposPopByStars = reposPopByStars.slice(0, 5);

	return [reposPopByStars, reposPopByForks];
};
