/*
function solve(input) {
  let foodPerMonthGrams = Number(input[0] * 1000);
  let hayPerMonthGrams = Number(input[1] * 1000);
  let coverPerMonthGrams = Number(input[2] * 1000);
  let weightPigGrams = Number(input[3] * 1000);

  let feedPerDay = 300; //

  let hayProcent = 0;
  let cover = 0;
    
  let isEverithingOK = true;
  for (let days = 1; days <= 30; days++) {
      
   foodPerMonthGrams -= feedPerDay;
 
    if (days % 2 === 0) {
      hayProcent =  foodPerMonthGrams * 0.05;
      hayPerMonthGrams -= hayProcent;
    }
    if (days % 3 === 0) {
      cover = (1 / 3) * weightPigGrams;
      coverPerMonthGrams -= cover;
    }
    
    if (foodPerMonthGrams <= 0 || hayPerMonthGrams <= 0 || coverPerMonthGrams <= 0) {
      isEverithingOK = false;
      break;
    }
  }
  if (isEverithingOK) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(foodPerMonthGrams/1000).toFixed(
        2
      )}, Hay: ${(hayPerMonthGrams/1000).toFixed(2)}, Cover: ${(coverPerMonthGrams/1000).toFixed(2)}.`
    );
  } else {
    console.log(`Merry must go to the pet store!`);
  }
}
solve(["10", "5", "5.2", "1"]);


// You receive food – 10000, hay – 5000, cover – 5200, weight – 1000 (in grams).
// On first day Merry gives Puppy 300 gr food – 9700.
// On second day food – 9400 and need hay –
// 9400 * 5%  = 470, remain hay – 5000 – 470 = 4530. On third day cover – 5200 – (1000 / 3) = 4866.67 and food -  9100.
// On last day Merry has – food – 1.00, hay – 1.10, cover – 1.87.
*/
//====================================================

function solve(input) {
  let oldFavorites = input.shift().split(" | ");
  //   let index = 0;
  //   let current = oldFavorites[index];

  for (let inputLine of input) {
    inputElements = inputLine.split(" ");
    let command = inputElements[0];
    let gender1 = inputElements[1];
    let gender2 = inputElements[2]

    if (command === "Stop!") {
      break;
    } else {
      if (command === "Join") {
        if (!oldFavorites.includes(gender1)) {
          oldFavorites.push(1);
        }
      } else if (command === "Drop") {
        if (oldFavorites.includes(gender1)) {
          oldFavorites.splice(gender1, 1);
        }
      } else if (command === "Replace") {
        gender1.replace(gender2)
      }
    }
  }

  console.log(oldFavorites.join(" "));
}

solve([
  "Romance | Fiction | Horror | Mystery",
  "Drop Romance",
  "Join Fantasy",
  "Stop!",
]);

