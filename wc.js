const fs = require('fs')

if (process.argv.length !== 3) {
    console.log('usage: node tail.js file_name')
    process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
    console.log(`Sorry ${process.argv[2]} does not exist`)
    process.exit(1)
}

const lineTab = fs.readFileSync(process.argv[2], 'utf-8').split('\n')
const charTab = fs.readFileSync(process.argv[2], 'utf-8')
const wordTab = fs.readFileSync(process.argv[2], 'utf-8').trim().split(/\s+/)

console.log(`${lineTab.length} ${charTab.length} ${wordTab.length}`)