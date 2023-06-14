//~ CÁC LOẠI IF - ELSE 
let vu = "giau";
if (vu === "giau"){
    alert(`vu giàu thiệt`);
}

//^ dạng nhiều if-else

let a = prompt("nhập vào a:");
let b = prompt("nhập vào b:");
let x = -b/a;

if( a === 0 && b != 0){
    alert(` pt vô nghiệm  `)

}else if (a === 0 && b === 0){
    alert(`pt vô số nghiệm`)

}else if (a!=0){
    alert(`pt có nghiệm ${x}`)
}else {
    alert(`toan mẫu giáo`)
}

//& bài tập 
let gender = prompt(` nhập giới tính `);
let age = +prompt(` nhập độ tuổi `);

if( gender == "nam" && age >= 18){
    console.log(`đàn ông `);
} else if( gender =="nữ" && age >= 18) {
    console.log(`đàn bà`);
} else if( gender == "nam" && age < 18) {
    console.log('bé trai');
} else if( gender == "nữ" && age < 18) {
    console.log('bé gái'); 
}else {
    console.log("bê đê" );
}
// ----------------------------------------
function getValue() {
    
   let takeMyNumber = Number(document.getElementById("numberT").value);
   let takeMyNumber2 = Number(document.getElementById("numberB").value);
   console.log(takeMyNumber,takeMyNumber2);
   let total = takeMyNumber + takeMyNumber2 ;
   emty.push(total);
   console.log(total);
}
getValue();

let emty = [];
// ----------------------------------------
//& bài tập

let weight = number(prompt(` nhập số cân nặng`));
let height = number(prompt(` nhập số chiều cao`));
let bmi = weight/(height**2);

if (bmi < 18) {
    console.log(` gay `);
}
    else if (bmi < 25 && bmi >= 18) {
        console.log(`binh thuong`);
    }
    else if(bmi === 25 ){
        console.log(`thua can`);
    }
 else {
    console.log(`beo phi`);
    
}