function reverse1(str) {
	return str
		.split("")
		.reverse()
		.join("");
}

function reverse2(str) {
	let reversed = "";
	for (const char of str) reversed = char + reversed;
	return reversed;
}

function reverse3(str) {
	return str.split("").reduce((reversed, char) => char + reversed, "");
}

function run() {
	const input = "osama";
	console.log(`reverse1 : ${input} => ${reverse1(input)}`);
	console.log(`reverse2 : ${input} => ${reverse2(input)}`);
	console.log(`reverse3 : ${input} => ${reverse3(input)}`);
}

run();
