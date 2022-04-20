/*
function nationalCourt(input) {
  // take first three elelmends and calculate their efficiency
  // last element is client count
  // repeat until there no more clients
  // record current hour
  // -if current hour - do nothing

  // - subtract from the remaing client count employee efficiency

  // Print result

  let e1 = Number(input[0]); //  let [e1,e2,e3,people] = input.map(Number)
  let e2 = Number(input[1]);
  let e3 = Number(input[2]);

  let efficiency = e1 + e2 + e3;
  let people = Number(input[3]);
  let hour = 0;

  while (people > 0) {
    hour++;
    if (hour % 4 !== 0) {
      people -= efficiency;
    }
  }

  console.log(`Time needed: ${hour}h.`);
}
nationalCourt(["5", "6", "4", "20"]);

//============================================================ Zad 2
*/
function shoppingList(input) {
  // parse input and split
  let groceries = input.shift().split("!");
  //  - if element is 'Go Shopping! ' end itteration
  let line = input.shift();
  while (line !== "Go Shopping!") {
    let [command, item, newItem] = line.split(" ");
    //  - execute operation based on element content
    switch (command) {
      case "Urgent":
        urgent(groceries, item);
        break;
      case "Unnecessary":
        unnecessary(groceries, item);
        break;
      case "Correct":
        correct(groceries, item, newItem);
        break;
      case "Rearange":
        rearrange(groceries, item);
        break;
    }
    line = input.shift();
  }
  //print result joined by ", "
  console.log(groceries.join(", "));

  function urgent(list, item) {
    //      --Urgent -> add item to beggining of list
    if (list.includes(item) == false) {
      list.unshift(item);
    }
  }
  //  let groceries = "Milk!Pepper!Salt!Water!Banana".split('!') //// For testing purposes
  //  rearrange(groceries,'Milk')
  //  console.log(groceries);
  function unnecessary(list, item) {
    // --Unnecessary -> remove item by name from list
    if (list.includes(item) == true) {
      let index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  function correct(list, item, newItem) {
    // --Correct -> replace item by name from list
    if (list.includes(item) == true) {
      let index = list.indexOf(item);
      list[index] = newItem;
    }
  }

  function rearrange(list, item) {
    //--Rearange -> move item by name to end of list
    if (list.includes(item)) {
      let index = list.indexOf(item);
      list.splice(index, 1);
      list.push(item);
    }
  }
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
// shoppingList([
//   "Milk!Pepper!Salt!Water!Banana",
//   "Urgent Salt",
//   "Unnecessary Grapes",
//   "Correct Pepper Onion",
//   "Rearrange Grapes",
//   "Correct Tomatoes Potatoes",
//   "Go Shopping!",
// ]);

//========================================================== Zad 3
/*
function heartDelivery(input) {
  // parse input
  let houses = input.shift().split("@").map(Number);
  let index = 0;
  // for case remaining element, before 'Love!'
  for (let line of input) {
    if (line == "Love!") {
      break;
    }
    // - parse command
    let offset = Number(line.split(" ")[1]);
    // - move index
    index += offset;
    // - if index outside array -> index = 0
    if (index >= houses.length) {
      index = 0;
    }
    //  - if heart count = 0, print message
    if (houses[index] === 0) {
      console.log(`Place ${index} already had Valentine's day.`);
    } else {
      //  -else decrease heart count and check if heart count = 0;
      houses[index] -= 2;
      if (houses[index] == 0) {
        console.log(`Place ${index} has Valentine's day.`);
      }
    }
  }
  // print result
  console.log(`Cupid's last position was ${index}.`);
  // count houses
  let missed = houses.filter((x) => x > 0).length;
  if (missed == 0) {
    console.log(`Mission was successful.`);
  } else {
    console.log(`Cupid has failed ${missed} places.`);
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);

//================================ Repeat Zad 2

function shoppingList(input) {
  let groceries = input.shift().split("!");

  let line = input.shift();

  while (!line.includes('Go')) {
    let [command,item,newItem] = line.split(" ")
    urgent(command,item,newItem);
    unnecessary(command,item,newItem);
    correct(command,item,newItem);
    rearrange(command,item,newItem);

    line = input.shift()
  }

 console.log(groceries.join(", "));

  function urgent(actionWord, list, item) {
    if (actionWord === "Urgent") {
      if (list.includes(item)) {
        list.unshift(item);
      }
    }
  }
  function unnecessary(actionWord, list, item) {
    if (actionWord === "Unnecessary") {
      if (list.includes(item)) {
        let index = list.indexOf(item);
        list.splice(index, 1);
      }
    }
  }
  function correct(actionWord, list, item, newItem) {
    if (actionWord === "Correct") {
      if (list.includes(item)) {
        let index = list.indexOf(item);
        list[index] = newItem;
      }
    }
  }
  function rearrange(actionWord, list, item) {
    if (actionWord === "Rearange") {
      if(list.includes(item)){
        let index = list.indexOf(item);
        list.splice(index,1);
        list.push(item);
      }
    }
  }
}

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
])
*/