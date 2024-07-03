import { promises } from "fs";

//Read config file from the json e.g the files paths.
let data = await promises.readFile("./Config.json");

//convert the file into JSON.
let config = JSON.parse(data.toString());

//foreach file we read from config, we read its content and print how many words
//it have
config.files.forEach(async (path) => {
  //try catch in case the file doesn't exist
  try {
    //read the file content
    const data = await promises.readFile(path);

    //handle empty files
    if (data.length < 1) console.log(`${path} is an empty file`);
    //read the buffer as count how many words it have.
    else console.log(`${path} : ${data.toString().split(" ").length} words`);
  } catch (e) {
    console.log(e.message);
  }
});
