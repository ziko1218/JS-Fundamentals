/*
function reception(input) {
  let parsed = input.map((x) => Number(x));

  let firstWorkerEffeciency = parsed[0];
  let secondWorkerEffeciency = parsed[1];
  let thirdWorkerEffeciency = parsed[2];
  let studentsCount = Number(input[3]);

  let totalStudentsPerHour = Number(
    firstWorkerEffeciency + secondWorkerEffeciency + thirdWorkerEffeciency
  );

  let answered = 0;
  let hour = 0;

  while (answered < studentsCount) {
    if (hour % 4 === 0 && hour !== 0) {
      hour++;
      continue;
    }
    answered += totalStudentsPerHour;
    hour++;
  }
  if (hour % 4 === 0 && hour !== 0) { // заради граничният случай
    hour++;
    
  }
  console.log(`Time needed: ${hour}h.`);
}

// reception(["5", "6", "4", "20"]);
// reception(["1", "2", "3", "45"]);
reception(["3", "2", "5", "40"]);

//============================== Array modifier

function arrayMofifier(input) {
  let originalArray = input.shift().split(" ").map(Number);

  let index = 0;
  for (line of input) {
    let inputElements = line.split(" ");
    let command = inputElements[index];

   
      if (command === "end" ) {
        break;
      }
      if (command === "swap") {
        let firstIndex = Number(inputElements[1]);
        let secondIndex = Number(inputElements[2]);

        let temp = originalArray[firstIndex];
        originalArray[firstIndex] = originalArray[secondIndex];
        originalArray[secondIndex] = temp;
        //console.log(originalArray[firstIndex],originalArray[secondIndex]);
      } else if (command === "multiply") {
        firstIndex = Number(inputElements[1]);
        secondIndex = Number(inputElements[2]);

        originalArray[firstIndex] *= originalArray[secondIndex];
      } else {
        for (let index = 0; index < originalArray.length; index++) {
          originalArray[index]--;
        }
      }
     
  }
  console.log(originalArray.join(", "));
}

arrayMofifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);

//========================================= 


let arr1 = [2, 4, 7, 9, 25, 100];
let arr2 = arr1.splice(2, 3, 99, 99, 99);
let arr3 = arr1.slice(1,3)
//console.log(arr2);

//console.log(arr1);
console.log(arr3);
*/
//================================= Zad 3 Numbers

function solve(inputLine) {
  let numbers = inputLine.split(" ").map(Number);

  let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  let avg = sum / numbers.length;

  let filtered = numbers.filter((num) => num > avg);

  // descending => b-a;
  // ascending => a-b;

  let sorted = filtered.sort((a, b) => b - a);
  let firstFive = sorted.slice(0, 5); // (slice-a не включва последният)

  if (firstFive.length === 0) {
    console.log("No");
  } else {
    console.log(firstFive.join(" "));
  }
}
solve("5 2 3 4 -10 30 40 50 20 50 60 60 51");

//============================================


