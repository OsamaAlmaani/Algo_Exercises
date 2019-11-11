function solution1(input) {
	// stringA = input[0].toLowerCase().split('').filter(l => RegExp(/\w/).test(l)).sort().join('');
	// stringB = input[1].toLowerCase().split('').filter(l => RegExp(/\w/).test(l)).sort().join('');

	stringA = input[0].replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
	stringB = input[1].replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');

	return stringA === stringB;
}

function solution2(input) {
	stringA = input[0].replace(/[^\w]/g, "").toLowerCase();
	stringB = input[1].replace(/[^\w]/g, "").toLowerCase();
	
	if (stringA.length !== stringB.length) return false;

	const hashA = {}, hashB = {};
	for(let i = 0; i < stringA.length; i++) {
		hashA[stringA[i]] = hashA[stringA[i]] + 1 || 1;
		hashB[stringB[i]] = hashB[stringB[i]] + 1 || 1;
	}
	
	for(const char in hashA) {
		if (hashB[char] !== hashA[char]) return false;
	}

	return true;
}

function run() {
	const inputs = [["HI there", "the hire"], ["hi THERE!", "bye there"], ["hello", "hellos"]];
	const solutionsCount = 2;
	for (let s = 0; s < solutionsCount; s++) {
		for (let i = 0; i < inputs.length; i++) {
			const answer = eval(`solution${s + 1}(${JSON.stringify(inputs[i])})`);
			console.log(`solution${s + 1} : ${inputs[i]} => ${answer}`);
		}
	}
}

run();