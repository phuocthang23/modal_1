const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialSignal = ["%", "*", "/", "-", "+", "="];
let output = "";
console.log(typeof buttons,display);


//todo: gọi tất cả các nút trong 1 mảng và thêm eventListener
buttons.forEach(function allButton (button) {
    //todo: hàm callback
    button.addEventListener("click",(a) => calculate(a.target.dataset.value));
});

function calculate (btnCaculate){
    //todo: gọi hàm để tính toán 
    // console.log(btnCaculate);
    if(btnCaculate === "=" && output !== ""){
        //todo: chuyển % thành chia /100
        output = eval(output.replace("%", "/100"));
        console.log(output)
    }else if(btnCaculate === "AC") {
        output ="";
    }else if(btnCaculate === "DEL") {
        //todo: bấm del thì xóa ký tự cuối từ output 
        output = output.slice(0, -1);
    }else {
        //todo: kết quả trống và bấm ký tự đặc biệt thì ko làm gì cả
        if(output === "" && specialSignal.includes(btnCaculate)){
            return;
        } else {
            output += btnCaculate;
        }
      
       
    }
    display.value = output;
}