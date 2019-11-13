function solution1(input) {
    const center = input - 1;
    for (let i = 1; i <= input; i++) {
        row = Array(2 * input - 1).fill(" ");
        for (let j = 0; j < i; j++) {
            row[center + j] = row[center - j] = "#";
        }
        console.log(`'${row.join("")}'`)
    }
}

function solution2(input) {
    const center = input - 1;
    for (let i = 0; i < input; i++) {
        let row = "";
        for (let j = 0; j < 2 * input - 1; j++) {
            if(j >= center - i && j <= center + i) row += "#";
            else row += " ";
        }
        console.log(`'${row}'`)
    }
}

function run() {
	const inputs = [1, 2, 3, 4];
	const solutionsCount = 2;
	for (let s = 0; s < solutionsCount; s++) {
		for (let i = 0; i < inputs.length; i++) {
			const answer = eval(`solution${s + 1}(${JSON.stringify(inputs[i])})`);
			console.log(`solution${s + 1} : ${inputs[i]} => ${answer}`);
		}
	}
}

run();