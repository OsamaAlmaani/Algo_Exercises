function solution1(input) {
    let steps = "'#" + " ".repeat(input - 1);
	for (let i = 0; i < input - 1; i++) {
        console.log(steps + "'");
        steps = steps.replace(" ", "#");
    }

    // Separated to save one replace operation
    console.log(steps + "'");
}

function solution2(input) {
    for (let i = 0; i < input; i++) {
        let steps = "";
        for(let j = 0; j < input; j++) {
            if(j <= i)
                steps += "#";
            else
                steps += " ";
        }

        console.log(`'${steps}'`)
    }
}

function run() {
	const inputs = [1, 2, 3, 4];
	const solutionsCount = 2;
	for (let s = 0; s < solutionsCount; s++) {
		for (let i = 0; i < inputs.length; i++) {
			const answer = eval(`solution${s + 1}(${JSON.stringify(inputs[i])})`);
			console.log(`solution${s + 1} : ${inputs[i]} => Printed above`);
		}
	}
}

run();