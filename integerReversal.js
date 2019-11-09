function solution1(input) {
    return parseInt(input.toString().split("").reverse().join("")) * Math.sign(input);
}

function solution2(input) {
    let reversed = 0;
    while(input != 0) {
        reversed = reversed * 10 + input % 10;
        input = ~~(input / 10);
    }
    return reversed ;
}

function run() {
	const inputs = [123,1550, -15, -90];
	const solutionsCount = 2;
	for (let s = 0; s < solutionsCount; s++) {
		for (let i = 0; i < inputs.length; i++) {
			const answer = eval(`solution${s + 1}(${inputs[i]})`);
			console.log(`solution${s + 1} : ${inputs[i]} => ${answer}`);
		}
	}
}

run();
