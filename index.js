var fs = require('fs');

var wordListPath = require('word-list-fa');

var wordArray = fs.readFileSync(wordListPath.path, 'utf8').split('\n');
let count = 0;
for (let i = 0 ; i < wordArray.length ; i++) {
	const word = wordArray[i];
	if (word.length === 4 && word[1] === 'ا') {
		console.log("هری "+word)
		count += 1;
	}
}
console.log(count)
