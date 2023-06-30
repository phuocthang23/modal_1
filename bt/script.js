class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // tính diện tích
    getAre() {
        return this.width * this.height;
    }
    // tính chu vi 
    getPerimeter = () => {
        return (this.width + this.height)*2;
    };
    //set chiều cao
    setHeiht = (height) => {
        this.height = height;
    }
    //set chiều rộng
    setWidth = (width) => {
        this.width = width;
    };
    printer = () => {
        console.log("diện tích hình chữ nhật là", this.getArea());
        console.log("diện tích hình chữ nhật là", this.getPerimeter());
    };
}

function showResult (){
    const height = Number(prompt("nhập chiều cao hình chữ nhật"));
    const witdth = Number(prompt("nhập chiều dài hình chữ nhật"));
    
    //khai báo 
    const rectangle_1 = new Rectangle(width, height);
    const area_1 = rectangle_1.getArea();
    console.log("Kiểm tra hình chữ nhật", rectangle_1);
    console.log("Diện tích hình chữ nhật là:", area_1);
    
      //   Không cần gọi console.log
    rectangle_1.printer();
    const setHeight = Number(prompt("Nhập vào chiều cao muôn set lại"));
    rectangle_1.setHeight(setHeight); // đối số truyền vào
    rectangle_1.printer();

    //   gọi bên ngoài
    const area_2 = getArea(width, height);
    console.log("Dùng gọi hàm bên ngoài (POP)", area_2);
}


function getArea(width, height) {
 return width * height;
}

// Bài 2
function showResult_1() {
    const obj = { name: "Minh", age: 22 };
    const isEmpty = checkEmpty(obj);
    console.log(isEmpty ? " object không có thuộc tính" : "Object có thuộc tính");
    //   checkEmpty_2(obj);
  }
  
  function checkEmpty(obj) {
    let isEmpty = true;
    for (const key in obj) {
      // console.log("key", key);
      isEmpty = false;
    }
    return isEmpty;
  }
  // function checkEmpty_2(obj) {
  //   const keys = Object.keys(obj);
  //   return !keys.length
  // }

  function bai_03() {
    const catName = prompt("Nhập tên mèo");
    const catWeight = Number(prompt("Nhập cân năng mèo"));
  
    const catSpeed = Number(prompt("Nhập tốc đô mèo"));
  
    const cat = new Cat(catName, catWeight, catSpeed);
    console.log("Kiểm tra mèo", cat);
  
    const mouses = [
      new Mouse(0.5, 10, true),
      new Mouse(0.2, 15, true),
      new Mouse(0.1, 8, true),
      new Mouse(0.9, 0, false),
      new Mouse(0.3, 25, true),
    ];
    console.log("Kiểm tra đàn chuột", mouses);
  
    cat.catchMouse(mouses[0]);
  
    console.log("Kiểm tra mèo sau khi bắt", cat);
  
    //   Yêu cầu mèo bắt hết chuột
  
    mouses.forEach((mouse) => {
      cat.catchMouse(mouse);
    });
    console.log("Kiểm tra đàn chuột sau khi bị bắt", mouses);
    console.log("Kiểm tra mèo sau khi bắt đàn chuột", cat);
  }
  
  // Xây dựng đối tượng mèo và chuột
  
  // Constructor function
  
  function Cat(name, weight, speed) {
    // Khai báo thuộc tính
    this.name = name;
    this.weight = weight;
    this.speed = speed;
  
    // Khai báo hành vi
    this.speak = () => {
      return "Meo Meo";
    };
  
    this.catchMouse = (mouse) => {
      //Điều kiện bắt chuột khi tốc độ mèo lớn hơn chuột
      if (this.speed > mouse.getSpeed() && this.weight > mouse.getWeight()) {
        // Sau khi bắt chuột --> ăn chuột
        this.eatMouse(mouse);
      } else {
        console.log("%c Không bắt được con chuột này");
      }
    };
    this.eatMouse = (mouse) => {
      // Điều kiện để ăn chuột
      if (mouse.getStatus()) {
        // Sau khi ăn, cân nặng tăng lên
        this.weight += mouse.getWeight();
        mouse.setStatus(false);
      }
    };
  }
  
  function Mouse(weight, speed, status) {
    // Khai báo thuộc tính
    this.weight = weight;
    this.speed = speed;
    this.status = status;
  
    // Khai báo hành vi
    this.getSpeed = () => this.speed;
    this.getStatus = () => this.status;
    this.getWeight = () => this.weight;
    this.speak = () => "Chít chít";
    this.setStatus = (status) => (this.status = status);
  }












// --------------------------------------------------------------------------------

class Temperature{
    constructor(celcisus){
        this.celcisus =celcisus;
    }
    getCToF(){
        return this.celcisus * 1.8 +32;
    }
    getCToKevin() {
        return this.celcisus + 273.15;
    }
    setCelcisus = (celcisus) => {
        this.celcisus = celcisus;
    }
    
}

function showResult_1 (){
    let inputTempe  = new  Temperature(25);

    console.log(inputTempe.getCToF());
    console.log(Celcisus.setCelcisus())
}


// -------------------------------------------------------

const person = {};
const emty ={};

person.firstName ="nguyễn văn";
person.lastName ="bình";

console.log(person)

person.lastName = "hòa";

console.log(person)

delete person.lastName;
console.log('3',person)
//* kiểm tra hàm có trống ko 
function isObjEmpty (obj) {
    //todo: kt xem có key ko nếu có key thì objec ko rổng còn ko có key thì object rỗng
    if(Object.keys(obj).length === 0){
        return false;
    } else {
        return true ;
    }
    
}
console.log(person);
console.log(isObjEmpty(emty));
// ---------------------------------------------------------------------------------


function Cat (name, weight, speed){
    //* khai báo thuộc tính
    this.name = name;
    this.weight = weight;
    this.speed = speed;

    //*khai báo hành vi 
    this.speak = () => {
        //* điểu khiện bắt chuột khi tốc độ mèo lớn hơn chuột

    }

    this.eatMouse = (mouse) => {
        //* điều kiện ăn chuột
    };
}
//*bai tập 4 
const object = {
  height:2,
  width: 2,
  title: n,
};

function multiplyNumbers(obj) {
  let result = 1;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result *= obj[key];
    }
  }
  return result;
}

console.log(multiplyNumbers(object))

//* bài tập 5
class Computer {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    read(){
        console.log(a,b)
    }
    sum(){
        return this.a * this.b;
    }
    multiply(){
        return this.a / this.b;
    }
}

function calculator ()
 let inputTempe  = new calculator(25,30);

