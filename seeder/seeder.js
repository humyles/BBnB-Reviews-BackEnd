const fs = require("fs");
// const insertAllDummyData = require("./index.js").insertAllDummyData;
const images = require("../images.js").images;
var MongoClient = require("mongodb").MongoClient;

let createDummy = (dummyData) => {
  let temp = {}
  temp.name = dummyData[Math.round(Math.random() * 2999)].name;
  temp.review = dummyData[Math.round(Math.random() * 2999)].review;
  temp.date =dummyData[Math.round(Math.random() * 2999)].date;
  temp.listingid =Math.round(Math.random() * 50000);
  temp.flagged= dummyData[Math.round(Math.random() * 2999)].flagged;
  temp.photo = dummyData[Math.round(Math.random() * 2999)].photo;
  temp.accuracy =dummyData[Math.round(Math.random() * 2999)].accuracy;
  temp.communication= dummyData[Math.round(Math.random() * 2999)].communcation;
  temp.cleanliness= dummyData[Math.round(Math.random() * 2999)].cleanliness;
  temp.location= dummyData[Math.round(Math.random() * 2999)].location;
  temp.checkin=dummyData[Math.round(Math.random() * 2999)].checkin;
  temp.value=dummyData[Math.round(Math.random() * 2999)].value;

  return temp
}
let insertAllDummyData = async (dummyData) => {
  MongoClient.connect(
    "mongodb://mongo:27017",
    async (err, client) => {
      if (err) throw err;
      var db = client.db("reviews");
      let col = db.collection("items");

      let n = 1000000;
      let store = [];
      for (let i =0; i < n; i++) {
        let temp = createDummy(dummyData);
        temp.id = i;
        temp._id = i;
        temp._id_ = null;
        store.push(temp);
        if ( i % 10000 == 0) {
          console.log(i)
          await col.insertMany(store);
          store = [];
        }
      }
      await col.insertMany(store);
    }
  )
}

fs.readFile("./MOCK_DATA.json", "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    let dummyData = JSON.parse(data);
    //make array of images and randomly insert images to each photo property in dummydata
    for (var key in dummyData) {
        var randomImage = images[Math.floor(Math.random() * Math.floor(images.length))];
        dummyData[key]['photo'] = randomImage;
    }
    insertAllDummyData(dummyData);
  }
});

//in terminal, run
//node database/seeder.js