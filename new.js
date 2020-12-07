const fs = require('fs')

function getLineNumber() {
	let data = fs.readFileSync('rust.html', 'utf8').split('\n')

	let i = 0
	for (let line of data) {
		console.log(line)
		if (line == '</body>') {
			return line
		} else {
			i ++
		}
	}

	return i
}

function insertData(lineNumber, toInsert) {
	let data = fs.readFileSync('rust.html', 'utf8').split('\n')
	let output = ''

	data[lineNumber] = toInsert + '\n' + data[lineNumber]
	for (let line of data) {
		output = output + line
	}

	fs.writeFileSync('rust.html', data, 'utf8')
}

insertData(getLineNumber(), 'hi')