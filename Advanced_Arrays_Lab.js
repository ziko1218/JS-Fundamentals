/*
function demo() {
    let arr = [];
    arr.push(2,25,100)
    let favoriteNum = arr.pop()
console.log(arr);
 console.log(favoriteNum);
}
demo()

//================================================= Zad 1

function sumFirstLast(numsAsString) {

let first = Number(numsAsString.shift());
let last = Number(numsAsString.pop())
return first + last;
}
console.log(sumFirstLast(['5','10'])); 

//==================================================== Zad 2

function append(nums) {
  let result = [];

  for (let num of nums) { // itterate through all input elements via loop
    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }
  for (let num of result){ // itterate through all result elements via loop
      //console.log(num);
}
  console.log(result.join('\n'));
}
append(["5", "-2", "-15", "10"]);

//====================================================

let myArr = [5, 8, -3, 11, 44, 13, -8];

console.log(myFilter(myArr, x => x > 4));
console.log(myMap(myArr, x=> x + 1));
console.log(`Original Array ${myArr}`);
console.log(mySlice(myArr, 1, 3));
console.log(myIncludes(myArr, 5));
console.log(myIndexOf(myArr, 5));

function myFilter(arr,predicate){
    let result = [];

    for(let element of arr) {
        if (predicate(element)) {
            result.push(element)
        }
    }
    return result;
}

function myMap = (arr,operation) {
    let result = [];
    for (let element of arr) {
        result.push(operation(element))
    }
    return result
}

function myIncludes(element, value) {
  for (let element of myArr) {
    if (element === value) {
      return true;
    }
  }
  return false;
}

function myIndexOf(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
}

function mySlice(arr, start, end) {
  //create variable to store reult
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}

function mySplice(arr, start, countCut, add1, insert) {
  // create var to store deleted elements
  // slice from 'start' to 'start'+ 'count' (removed part)

  // slice from 0 to 'start' (left part)
  //slice right part before index of deletion
  //slice from 'start' + ' count' to end (right part)
  // push new elements to left part
  // push all elements from right part to left part
  // (trmp) return deleted elements

  let left = arr.slice(0, start);
  let removed = arr.slice(start, start + count);
  let right = arr.slice(start + count);
  for (let element of insert) {
    left.push(element);
  }
  for (let element of right) {
      left.push(element)
  }
  return left;
}

//================================================================= Zad 3

function firstLast(arr) {
  // create two variables for result
  // extract 1st element (shift)
  // itterate forward from 0 to K
  // itterate backwards from length -1 to length - k
  let k = arr.shift();
  let forward = [];
  for (let i = 0; i < k; i++) {
    forward.push(arr[i]);
  }

  let backwards = [];
  for (let i = arr.length - k; i < arr.length; i++) {
    backwards.push(arr[i]);
  }
  console.log(forward.join(" "));
  console.log(backwards.join(" "));
}
firstLast([2, 7, 8, 9]);

//============================================================== Zad 3 Repeat with another method

function firstLast(arr) {
  let k = arr.shift();
  let forward = arr.slice(0, k);
  let backwards = arr.slice(arr.length - k);
  console.log(forward.join(" "));
  console.log(backwards.join(" "));
}
firstLast([2, 7, 8, 9]);

//------------

function firstLast(arr) {
    let k = arr[0];
    let forward = arr.slice(1, k + 1);
    let backwards = arr.slice(arr.length - k);
    console.log(forward.join(" "));
    console.log(backwards.join(" "));
  }
  firstLast([2, 7, 8, 9]);

//================================================================

function fibonachi(n, k) {
  // create variable to hold result, starting with 1
  let result = [1];
  // repeat n times
  for (let i = 1; i < n; i++) {
    // calculate next element
    // slice from result k elements from the end
    //sum sliced elements
       let current = 0;
    for (let num of result.slice(-k)) {
      current += num;
    }
    // store element
    result.push(current);
  }

  // print result
  console.log(result.join(" "));
}
fibonachi([6, 3]);
fibonachi([8, 2]);
fibonachi([9, 5]);

//========================================================================== Map

let myArr = ["one",'two','three','four'];
let lenghts = myArr.map(x => x.length);
console.log(lenghts);

//===================================================================== filter

let myArr = ["one",'two','three','four'];
let longWords = myArr.filter(x => x.length > 3)
console.log(longWords);

//========================================================== Zad 4

function mapTask(nums) {
  // filter only elements at odd indexes
  //let predicate = (x, i) => i % 2 == 1;
  let filtered = nums.filter(takeOddIndex); // predikat-a може да приеме два елемента като вторият е i (index)
  // map filter elements and double them x => h*2
  let operation = (x) => x * 2;
  let mapped = filtered.map(operation);
  //reverse array
  mapped.reverse();

  //print
  console.log(mapped.join("  "));
}

function takeOddIndex (x, index) {
    console.log((index, "->", x));
    return index % 2 == 1;
}

mapTask([10, 15, 20, 25);

//======================================= Hacker way of the previous task

let mapTask = (n) => n
    .filter((x, i) => i % 2 == 1)
    .map((x) => x * 2)
    .reverse()
    .join(" ");

mapTask([10, 15, 20, 25]);
*/
//=========================================== Sort

// words.sort((a,b) => a.localeCompare(b))

function smallestTwoNumbers(arr) {

    arr.sort((a,b) => a-b)   // с a - b ги подреждаме по големина 
    let result = arr.slice(0,2)
    return result.join(" ")
}
console.log(smallestTwoNumbers([30,15,50,5])); 

//=====================================================




