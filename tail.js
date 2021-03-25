const fs = require('fs')

if (process.argv.length !== 3) {
    console.log('usage: node tail.js file_name')
    process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
    console.log(`Sorry ${process.argv[2]} does not exist`)
    process.exit(1)
}


const stats = fs.statSync(process.argv[2])

if (!stats.isFile(process.argv[2])) {
    console.log(`${process.argv[2]} is not a file`)
    process.exit(1)
}


const characterTab = fs.readFileSync(process.argv[2], 'utf-8').split('\n')
const lastTenLine = []


for (let i = characterTab.length - 1; i > characterTab.length - 12; i--) {
    lastTenLine.push(characterTab[i])
}

lastTenLine.forEach(line => {
    console.log(line)
})