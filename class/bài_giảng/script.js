const student = {
    studentcode: 'QƯEQWEQWE',
    name: "nguyễn văn A",
    birthday : "12-6-2005",
    address: "cẩm lệ"
}


//todo --> copy object stundent vào student 2 và tạo 1 ô nhớ mới 
const student2 = {...student};
console.log(`check`, student2)

const animals = [
    {id: 1, name: "big", weight: 4.3, gender: true, type: "cat"},
    {id: 2, name: "sâu", weight: 2.5, gender: false, type: "cat"}
]
 
const cat = animals[0]; 
console.log(cat); //todo: log objecd số 1 {id: 2, name: "sâu", weight: 2.5, gender: false, type: "cat"}
animals[0].name = "latte";
console.log(cat); //todo: log objecd số 1 {id: 2, name: "latte", weight: 2.5, gender: false, type: "cat"} đổi tên 

//* cách 2 khai báo 

// function student(studentcode,name,birthday,address){
//     this.studentcode = studentcode;
//     this.name = name;
//     this.address = address;
//     this.birthday = birthday;

//     this.study = function(){

//     }
// }
//  const student 5 = new Student;
//   "sv007",
//   nguyễn văn debugger,
//   20, jo]


//* cách copy object
//* cách 1 : dùng ...
const student_7 = {...student};
student_7.name = 'hello world';

//* truy xuất dữ liệu và đối tượng
//* cách 1: ojb.key

// student_9.name = "nguyễn văn bảy"
// console.log(student_9)

//* for _ In lấy đc key obj

const product = {
    author:"abc",
    price:'1000',
    tittle:'picture',
    id:'1',
}

function Person (author, price, tittle,id) {
    this.author = author;
    this.price = price;
    this.tittle = tittle;
    this.id = id;
}

//*khai bao hanh vi

this.study = function() {
    return "learn with rikkei academy";
}
console.log(Person)

console.log(this.price);


// --------------------------------------------------------------------

//todo : gọi lại nhiều object cùng 1 thuộc tính nhiều lần 
const nameValue = document.getElementById("name");
const ageValue = document.getElementById("age");
const schoolValue = document.getElementById("school");

const arrData = [];
function User(name,age,school) {
    this.name = name;
    this.age = age;
    this.school = school;
  }

//   console.log(user.name); // Jack
//   console.log(user.isAdmin); // false

  function submit(){
    
  let user = new User(nameValue.value,ageValue.value,schoolValue.value);

    arrData.push(user);
    

    console.log(arrData);
  }

