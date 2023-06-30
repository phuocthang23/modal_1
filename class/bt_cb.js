class Student {
    constructor (name, age, address, number){
        this.name = name;
        this.age = age;
        this.address = address;
        this.number = number;
        this.rank ="";
    }
    getRank(){
        //trong anh 

    }
}

const square = new Student("pthang", 10,"123-DN",12345678);

console.log(square);

//* bt2
function value (id,name,gender,age,mark){
    this.id = id,
    this.name = name,
    this.gemder = gender,
    this.age = age,
    this.mark = mark
}
const students = [];
const student = new value("Marvin",72,"male","12",7.8)
const newStudent = new value("Gregory",1,"female","16",9)
const newStudent2 = new value("Mavle",67,"male","12",6.8)

students.push(student, newStudent,newStudent2);
console.log(students)

//*bt3

// for(let i = 0 ;i<students.length ; i++){
//     if(students[i].mark > students[i+1].mark ){
//         console.log(`student > newStudent`)
//     }else if (students[i].mark === students[i+1].mark){
//         console.log(`2 học sinh bằng nhâu`)
//     } else {
//         console.log(`student < newStudent`)
//     }
// }

// const stundentMax = findMax(students)
// function findMax(data){
//     let max = 0
//     let sinhVien = [];
//     students.forEach(item =>{
//         if(item.mark > max){
//             max = item.mark
//         }
//     })

//     student.forEach(i => {
//         if(i.mark === max){
//             sinhVien.push(i);
//         }
//     })
//     return ;
// }

//*bt4



let products = [
    { id: 1, name: "Milk", count: 100}, 
    {id: 2, name: "Yakult", count: 100},
    {id: 3, name: "Butter", count: 100,}
    ];

let products2 = [...products];

products.splice(0,1);


const found = products.find(element => {
    return element.name === "Butter"
});

console.log(found)