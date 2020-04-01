
// Require some modules
// path - resolving system path problem
// fs - work with file system
// db - db connection with KNEX package (db folder)
// roomXMLGen - function for one room xml generating
 
const path = require("path");
const fs = require("fs");
const db = require("./db");
const roomXMLGen = require("./roomXMLGen");

// Common folder "/images/obj" where obj is an images folder
const folder = path.join(__dirname, "");

/**
 * xmlGenerator function makes a FEED with all rooms in POSTGRES
 * makes an xml file - roomXMLGen.xml
 * @returns {string} - 
 */
const xmlGenerator = () => {
  // Get objects array from DB (async knex query)
  db.select()
    .from("obj")
    .then(d => {
      // writeFileSync method makes an XML file
      fs.writeFileSync(
        "roomXMLGen.xml",
        `<?xml version="1.0" encoding="utf-8"?>
      <realty-feed xmlns="http://webmaster.yandex.ru/schemas/feed/realty/2010-06">
           <generation-date>${new Date()}</generation-date>
      ${d
        .map(o => roomXMLGen(o, folder))
        .toString()
        .split(",")
        .join("")}
      </realty-feed>`,
      );
    })
    .catch(err => console.log(err));
};
setInterval(xmlGenerator, 10000);
