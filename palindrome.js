// Best
function solution1(str) {
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] != str[str.length - 1 - i]) return false;
		return true;
	}
}

function solution2(str) {
	return (
		str === str.split("").reverse().join("")
	);
}

function solution3(str) {
    return str.split('').every((char, i) => char == str[str.length - 1 - i]);
}

function run() {
	const inputs = ["osama", "eye", "ball", "abba"];
	const solutionsCount = 3;
	for (let s = 0; s < solutionsCount; s++) {
		for (let i = 0; i < inputs.length; i++) {
			const answer = eval(`solution${s + 1}('${inputs[i]}')`);
			console.log(`solution${s + 1} : ${inputs[i]} => ${answer}`);
		}
	}
}

run();
