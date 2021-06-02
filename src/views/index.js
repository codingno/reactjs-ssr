
module.exports = (app) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="index.css">
        <link rel="stylesheet" href="bundle.css">
    </head>
    <body>
       <div id="root">${app}</div> 
       <script src="bundle.js"></script>
    </body>
    </html>`