const fs = require('fs')

// check if command line is well 
if (process.argv.length < 4) {
    console.log('usage node append.js [src_01] [src_02]... [dest]')
    process.exit(1)
}

//check if the value is a file or a directory (you choose)

const statsTab = []

for (let i = 2; i < process.argv.length - 1; i++) {
    if (!fs.existsSync(process.argv[i])) {
        console.log(`Sorry ${process.argv[i]} does not exist`)
        process.exit(1)
    }
    statsTab.push(fs.statSync(process.argv[i]))
    statsTab.forEach(element => {
        if (!element.isFile()) {
            console.log(`${element} is not a file`)
            process.exit(1)
        }
        /* if (!element.isDirectory() {
        console.log(`${element} is not a directory`)
        process.exit(1) } */
    })
    fs.appendFileSync('./'+process.argv[process.argv.length-1],' '+process.argv[i])
}



