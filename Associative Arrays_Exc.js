/*
 
function wordsTracker(listOfStrings) {
  let wordsToSearch = listOfStrings.shift().split(" ");

  let words = {};

  for (let word of wordsToSearch) {
    words[word] = 0;
  }

  for (let word of listOfStrings) {
    if (Object.keys(words).includes(word)) {
      words[word] += 1;
    }
  }
  // [this,3]
  // [sentense,2]
  let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);
  //console.log(sortedWords);
  for (let [key, value] of sortedWords) {
    console.log(`${key} - ${value}`);
  }
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

//===============================================

function oddOccurrences(string) {
  let occurrences = {};
  let listOfStrings = string.split(" ");
  for (let string of listOfStrings) {
    // set to lower cases
    let stringToLower = string.toLowerCase();
    // check if strings exist in occurrences
    if (!Object.keys(occurrences).includes(stringToLower)) {
      // if not exists -> create with count 0
      occurrences[stringToLower] = 0;
    }
    // increase count
    occurrences[stringToLower] += 1;
  }
  let resultString = "";
  for (let [key, value] of Object.entries(occurrences)) {
    if (value % 2 !== 0) {
      resultString += `${key} `;
    }
  }
  console.log(resultString);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

//=====================================================

function piccolo(commands) {
  let cars = [];

  for (let command of commands) {
    let [direction, carNumber] = command.split(", ");

    if (direction === "IN") {
      if (!cars.includes(carNumber)) {
        cars.push(carNumber);
      }
    } else {
      if (cars.includes(carNumber)) {
        cars.splice(cars.indexOf(carNumber), 1);
      }
    }
  }

  let sortedCars = cars.sort((a, b) => a.localeCompare(b));

  if (sortedCars.length > 0) {
    console.log(sortedCars.join(`\n`));
  } else {
    console.log("parking Lot is Empty");
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

//=================================================== Zad 4


function partyTime(listOfGuests) {
  let indexOfParty = listOfGuests.indexOf("PARTY");
  let digitList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let vip = [];
  let regular = [];

  // adding guests
  for (let i = 0; i < indexOfParty; i++) {
    let currentGuest = listOfGuests[i];
    if (digitList.includes(currentGuest[0])) {
      vip.push(currentGuest);
    } else {
      regular.push(currentGuest);
    }
  }

  // removing guests
  for (let i = indexOfParty + 1; i < listOfGuests.length; i++) {
    let currentGuest = listOfGuests[i];
    if (vip.includes(currentGuest)) {
      vip.splice(vip.indexOf(currentGuest), 1);
    } else if (regular.includes(currentGuest)) {
      regular.splice(regular.indexOf(currentGuest), 1);
    }
  }
  let totalGuestLeft = vip.length + regular.length;
  console.log(totalGuestLeft);

  for (let guest of vip) {
    console.log(guest);
  }
   for (let guest of regular){
     console.log(guest);
   }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);


//======================================================== Zad 5 Card Game

function cardGame(input) {
  let symbolToPoints = {"J": 11, "Q": 12, "K": 13, "A": 14, "S": 4, "H": 3, "D": 2, "C": 1};
  let players = {};
  let results = {};
  for (let command of input) {
    let tokens = command.split(": ");
    let playerName = tokens[0];
    let playerCards = tokens[1].split(", ");

    if (!Object.keys(players).includes(playerName)) {
      players[playerName] = [];
    }
    players[playerName] = players[playerName].concat(playerCards);
  }
  //calculate points
  for (let [playerName, playerCards] of Object.entries(players)) {
    results[playerName] = 0;

    for (let i = 0; i < playerCards.length; i++) {
      let card = playerCards[i];
      if (playerCards.indexOf(card) === i) {
        // Вложеният масив е за самите карти които са също вложен масив
        let cardAsArray = card.split("");
        let type = cardAsArray.pop();
        let power = cardAsArray.join('');
        let cardPoints = 0;

        if (Object.keys(symbolToPoints).includes(power)) {
          cardPoints = symbolToPoints[power] * symbolToPoints[type];
        } else {
          cardPoints = Number(power) * symbolToPoints[type];
        }
        results[playerName] += cardPoints;
      }
    }
  }
  for (let [key, value] of Object.entries(results)) {
    console.log(`${key}: ${value}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

//============================================= Зад 6

function travelTime(input) {
  let destinations = {};
  //fill destinations
  for (let element of input) {
    let [country, town, cost] = element.split(" > ");
    //country does not exist
    if (!Object.keys(destinations).includes(country)) {
      destinations[country] = {};
    }
    // country exist
    // doesn't exist
    if (!Object.keys(destinations[country]).includes(town)) {
      destinations[country][town] = Number(cost);
    }
    // town exist
    if (Number(cost) < destinations[country][town]) {
      destinations[country][town] = Number(cost);
    }
  }
  let sortedCountries = Object.entries(destinations)
  .sort((a,b) => a[0].localeCompare(b[0]) 
  || Object.values(a[1]).reduce((x,y) => x + y) 
     - Object.values(b[1]).reduce((x,y) => x + y))

     for (let [country,towns] of sortedCountries) {
       let townsAsEntries = Object.entries(towns).map(x => `${x[0]} -> ${x[1]}` );
       console.log(`${country} -> ${townsAsEntries.join(' ')}`);
     }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);

//=====================================================  Zad 7

function companyUsers(array) {
  let companies = {};

  array.forEach((line) => {
    let [company, user] = line.split(" -> ");
    //if company doesn't exist
    if (!companies.hasOwnProperty(company)) companies[company] = [];
    // if user doesn't exist
    if (!companies[company].includes(user)) companies[company].push(user);
  });

  let sortedCompanies = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  // print result

  for (let el of sortedCompanies) {
    console.log(el[0]);
    let uniqUsers = new Set(el[1]);
    for (let user of uniqUsers) {
      console.log(`-- ${user}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
*/
//================================================ Zad 8

function minerTask(array) {
  let mine = {};

  for (let i = 0; i < array.length; i += 2) {
    let resources = array[i];
    let quantity = Number(array[i + 1]);
    if (!Object.keys(mine).includes(resources)) {
      mine[resources] = quantity;
    } else {
      mine[resources] += quantity;
    }
  }
  Object.entries(mine).map((x) => console.log(`${x[0]} -> ${x[1]}`));
}
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
  //     let mineAsArray = Object.entries(mine);
  //     //console.log(mineAsArray);
  //     for (let el of mineAsArray) {
  //       let resources = el[0];
  //       let quantity = el[1];
  //       let uniqueMines = new Set(mineAsArray)
  //       console.log(uniqueMines);
  //       //console.log([n`${resources} -> ${quantity}`]);
  //     }

//minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
//===============================================
