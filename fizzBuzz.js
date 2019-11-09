function solution1(input) {
	for(let i = 1; i <= input; i++) {
        if(i % 3 === 0 && i % 5 === 0) console.log("fizzBuzz");
        else if(i % 3 === 0) console.log("fizz");
        else if(i % 5 === 0) console.log("buzz");
        else console.log(i);
    }
    return "Solution printed";
}

function solution2(input) {
	for(let i = 1; i <= input; i++) {
        let message = "";
        if(i % 3 === 0) message += "fizz";
        if(i % 5 === 0) message += "buzz";

        console.log(message || i);
    }
    return "Solution printed";
}

function run() {
	const inputs = [5, 15, 20, 17];
	const solutionsCount = 2;
	for (let s = 0; s < solutionsCount; s++) {
		for (let i = 0; i < inputs.length; i++) {
			const answer = eval(`solution${s + 1}('${inputs[i]}')`);
			console.log(`solution${s + 1} : ${inputs[i]} => ${answer}`);
		}
	}
}

run();