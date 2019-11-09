function solution1(input) {
	const hash = {};
	for(const char of input)
		hash[char] = hash[char] + 1 || 1;

	let maxChar = "";
	let count = 0;
	for(let key in hash) {
		if(hash[key] > count) {
			maxChar = key;
			count = hash[key];
		}
	}

	return maxChar;
}

function run() {
	const inputs = ["abdccccccd", "osama", "apple 12331211", "orange"];
	const solutionsCount = 1;
	for (let s = 0; s < solutionsCount; s++) {
		for (let i = 0; i < inputs.length; i++) {
			const answer = eval(`solution${s + 1}('${inputs[i]}')`);
			console.log(`solution${s + 1} : ${inputs[i]} => ${answer}`);
		}
	}
}

run();


// Sample input "osa oooo ss m a b z" ==> "o"