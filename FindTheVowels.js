function solution1(input) {
	return input.replace(/[^aeiouAEIOU]/g, "").length;
}

function run() {
	const inputs = ["Hi my name is Osama", "Hi there!"];
	const solutionsCount = 1;
	for (let s = 0; s < solutionsCount; s++) {
		for (let i = 0; i < inputs.length; i++) {
			const answer = eval(`solution${s + 1}(${JSON.stringify(inputs[i])})`);
			console.log(`solution${s + 1} : ${inputs[i]} => ${answer}`);
		}
	}
}

run();