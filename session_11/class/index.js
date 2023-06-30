function bai_3(){
    const a = +prompt(` nhập cạnh a`)
    const showReusult = document.getElementById('show_1');
    const area = a ** 2;
    
    showReusult.innerHTML = a < 0 ? " yêu cầu nhập lại số dương" : `diện tích hình vuông ${area} `

}
// ? -------------------------------------------------------------?
function bai_6(){
    const a = +prompt(` nhập số a`);
    const b = +prompt(` nhập số b`);
    console.log(a,b);
    if(isNaN(a,b)){
        return alert(` nhập đúng chữ số ko thể nhập chữ`)
    } 
    const showReusult = document.getElementById('show_2');
    const caculator = -b/a

    if( a === 0 && b === 0){
        showReusult.innerHTML = `phương trình có vô số nghiệm `
    }else if ( a===0 && b!=0){
        showReusult.innerHTML = ` phương trình vô nghiệm `
    }  else {
        showReusult.innerHTML = `phương trình có 1 nghiệm là ${caculator} `
    }   
}
// ?----------------------------------------------------------------?

function C_F(){
    //todo: lấy giá trị của ô input 
    const inputElement = document.getElementById('celsius').value;
    //todo: log ra check giá trị 
    console.log(inputElement);

    const F = inputElement * 1.8 + 32
    console.log(F);

    //todo: trỏ tới ô input kết quả ko đc lấy value vì ko tham chiếu đến đc 
    const resultElement = document.getElementById('show_3');
    resultElement.value = F;
    console.log(resultElement);
}

//?----------------------------------------------------------------?

function bai_for(){
    for (let index = 0; index <= 100; index++) {
        console.log(index);
    }
}