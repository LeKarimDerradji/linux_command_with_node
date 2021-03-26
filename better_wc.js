const {
    prototype
} = require('events')
const fs = require('fs')

if (process.argv.length !== 3 && process.argv.length !== 4) {
    console.error('usage: node better_wc.js arg file_name || node better_wc.js file_name')
    process.exit(1)
}

const lastElem = process.argv.length - 1

if (!fs.existsSync(process.argv[lastElem])) {
    console.error(`Sorry ${process.argv[lastElem]} does not exist`)
    process.exit(1)
}

if (fs.statSync(process.argv[lastElem]).isDirectory()) {
    console.error(`Err, ${process.argv[lastElem]} is a directory`)
    process.exit(1)
}

const lineTab = fs.readFileSync(process.argv[lastElem], 'utf-8').split('\n')
const charTab = fs.readFileSync(process.argv[lastElem], 'utf-8')
const wordTab = fs.readFileSync(process.argv[lastElem], 'utf-8').trim().split(/\s+/)

if (process.argv.length === 4) {
    if (process.argv[2] !== '-l' && process.argv[2] !== '-w' && process.argv[2] !== '-c') {
        console.error('Err, available arguments : -l, -w, -c')
        process.exit(1)
    }
    if (!fs.statSync(process.argv[lastElem]).isFile()) {
        console.error(`Err, ${process.argv[lastElem]} is not a valid file.`)
    }

}

if (process.argv[2] === '-l' || process.argv[2] === '-w' || process.argv[2] === '-c') {
    if (process.argv[2] === '-l') {
        console.log(`${lineTab.length}`)
    }
    
    if (process.argv[2] === '-w') {
        console.log(`${wordTab.length}`)
    }
    
    if (process.argv[2] === '-c') {
        console.log(`${charTab.length}`)
    }
} else {
    console.log(`${lineTab.length} ${wordTab.length} ${charTab.length}`)
}




