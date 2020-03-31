const path = require("path");
const fs = require("fs");
const xml = require("xml");
// const xmlString = xml(xmlObject, options);
const db = require("./db");

const folder = path.join(__dirname, "");

const getAll = () => {
  db.select()
    .from("obj")
    .then(d => {
      // console.log(d);
      d.map(item => console.log(xml(item)));
    })
    .catch(err => console.log(err));
};

const getImages = () => {
  db.select("offerimages")
    .from("obj")
    .then(d => {
      fs.readdir(folder + d[0].offerimages, (err, items) => {
        console.log(items);
      });
    })
    .catch(err => console.log(err));
};
getAll();
getImages();

// setInterval(connectRunner, 2000)
