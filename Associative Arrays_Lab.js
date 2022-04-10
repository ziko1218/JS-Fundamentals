/*
function solve(input) {
  let person = {
    name: "Ziko",
    age: 40,
    height: 185,
    car: "BMW",
  };
  person["favoriteTeam"] = "CSKA";
  person.age = null;
  console.log(person);

  if (person.hasOwnProperty('name')) {
console.log('Yes');
  } else {
      person.car = 'Red BMW'
  }



}
solve();

//===================================================================

function objects() {
  let obj1 = {
    name: "Ziko",
    age: 25,
    brother:{
      name:'Vlado'
    }
  };
  let obj2 = Object.assign({}, obj1);
  obj1.age = 50;

  for (let key in obj1) {
    console.log(obj1[key]);
  }

  let values = Object.values(obj1);

  console.log(values);
  

  //console.log(obj2);
}
objects();

//==================================================================


function objects() {
  let person = new Map();

  person.set("name", "Ziko");
  person.set("age", 37);

  let personName = person.get("name");

  if (person.has("car")) {
    console.log("GOOD JOB");
  } else {
    person.set("car", "BMW");
  }

  console.log(person);
}
objects();
*/
