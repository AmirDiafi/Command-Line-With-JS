const fs = require('fs')

function writeHTML5() {
  const filename = process.argv[2]
  fs.writeFileSync(
    `${__dirname}/${filename}`,
    `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>${filename}</title> </head> <body> <h1>Hello World</h1> </body> </html>`
  )
}

exports.writeHTML5Public = writeHTML5
