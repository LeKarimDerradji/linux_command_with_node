const fs = require('fs')

if (process.argv.length !== 4) {
    console.log('usage: node tail.js arg file_name')
    process.exit(1)
}

if (!fs.existsSync(process.argv[3])) {
    console.log(`Sorry ${process.argv[2]} does not exist`)
    process.exit(1)
}


const lineTab = fs.readFileSync(process.argv[3], 'utf-8').split('\n')
const charTab = fs.readFileSync(process.argv[3], 'utf-8')
const wordTab = fs.readFileSync(process.argv[3], 'utf-8').trim().split(/\s+/)

if (process.argv[2] === '-l') {
    console.log(`${lineTab.length}`)
}

if (process.argv[2] === '-w') {
    console.log(`${wordTab.length}`)
}

if (process.argv[2] === '-c') {
    console.log(`${charTab.length}`)
}