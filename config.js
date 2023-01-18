const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname);

fs.readFile(dirname + '/.config/api.env.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    fs.writeFile(dirname + "/backend/.env", data, (err) => {
        if (err) throw err;
    })
});

fs.readFile(dirname + "/.config/front.env.txt", (err, data) => {
    if (err) throw err;

    fs.writeFile(dirname + "/frontend/.env", data, (err) => {
        if (err) throw err;
    })
})



