const path = require("path");
const fs = require("fs");
const db = require("./db");
const xmlGen = require("./xmlGen");

const folder = path.join(__dirname, "");

const getAll = () => {
  db.select()
    .from("obj")
    .then(d => {
      fs.writeFileSync(
        "ya.xml",
        `<?xml version="1.0" encoding="utf-8"?>
      <realty-feed xmlns="http://webmaster.yandex.ru/schemas/feed/realty/2010-06">
           <generation-date>${new Date()}</generation-date>
      ${d
        .map(o => xmlGen(o, folder))
        .toString()
        .split(",")
        .join("")}
      </realty-feed>`,
      );
    })
    .catch(err => console.log(err));
};
getAll();
