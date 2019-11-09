function solution1(input) {
    let stringA = input[0].toLowerCase(), stringB = input[1].toLowerCase();
    console.log(stringA, stringB);
    
}

function run() {
	const inputs = [["HI there", "the hire"], ["hi THERE", "bye there"]];
	const solutionsCount = 1;
	for (let s = 0; s < solutionsCount; s++) {
		for (let i = 0; i < inputs.length; i++) {
			const answer = eval(`solution${s + 1}(${JSON.stringify(inputs[i])})`);
			console.log(`solution${s + 1} : ${inputs[i]} => ${answer}`);
		}
	}
}

run();