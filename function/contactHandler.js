const fs = require("fs");

const getContact = () => {
  const file = fs.readFileSync("./public/data/contact.json", "utf8");
  const contacts = JSON.parse(file);

  return contacts;
};

module.exports = { getContact };
