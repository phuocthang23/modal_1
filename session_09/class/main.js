let physics = +prompt("nhap diem ly");
let math = +prompt("nhap diem toan") ;
let bio = +prompt("nhap diem sinh")  ;   
let ave = (physics + math + bio)/3 ;
alert(`diem tb ${ave}`);

// b2

let Celsius = +prompt("nhap độ c") ;

let convert = (Celsius + 32) * 1.8 ;

alert(`độ f ${convert}`);

//---------------------------------------------

let Radius = +prompt("nhap bán kính hình tròn") ;

let acreage = Radius*Radius*3.14

let perimeter = (Radius * 2 ) * 3.14;

console.log(`diện tích ${acreage}, chu vi ${perimeter.toFixed(2)}`);

//--------------------------------------------
// kiểm tra == và === 
const a = 2; 
const b = "2"

console.log(a == b);
console.log(a === b)

//^-------- kiểu boolen ------------- 
const isGood = true;
console.log(isGood);
const isBad = false;
console.log(isBad);

/*  
* những giá trị falsy 
 0
 " "
 null
 undefined
 NaN
 false
 -0
 0n
 document.all */

 //^ --------- toán tử so sánh -------------
 
//  > >= <= == === 

//^ -----------toán tử logic --------------
//* && => tuyệt đối, tức cả hai vế của mình là true => true, một thằng false thì trả về false
//* ! => đảo ngược giá trị ban đầu, true => false => true
let isHanhIt = false;
let isHanhEnglish = true;

console.log(`kiem tra or`,isHanhIt || isHanhEnglish);
console.log(`kiem tra or`,isHanhIt && isHanhEnglish);
console.log(`kiem tra or`,!isHanhIt && isHanhEnglish);

//^----------biểu thức điều kiện-----------------
let c = 3;
let d = 1
console.log(`biểu thức điều kiện`, c > b && d == 1);

//^----------- if-else---------------------------
let inputNumber = +prompt(` nhập vào từ 1 tới 10 để lấy đc con số may mắn :`)

if(inputNumber === 5){
    // thực hiện cái gì ở trong đây
    alert(`u right`)
} else {
    // thực hiện điều gì dó trong đây
    alert(`good luck next time`)
}

//todo if ==> nếu 
//todo (biểu thức điều kiện) => chỉ trả giá trị true hoặc false
//todo {.....} => thực hiện logic của mình ở trong đây khi mà điều kiện thỏa mãn
//todo else ==> ngược lại 
//todo {....} ==> thực hiện logic khi mà đk ko thỏa mãn

//& bài tập 
let inAge = +prompt(` bạn đủ tuổi cưới vợ chưa :`)
 if (inAge >= 18) {
    alert(` đc kết hôn `)
 }
else{
    alert(` bạn ko đủ tuổi kết hôn  `)
}

//& bài tập 
let inputfreeNumber = +prompt(`nhập 1 số bất kỳ `)
    if (inputfreeNumber%2 === 0) {
        alert(` đó là số chẵn `)
    } else {
        alert(` đó là số lẻ `)
    }
