const fs = require('fs')

if(process.argv.length !== 4) {
    console.log('usage: node cp.js fileToCopy destinationFile')
    process.exit(1)
}

if(!fs.existsSync(process.argv[2])) {
    console.log(`${process.argv[2]} n'existe pas`)
    process.exit(1)
}

fs.copyFileSync(process.argv[2], process.argv[3])

