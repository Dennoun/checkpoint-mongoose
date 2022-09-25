require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");

const app = express();
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("the database is connected..."))
  .catch((err) => console.log(err));

const Person = require("./api/models/Person.js");

/* 1-Create and Save a Record of a Model: */
/*const newPerson = new Person({
  name: "Jawad",
  age: 28,
  favoriteFoods: ["pizza", "barbecue"],
});

newPerson
  .save()
  .then((Person) => console.log(Person))
  .catch((err) => console.log(err));*/

/* 2-Create Many Records with model.create() */
/*Person.create([
  { name: "ahmed", age: 33, favoriteFoods: ["tagine", "chikken"] },
  { name: "Manal", age: 25, favoriteFoods: ["noddels", "sushi"] },
]);*/

/* 3-Use model.find() */
/*Person.find()
  .then((Person) => console.log(Person))
  .catch((err) => console.log(err));*

/* 4-Use model.findOne() */
/*Person.findOne({ name: "ahmed" })
  .then((Person) => console.log(Person))
  .catch((err) => console.log(err));*/

/* 5-Use model.findById() */
/*Person.findById({ _id: "632fa916eb09eb2a9475c644" })
  .then((Person) => console.log(Person))
  .catch((err) => console.log(err));*/

/* 6-Perform Classic Updates by Running Find, Edit, then Save */
/*Person.findById({_id:"632fb569c614af101517993f"},function (err,Person){
    Person.favoriteFoods.push("Hamburger")
    Person.save(function (err,Person) {
        if(err){
            console.log(err)
        }
        console.log(Person)
    })
});*/

/* 7- model.findOneAndUpdate() */

/*Person.findOneAndUpdate(
  { _id: "632fb569c614af101517993e" },
  { $set: { age: 20 } },
  { new: true }
)
  .then((Person) => console.log(Person))
  .catch((err) => console.log(err));*/

/* 8-model.findByIdAndRemove*/
/*Person.findByIdAndRemove({ _id: "632fbc9f3a1365a9358276a4" })
  .then((Person) => console.log(Person))
  .catch((err) => console.log(err));*/

/* 9-model.remove()*/
/*Person.remove({ name: "Mary" })
  .then((Person) => console.log(Person))
  .catch((err) => console.log(err));*/

/* 10- */
/*Person.find({ favoriteFoods: "pizza" })
  .sort({ name: "asc" })
  .limit(2)
  .select("-age")
  .then((Person) => console.log(Person))
  .catch((err) => console.log(err));*/

app.listen(process.env.Port, () => {
  console.log(`The Server is Running ${process.env.Port}....`);
});
