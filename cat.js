const fs = require('fs')

if (process.argv.length < 3) {
    console.log('usage: node cat.js file_name file_name [...]')
    process.exit(1)
}

for (const argv of process.argv) {
    if (!fs.existsSync(argv)) {
        console.log(`${argv} is not there`)
        process.exit(1)
    }
}

const statsTab = []

for (let i = 2; i < process.argv.length; i++) {
    statsTab.push(fs.statSync(process.argv[i]))
    statsTab.forEach(element => {
        if (!element.isFile()) {
            console.log('One of the args is not a file')
            process.exit(1)
        }
    })
}

for (let i = 2; i < process.argv.length; i++) {
    console.log(fs.readFileSync(process.argv[i], 'utf-8'))
}