function bai_for() {
  const resultElement = document.getElementById("show");
  let showResult = "";
  let number = +prompt(" nhap vao so muon dua vao ");
  for (let i = 1; i < 10; i++) {
    showResult += `${number} x ${i} = ${i * number}  `;
    resultElement.innerHTML = showResult;
  }
}

function bai_for_1() {
  for (let i = 0; i < 10; i++) {
    if (i === 10) {
      break;
    }
    console.log(i);
  }
}

function bai_for_2() {
  const resultElement = document.getElementById("show_2");
  // const tableDesign = document.getElementById('table');
  let showResult = "";
  for (let row = 1; row < 10; row++) {
    showResult += `<tr></tr>`;
    for (let col = 1; col < 10; col++) {
      showResult += `<td> ${row} x  ${col} = ${row * col}</td>`;
    }
  }
  //* in ra ket qua
  resultElement.innerHTML = showResult;
  //* css trong js cho bang
  resultElement.style.border = "1px solid #0000FF";
  resultElement.style.gap = "1px";
}
// *----------------------------------------------------------------
function bai_for_3() {
  let count = 0;
  let input = 0;
  let inputSum = 0;
  while (count < 30) {
    if (input % 7 == 0) {
      count++;
      inputSum = inputSum + input;
    }

    input++;

    console.log(inputSum);
  }

  document.getElementById("show_3").innerHTML = inputSum;
}
// *----------------------------------------------------------------------

