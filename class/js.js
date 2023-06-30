// function sum (a,b){
//     const sum = a + b;
//     return sum;
// }

// console.log(sum (10,20))

// //?----------- function gọi 1 lần duy nhất

// //?--------- arrow function
// const getdata = (data) =>{
//     return  data;
// };

// //&--- cách viết tắt bỏ qua return;
// const getdata2 = (data) => data;

// //&---- tính tổng có thể nhập nhiều đối số mà ko cần phải gọi thêm tham số
// function calculator () {

//     let sum = 0;
//     for (let index = 0; index < arguments.length; index++) {
//         const element = arguments[index];
//     }

//     return sum;
// }
// console.log(calculator(2,3,4));
// console.log(calculator(2,3,4,5,6,7,8,9,20));
// -------------------------------------------------------------------
const inputValue = () => {
  const value = document.getElementById("prime").value;
  //* convert to string
  const convert = value.split(",");
  let result = "";
  for (let i = 0; i < convert.length; i++) {
    if (isPrime(convert[i])) {
      result += `${convert[i].join()}`;
    }
  }
  const show = document.getElementById("show");
  show.innerHTML = result;
};
// hàm check số nguyên tố
const isPrime = (a) => {
  // kiểm tra có phải số hay ko
  if (isNaN(a)) {
    return false;
  }

  if (a < 2) {
    return false;
  }
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) {
      isPrime = false;
      return `${a} ko phải là số nguyên tố `;
    }
  }
  return `${a} là số nguyên tố`;
};

//&--------------------------------(chuyển đổi feet sang meter)---------------------
const arrMeter = [];
const arrFeet = [];

//todo: lấy giá trị của input
const takeVaule = () => {
  const feetValue = document.getElementById("feet").value;

  const result = document.getElementById("result_2");
  let saveResult = calculatorMF(feetValue);
  console.log(saveResult);
  result.value = saveResult;
  //todo: push vào mảng
  arrFeet.push(`${feetValue}`);

  arrMeter.push(`${result.value}`);

  renderValue(arrMeter, arrFeet);
};
console.log(arrFeet, arrMeter);
//todo: function tính
function calculatorMF(a) {
  if (isNaN(a)) {
    return false;
  }
  return 0.305 * a;
}

//todo: nhập dữ liệu vào table
const renderValue = () => {
  console.log(arrFeet, arrMeter);
  let result = "";
  for (let i = 0; i < arrFeet.length; i++) {
    result += `<li> ${arrFeet[i]} ----- ${arrMeter[i]}</li>`;
  }
  document.getElementById("showFeet").innerHTML = result;
};

//&--------------------------------(vẽ hình )---------------------

const inputRol = () => {
  //todo: nhập số N
  const inputElementRow = +prompt(` nhập số N`);
  //todo: trở đến phần tử để show

  drawCircle(inputElementRow);
  drawSquare(inputElementRow);
  drawRectangle(inputElementRow);
};

const drawCircle = (a) => {
  document.getElementById("show_draw").style.height = a + "px";
  document.getElementById("show_draw").style.width = a + "px";
  document.getElementById("show_draw").style.borderRadius = "50%";
  document.getElementById("show_draw").style.border = "1px solid";
};

const drawSquare = (a) => {
  document.getElementById("show_square").style.height = a + "px";
  document.getElementById("show_square").style.width = a + "px";
  document.getElementById("show_square").style.border = "1px solid";
};

const drawRectangle = (a) => {
  document.getElementById("show_rec").style.height = a + "px";
  document.getElementById("show_rec").style.width = a * 3 + "px";
  document.getElementById("show_rec").style.border = "1px solid ";
};
// --------------------------------------------------------------
// ? crud
const arrProduct = ["acer", "lenovo", "asus", "msi"];

let VT = "";
renderProduct(arrProduct);
const handleAdd = () => {
  //todo: xác định giá trị cần add
  const inputValue = document.querySelector("#input");
  console.log(inputValue);

  //todo: thêm vào product
  arrProduct.push(inputValue.value);
  console.log(arrProduct);
  console.log(inputValue.value);
  //todo: xóa
  inputValue.value = "";

  //todo: render kết quả
  renderProduct(arrProduct);
};
//~ xóa phần tử
function handleIndex(a) {
  // xóa phân tử thứ n
  arrProduct.splice(a, 1);
  renderProduct(arrProduct);
}
//~update lại phần tử
function btnUpdate() {
  const valueUpdate = document.getElementById("update").value;
  if (valueUpdate === "") {
    return;
  } else {
    arrProduct.splice(VT, 1, valueUpdate);
    renderProduct(arrProduct);
    console.log(VT);
  }
  // document.querySelector(".coverUpdate").style.display = "none";
}
const adasd = function () {};
//~ edit phần tử
const handleUpdate = (a) => {
  VT = a;
  document.querySelector(".coverUpdate").style.display = "block";
  const inputUpdate = document.getElementById("update");
  inputUpdate.value = arrProduct[a];
  return a;
};

//~ searchProduct
function handleSearch() {
  debugger;
  let isCheck = true;
  const arrSearch = [];
  const inputSearch = document.getElementById("search").value;
  for (let i = 0; i < arrProduct.length; i++) {
    if (arrProduct[i].toLowerCase().includes(inputSearch.toLowerCase())) {
      //todo: đẩy phần tử vào mảng rỗng
      arrSearch.push(arrProduct[i]);
      console.log(arrSearch);
      isCheck = false;
      break;
    }
  }
  if (isCheck) {
    return alert`ko tìm thấy thành phần cần tìm`;
  } else {
    return renderProduct(arrSearch);
  }
}

//~ render
function renderProduct(arrProduct) {
  const show = document.getElementById("table_product");
  let tempProduct = `
    <div class="title">
    <p> product name </p>
    <p> ${arrProduct.length} product</p>
    </div>
  `;
  for (let i = 0; i < arrProduct.length; i++) {
    tempProduct += `<tr>
                    <td> ${arrProduct[i]} </td>
                    <td><button onclick="handleUpdate(${i})">edit</button></td>             
                    <td><button onclick="handleIndex(${i})">delete</button></td> 
                    </tr>`;
  }
  //* log ra html
  show.innerHTML = tempProduct;
}
