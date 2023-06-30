'use strict'

// phân loại học sinh 
const mark = 8;
if(mark >=8 ){
    console.log("học sinh giỏi");
}
 
 
 function Run_1(){
    const weight = +prompt('nhập chỉ số cân nặng ');
    const height = +prompt('nhập chỉ số chiều cao ');
    const bmi = (weight/(height ** 2)).toFixed(1)
    let text;
    let rank;  
    if (bmi  < 18.5){
         text = "gầy";
    } else if (bmi < 25 ){
        text = "bình thường";
    } else {
        text = "thừa cân" ;
        if (bmi < 30 ) {
            rank = 'tiền béo phì';
        } else if (bmi < 35 ) {
            rank = ' béo phì độ I ';
        } else if (bmi < 40) {
            rank = 'béo phì độ II';
        } else {
            rank = 'béo phì độ III';
        }
    }
   
    
    //* hiển thị 
    const showElement = document.getElementById('show_1');
    showElement.innerHTML = ` chỉ số BMI ${bmi} đc phân loại là ${text} ${rank ? rank : ""}`
    // console.log(text);
 }