function bai_for_4() {
  let number = +prompt(" nhập một số vào ô trống  ");
  const showResult = "";
  if (number < 2 || number > 100) {
    alert("mời nhập lại ");
  } else {
    for (let i = 2; i <= number; i++) {
      let div = i ** 2;

      if (div % 2 != 0) continue;
      console.log(div);
    }
  }
}
//*------------------------------------------------------------------------
function bai_for_5() {
  let number = +prompt(" nhập một số vào ô trống  ");
  const showResult = "";
  let div = 0;
  if (number < 2 || number > 100) {
    alert("mời nhập lại ");
  } else {
    for (let i = 2; i <= number; i++) {
      // todo: check điều kiện
      if (i % 2 == 0) {
        div = i ** 2;
      }
      console.log(div);
      showResult += "" + div;
      //    console.log(document.getElementById('show_5'));
    }
    document.getElementById("show_5").innerHTML = div;
  }
}
//*-----------------------------------------------------------------------------
function bai_for_6() {
  // let text = prompt(" nhập chữ từ vòng lập  ")

  //     for (let i = 0 ; i <= 10; i++) {
  //         const colorText = ma
  //      }

  //^ random màu
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);

  //^ random có đc màu sắc random
  const color = `rgb(${r}, ${g}, ${b})`;
  //^ tạo console.log đổi màu
  console.log("%c kiem tra ", `color : ${color};`);
}
// &------------------------------------------------------------------
function bai_for_7() {
  let number = +prompt(" nhập một số vào ô trống  ");
  const div = document.getElementById("show_7");
  //todo: gán nó là số nguyên tố
  let isPrime = true;

  if (number < 2) {
    alert(`${number} ko phải số nguyên tố`);
    return;
  }

  for (let i = 2; i <= number; i++) {
    // todo: check điều kiện
    if (number % i == 0) {
      //todo: gắn vào ko phải số nguyên tố
      isPrime = false;
      //todo: thoát ra ngoài
      break;
    }
  }

  //todo: cả hai kêt quá nguyên hay ko nguyên tố  sẽ đc đưa ra ngoài vòng for
  //todo: check xem số đã đạt đc false hay chưa
  if (isPrime) {
    div.innerHTML = `${number} là số nguyên tố `;
  } else {
    div.innerHTML = `${number} ko phải là số nguyên tố `;
  }
}
//&--------------------------------------------------------------------
function bai_for_8() {
  let number = 1;
  const div = document.getElementById("show_8");
  let count = 0;
  let result = "";
  while (count < 3) {
    //todo: chuyen vao while
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (number % i == 0) {
        sum += i;
      }
    }
    if (sum === number) {
      result += `${number}, `;
      count++;
    }
    number++;
  }
  div.innerHTML = result;
}
//&------------------------------(9)---------------------------------
function bai_for_9() {
  let number = +prompt(" nhập một số vào ô trống  ");
  const div = document.getElementById("show_9");

  //todo: gán nó là số nguyên tố
  let isCheck = true;
  if (number < 2) {
    alert(`${number} ko phải số nguyên tố`);
    return;
  }
  for (let count = 2; count <= number; count++) {
    for (let i = 2; i < count; i++) {
      // todo: check điều kiện
      if (count % i == 0) {
        console.log(count, "ko phải số nguyên tố");
        isCheck == false;
      }
    }
    if (isCheck) {
      console.log(count, "là số nguyên tố");
      result += `${count},`;
      // console.log(result);
    }
  }

  div.innerHTML = result;
}
//&---------------------------------(10)-------------------------------
function bai_for_10() {
  let soChan = "số chẵn : ";
  let soLe = "số lẽ; ";
  let soNguyenTo = "số nguyên tố :";
  let soHoanHao="số hoàn hảo : ";

  let result = "";
  let number;
  do {
    number = +prompt(" nhập một số vào ô trống  ");
    if (number % 2 == 0) {
      soChan += `${number}, `;
    } else {
      soLe += `${number}, `;
      console.log(soLe);
    }

    if (number > 1) {
      let checkPrime = true;
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          checkPrime = false;
          break;
        }
      }
      if (checkPrime) {
        soNguyenTo += `${number}`;
        console.log(number);
      }
    }
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if(number % i == 0) {
        sum += i
      }
    } 
    if(sum === number){
      soHoanHao += `${number}`;
    }   
  } while (number < 29);

  const div = document.getElementById("show_10");
  const div_1 = document.getElementById("show_10_1");
  const div_2 = document.getElementById("show_10_2");
  const div_3 = document.getElementById("show_10_3");


  // div.innerHTML = result
  div.innerHTML = soChan;
  div_1.innerHTML = soLe;
  div_2.innerHTML = soNguyenTo;
  div_3.innerHTML = soHoanHao;

  // console.log(number);
}
//&----------------------------------(11)------------------------------------
function bai_for_11() {
  const div = document.getElementById("show_11");
  let sum = 0;
  let result = "";
  let count = 0;
    //todo: điều kiện là đếm đủ 30 lần nên ko cần thireet phải theo điều kiện của i
    for(let i = 0;count < 30; i++) {
      if(i%5==0){
        sum += i;
        count ++;
        console.log(count,i);
      }
    }
  result = sum ;
  div.innerHTML = result;
}
//&-----------------------------------(12)-----------------------------------
function bai_for_12(){
  const row = +prompt(" nhập chiều dài:   ");
  const col = +prompt(" nhập chiều rộng  ");
  let result ="";
  for (let i = 1; i <= row; i++) {
    result += "<div>";
    for (let j = 1; j<=col; j++) {
      if(i == 1 || i == row  || j == col || j == 1){
        result += "*";
      }else{
        result += "&nbsp;&nbsp;";
      }
      
    }
    result += "</div>";
  }
  //todo: in ra hình 
  const div = document.getElementById("show_12");
  div.innerHTML = result;
}
//&-----------------------------------(13)-----------------------------------
function bai_for_13(){
  const height = 5;
  const weight = 6;
  let result = "";
  for (let row = 0; row <= weight; row++) {
    result += "<div>";
    for (let col = 0; col <= height; col++) {
     if((row == 0 && col%3!==0 ) && (row == 1 && col%3===0)){
      result += "*";
    }else if((row + col == 8) || (row - col == 2)){
      result += "*";
    }else
    result += "</div>";
    }
  }
  //todo: in ra hình 
  const div = document.getElementById("show_13");
  div.innerHTML = result;
}
//&-----------------------------(14)---------------------------------------
function bai_for_14(){
  const r = +prompt(" nhập chiều dài:  ");
  const circle = document.getElementById('circle');
  circle.style.borderRadius = "50%";
  circle.style.width = r + "px";
  circle.style.height = r + "px";
  circle.style.border = "solid red 2px";
}
//&----------------------------(15)---------------------------------------
function bai_for_15(){
  const height = +prompt(" nhập chiều rộng  ");
  for (let col = 1; col <= height; col++) {
    let result = ""
    for (let space = 1; space <= height - col; space++) {
        result += "*";
    }
    for (let row = 1; row < col*2; row++) {
        result += "*";
    }
    result += "</div>";
  }
  //todo: in ra hình 
  const div = document.getElementById("show_12");
  div.innerHTML = result;
}