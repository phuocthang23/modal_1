function changeCTof() {
  const inputValue = document.getElementById("feet");
  const resultValue = document.getElementById("result");
  // * gọi funtion để tính toán  lấy kết quả
  const cToF = selectCacular(inputValue.value);
  console.log(cToF);
  resultValue.value = cToF;
  console.log(resultValue);
}

function calculatorC(F) {
  return (F - 32) / 1.8;
}

function calculatorf(C) {
  return C * 1.8 + 32;
}

function selectCacular(input) {
  const select = document.getElementById("choose");
  const e = select.value;
  console.log(e);
  if (e == "1") {
    return calculatorC(input);
  } else {
    return calculatorf(input);
  }
}
// &-------------------------(2)-----------------------------
function changeUpper() {
  const inputValue = document.getElementById("text");
  const resultValue = document.getElementById("result_1");

  resultValue.value = upperText(inputValue.value);
  console.log(resultValue.value)
}

function upperText(upper) {
  let lowerText = upper.toLowerCase();
  console.log(lowerText);
  let resultLetter = lowerText[0].toUpperCase();

  let fisrtLetter = lowerText.slice(1, lowerText.length);
  console.log(fisrtLetter);

  console.log(resultLetter);

  for (let letter of fisrtLetter) {
    resultLetter += letter;
  }
  console.log(resultLetter);
}
//&------------------------------(3)-----------------------------
function checkIsNumber(){
    const inputValue = document.getElementById("text_2");
    const resultValue = document.getElementById("result_2");

    resultValue.innerHTML = checkNumber(inputValue.value)
}
 function checkNumber(number){
    if(isNaN(number)){
        return `đây ko phải là number`;
    }else{
        return `đây là number`
    }
 }
 //&-----------------------------(4)------------------------------
const arrtotal = [1,2,3,4,5,6,7,8,9,10];

 function ckeckTotal(){
  // debugger;
  const resultValue = document.getElementById("result_3");
  resultValue.innerHTML = isTotal10(arrtotal)
  isTotal10(arrtotal)
}
function isTotal10(a){
  // debugger;
  let arrEmty = [];
  let result = "";
  for(let i=0;i<a.length;i++){
    for(let j= i+1;j<a.length;j++){
      if(a[i] + a[j] == 10){
          result += `${a[i]} + ${a[j]},`
          arrEmty.push(result);
          
      }
  }
} 
  console.log(arrEmty)
}
//&----------------------------------(5)------------------------------


// function timesOfAppear(convertArr) {
//   const str = prompt("Type your word here to check", "hello world");
//   const convertArr = str.split("");
//   for (let i = 0; i < convertArr.length; i++) {
//     let rep = 1;
//     for (let j = i + 1; j < convertArr.length; j++) {
//       if (convertArr[i] === convertArr[j]) {
//         rep++;
//         convertArr.splice(j, 1);
//         j--;
//       }
//     }
//     console.log(`ký tự ${convertArr[i]} xuất hiện ${rep} lần`);
//   }
// }

// timesOfAppear(convertArr);

//&----------------------------------(6)------------------------------
function sort (){
  const numbersString = prompt(` nhập chuỗi ký tự  `)
  let arrSort = numbersString.split('-')
  console.log(arrSort)
 
  arrSort.sort(compare);

  console.log(arrSort);
}

function compare (a, b){
  return a - b;
}