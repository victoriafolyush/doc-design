const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");

let stream1 = fs.createReadStream("stories.csv");
let csvData1 = [];
let csvStream1 = fastcsv
  .parse()
  .on("data", function(data) {
    csvData1.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvData1.shift();

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "testInsta"
      });
    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =
          "INSERT INTO stories (isSponsored, isCloseFriends) VALUES ?";
        connection.query(query, [csvData1], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

  let stream2 = fs.createReadStream("texts.csv");
  let csvData2 = [];
  let csvStream2 = fastcsv
    .parse()
    .on("data", function(data) {
        csvData2.push(data);
    })
    .on("end", function() {
      // remove the first line: header
      csvData2.shift();
  
      const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "testInsta"
      });
      // open the connection
      connection.connect(error => {
        if (error) {
          console.error(error);
        } else {
          let query =
            "INSERT INTO texts (value, font, storyId) VALUES ?";
          connection.query(query, [csvData2], (error, response) => {
            console.log(error || response);
          });
        }
      });
    });
  
  stream1.pipe(csvStream1);

  stream2.pipe(csvStream2);

