// Zad 1 - Train
/*
function trainFunction(input) {
  let train = input
    .shift()
    .split(" ")
    .map((x) => Number(x));
  let maxCapacity = Number(input.shift());

  for (let command of input) {
    let tokens = command.split(" ");

    if (tokens[0] === "Add") {
      let passangers = Number(tokens[1]);
      train.push(passangers);
    } else {
      let passangers = Number(tokens[0]);
      for (let i = 0; i < train.length; i++) {
        if (maxCapacity >= train[i] + passangers) {
          train[i] += passangers;
          break;
        }
      }
    }
  }
  console.log(train.join(" "));
}
trainFunction([
  "32 54 21 12 4 0 23",
  "75",
  "Add 10",
  "Add 0",
  "30",
  "10",
  "75",
]);

//=========================================== Zad 2

function distinctArray(numbers) {
  let resultArray = [];

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (!resultArray.includes(currentNumber)) {
      resultArray.push(currentNumber);
    }
  }
  console.log(resultArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);

//============================================= Zad 3

function houseParty(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let [name, isGoing, notGoing, action] = line;
    console.log(input[i]);
    //console.log(name,isGoing,notGoing,action);
    if (result.includes(name) && !input[i].includes("not")) {
      console.log(`${name} is already in the list!`);
    }
    if (!result.includes(name) && !input[i].includes("not")) {
      result.push(name);
    }
    if (!result.includes(name) && input[i].includes("not")) {
      console.log(`${name} is not in the list!`);
    }
    if (result.includes(name) && input[i].includes("not")) {
      let index = result.indexOf(name);
      result.splice(index, 1);
    }
  }
  console.log(result.join('\n'));
  console.log('---------------------------------');
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
houseParty([
  'Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)
// ================================================ zad 4 Sorting
/*
function sorting(numbers) {
  let sortedNumbers = [];
  let numbersLength = numbers.length; // защото се преизчислява дължината заради цикъла поради splice-a и масива ме модифицира

  for (let i = 0; i < numbersLength; i++) {
      let number;
      if (i % 2 === 0) {
number = Math.max(...numbers)
      } else{
number = Math.min(...numbers)
      }
 sortedNumbers.push(number);
 numbers.splice(numbers.indexOf(number),1);
}
console.log(sortedNumbers.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

//================================================================== Zad 5Sort an Array by 2 Criteria


function sortByTwoCriteria(input) {

 input.sort((a,b) => {   // анонимна функция защото няма да ми се налага да я използваме отново тази функция
let firstCriteria = a.length - b.length;
let secondCriteria = a.localeCompare(b);
return firstCriteria || secondCriteria;
 }); 
    console.log(input.join(' \n'));
}
sortByTwoCriteria(["gamma","alpha", "beta"])

//================================================================= Zad 6

function bombNumbers(sequence, bombArr) {
  let [bomb, power] = bombArr;
 

  let index = sequence.indexOf(bomb);

  while(index !== -1) {
      let start = index - power < 0 ? 0 : index - power ;

   
      sequence.splice(start,power * 2 + 1);

      index = sequence.indexOf(bomb);
  }

  let sum = 0;
  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
  }
  return sum;
}
console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])); 
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3])); 



//===================================================================  zad 7

function searchNum(sequence,commands) {
    
    let [count, deleteCount,num] = commands;

    let slicedElements = sequence.slice(0,count);
       slicedElements.splice(0,deleteCount);
let filteredNum = slicedElements.filter(x => x == num)
       
return `Number ${num} occurs ${filteredNum.length} times.`

}
console.log(searchNum([5, 2, 3, 4, 1, 6],[5, 2, 3])); 
*/
//===============================================================  Array Manipulator
/*
function arrayManipulator(numbers, commands) {
  for (let command of commands) {
    let tokens = command.split(" ");
    if (tokens[0] === "add") {
      let index = Number(tokens[1]);
      let element = Number(tokens[2]);
      numbers.splice(index, 0, element);
      console.log(numbers);
    } else if (tokens[0] === "addMany") {
      let index = Number(tokens[1]);
      tokens.splice(0, 2);
      let numbersToAdd = tokens.map(Number);
      numbers.splice(index, 0, ...numbersToAdd);
      //console.log(numbers);
    } else if (tokens[0] === "contains") {
      let result = numbers.indexOf(Number(tokens[1]));
      console.log(result);
    } else if (tokens[0] === "remove") {
      let index = Numbers(tokens[1]);
      numbers.splice(index, 1);
      //console.log(numbers);
    } else if (tokens[0] === "shift") {
      let positions = Numbers(token[1]);
      for (let i = 0; i < positions; i++) {
        numbers.push(numbers.shift());
      }
    } else if (tokens[0] === "sumPairs") {
      for (let i = 0; i < numbers.length - 1; i += 2) {
        let resultArray = [];
        if (numbers.length % 2 !== 0) {
          numbers.push(0); // заради цикълът ,че е length -1 и не искаме за 8-цата да остане сама
        }
        let sum = numbers[i] + numbers[i + 1];
        resultArray.push(sum);
      }
      numbers = resultArray;
      console.log(numbers);
    } else if (tokens[0] === "print") {
        console.log(`[${numbers.join(', ')}]`);
        return;
    }
  }
}
arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);


//====================================== Repeat Zad 1

function train(arr) {
  
  let train = arr[0].split( ).map(x => Number(x));
  let maxCapacity = Number(arr.shift())
 
  for(let command of arr){
    let tokens = command.split( );
    
    if(tokens[0] === Add) {
      let passangers = Number(tokens[1]);
      train.push(passangers);
    } else {
      let passangers = Number(tokens[0])
    }
for (let i = 0; i < train.length; i++) {
  if(maxCapacity >= train[i] + passangers) {
    train[i] += passangers;
    break;
  }
}
  }
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)

//========================

function distinctArray(numbers) {
  let array = [];

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (!array.includes(currentNumber)) {
      array.push(currentNumber);
    }
  }
  console.log(currentNumber.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);

//====================================

function sorting(numbers) {
  let sortedNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    let number;
    if (i % 2 === 0) {
      number = Math.max(...numbers);
    } else {
      number = Math.min(...number)
    }
    sortedNumbers.push(number);
    numbers.splice(numbers.indexOf(number),1);
  }
  console.log(sortedNumbers);
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

//==================================

function sortByTwoCriteria(input) {

  input.sort((a,b) => {
    let firstCriteria = a.length - b.length;
    let secondCriteria = a.localecompare(b);
    return firstCriteria || secondCriteria
  })

}
sortByTwoCriteria(["gamma","alpha", "beta"])


//============================ Repeat

function trainFunction(input) {
let train = input.shift().split(' ').map((x) => Number(x))
let macCapacity = Number(input.shift());
for (let command of input) {
  let tokens = command.split('')
}

}
  trainFunction([
    "32 54 21 12 4 0 23",
    "75",
    "Add 10",
    "Add 0",
    "30",
    "10",
    "75",
  ]);

  //==========================================
    RECALL
  */


