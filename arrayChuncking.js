function solution1(input, size) {
    const output = [];
    const iter = ~~(input.length / size) + (input.length % size ? 1 : 0);

    for(let i = 0; i < iter; i++) {
        output.push(input.splice(0, size));
    }

    return output;
}

function solution2(input, size) {
    const output = [];

    for(const item of input) {
        const last = output[output.length - 1];
        if(!last || last.length == size) {
            output.push([item]);
        } else {
            last.push(item);
        }
    }

    return output;
}

function solution3(input, size) {
    const output = [];
    let index = 0;

    while(index < input.length) {
        output.push(input.slice(index, index + size));
        index += size;
    }

    return output;
}

function run() {
	const inputs = [[1, 2, 3, 4], 2, [1, 2, 3, 4, 5 ,6, 7, 8], 3, [1, 2, 3], 10];
	const solutionsCount = 3;
	for (let s = 0; s < solutionsCount; s++) {
		for (let i = 0; i < inputs.length; i += 2) {
			const answer = eval(`solution${s + 1}([${inputs[i]}], ${inputs[i + 1]})`);
			console.log(`solution${s + 1} : ${inputs[i]} => ${JSON.stringify(answer)}`);
		}
	}
}

run();