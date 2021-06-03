
module.exports = (app, linkTags, styleTags, scriptTags) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${linkTags}
        ${styleTags}
    </head>
    <body>
       <div id="root">${app}</div> 
        ${scriptTags}
    </body>
    </html>`