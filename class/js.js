//? khai bao array

//? cách 1
const cars = ["BWM", "toyota", "honda", "vin"];
console.log(cars);
console.log(cars.length);
console.log(cars[3]);
const a = [];
console.log(a.length);
//? thay thế phần tử

cars[0] = "madaz";

console.log(cars);

//?tạo 1 mảng với 100 ký tụư
const number = [];

for (let i = 0; i < 100; i++) {
  number[i] = i + 1; //^ thêm phần tử i vào mảng xếp theo cá thứ tự của mảng
}

console.log(number);
//~--------------------------------------------------------------------------------------

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[fruits.length - 1]); // Plum
console.log(fruits[fruits.length - 3]);
//* short
console.log(fruits.at(-1)); // Plum
console.log(fruits.at(-3)); // apple

//* pop
fruits.pop(); // remove "Pear" and alert it
console.log(fruits); // Apple, Orange

//*push
fruits.push("Pear");
console.log(fruits);

//~ tạo mảng
const row = 5;
const col = 6;
const testRow = [];

for (let m = 0; m < row; m++) {
  testRow[m] = [];
  for (let i = 0; i < col; i++) {
    const number = parseInt;
  }
}

//* bai-tập
myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
let result = myColor.join();

// for (let i = 0; i < myColor.length; i++) {
//     result += `${myColor[i].join()}`
// }
console.log(result);

console.log();

//&----------------------------------(1)----------------------------------------
function array() {
  const resultElement = document.getElementById("showResult");
  const inputNumber = prompt("nhập 1 số bất kỳ ");
  let warp = "";
  //todo: đổi 1 chuổi string thành 1 array
  const strCopy = inputNumber.split("");
  console.log(strCopy);
  for (let i = 0; i < strCopy.length; i++) {
    if (strCopy[i] % 2 == 0 && strCopy[i + 1] % 2 == 0) {
      warp += `${strCopy[i]}-`;
    } else {
      warp += `${strCopy[i]}`;
    }
  }
  resultElement.innerHTML = warp;
  console.log(warp);
}
//&----------------------------------(2) dung --------------------------------------
function array() {
    const resultElement = document.getElementById("showResult_1");
    const inputNumber = prompt("nhập chữ bất kì bất kỳ ");
    let warp = "";
    //todo: đổi 1 chuổi string thành 1 array
    const strCopy = inputNumber.split("");
    console.log(strCopy);
    for (let i = 0; i < strCopy.length; i++) {
        //todo: kiểm tra có phải chữ hoa chữ thường ko 
      if (strCopy[i]=== strCopy[i].toUpperCase()) {
        const changelow = strCopy[i].toLowerCase();
        //todo:
        console.log(strCopy[i])

        warp += `${changelow}`;
      } else {
        const changeUp = strCopy[i].toUpperCase();
        warp += `${changeUp}`;
      }
    }
    resultElement.innerHTML = warp;
    console.log(warp);
  }

// &-----------------------------------(3)------------------------------------
function array() {
    const Upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const resultElement = document.getElementById("showResult_1");
    const inputNumber = prompt("nhập chữ bất kì bất kỳ ");
    let warp = "";
    let islower = true;
    for (let i = 0; i < inputNumber.length; i++) {
        for(let j=0; j < Upper.length; j++) {
            if(inputNumber[i] == Upper[j]){
                let change = inputNumber[i].toLowerCase();
                console.log(change);
                warp += change;
                islower = false;
            }
        }
        if(islower){
            change = inputNumber[i].toUpperCase();
            console.log(change);
            warp += change;
        }
  }
  
  resultElement.innerHTML = warp;
  console.log(warp);
} 
//&---------------------------------(4)-----------------------------------------
function tranlate(){
    const engLish = ["day", "month", "hour", "minute", "second"];
    const vietLish= ["ngày", "tháng", "giờ", "phút", "giây" ];
    //todo: lấy giá trị của ô input 
    const inputElement = document.getElementById('change').value;
    // inputElement.toLowerCase();
    let position;
    let mean;
    //todo: log ra check giá trị 
    console.log(inputElement);
    for (let index = 0; index < engLish.length; index++) {
        for (let i = 0; i <vietLish.length ; i++){
            if (vietLish[i] === inputElement){
                console.log(inputElement)
                position = i;
                console.log(1,position);
                break;
            }
        } 
        if(position === index){
            mean = engLish[index];
        } else{
            mean = `ko tìm đc kết quả`
        }
        
    }

    //todo: trỏ tới ô input kết quả ko đc lấy value vì ko tham chiếu đến đc 
    const resultElement = document.getElementById('show_3');
    resultElement.value = mean;
    console.log(resultElement);
}
//&----------------------------------(5)--------------------------------------
function array() {
    const fakeText ="you are so stupid"
    const resultElement = document.getElementById("text");
    const inputNumber = prompt("nhập chữ bất kì bất kỳ ");
    let warp = "";
    let islower = true;
    for (let i = 0; i < inputNumber.length; i++) {
        for(let j=0; j < Upper.length; j++) {
            if(inputNumber[i] == Upper[j]){
                let change = inputNumber[i].toLowerCase();
                console.log(change);
                warp += change;
                islower = false;
            }
        }
        if(islower){
            change = inputNumber[i].toUpperCase();
            console.log(change);
            warp += change;
        }
  }
  
  resultElement.innerHTML = warp;
  console.log(warp);
} 
//&----------------------------------(6)--------------------------------------
const arrSave = [];
function CRUD(){
    const inputText = document.getElementById('add');
    const show = document.getElementById('show');
    console.log(inputText);
    let result = "";
    arrSave.push(`${inputText.value}`)
    console.log(arrSave);

    for (let i = 0; i < arrSave.length; i++) {
         result += `<li> ${arrSave[i]}</li>`;
      }
      //todo: in ra hình 
      
    show.innerHTML = result;
    inputText.value="";

}
