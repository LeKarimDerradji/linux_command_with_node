const fs = require('fs')

if (process.argv.length < 4) {
    console.log('usage: node tail_better.js -n numberOfLine file.txt')
    process.exit(1)
}

const stats = fs.statSync(process.argv[process.argv.length - 1])

if (!stats.isFile()) {
    console.log(`${process.argv[process.argv.length - 1]} n\'est pas un fichier`)
    process.exit(1)
}

const characterTab = fs.readFileSync(process.argv[process.argv.length - 1], 'utf-8').split('\n')
const lastTenLine = []



if (process.argv[2] === '-n' && !isNaN(process.argv[3])) {
    for (let i = characterTab.length - 1; i > characterTab.length - process.argv[3]; i--) {
        lastTenLine.push(characterTab[i])
    }
    lastTenLine.forEach(line => {
        console.log(line)
    })
} else {
    for (let i = characterTab.length - 1; i > characterTab.length - 12; i--) {
        lastTenLine.push(characterTab[i])
    }
    lastTenLine.forEach(line => {
        console.log(line)
    })
}