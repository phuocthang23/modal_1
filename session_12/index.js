
function bai_for(){
    for (let index = 0; index <= 100; index++) {
        console.log(index);
    }
}
// ?---------------------------------------------------------
function bai_for_1(){
    for (let index = 0; index <= 100; index++) {
        if (index%2==0) {
            console.log(` số chẳn là ${index}`);
        }else {
            console.log(` số lễ là ${index}`);
        }
        
    }
}
//?-----------------------------------------------------------------
function bai_for_2(){
    const input = +prompt(`nhập số N để tính tổng `)
    let inputSum = 0;

    if(input < 0 || isNaN(input)){
        alert('ko thể nhập số âm mới nhập lại ')
    }else{
        for (let index = 0; index <= input; index++) {
            inputSum = inputSum + index;
           console.log(inputSum);
       }
    }
    

    document.getElementById('show_2').innerHTML = inputSum;
}

//?----------------------------------------------------------------------
function bai_for_3(){
    let count = 0;
    let input = 0;
    let inputSum = 0;
        for (let count = 0 ; 30 > count; ) {
            if(input%7 == 0){
                count++;
                inputSum = inputSum + input;
            }

            input ++ ;
            
           console.log(inputSum);
       }
    

    document.getElementById('show_3').innerHTML = inputSum;
}

//?----------------------------------------------------------------------

function bai_for_4(){
    const Fizz = "fizz";
    const Buzz = "buzz";
    for (let index = 1; index <= 100; index++) {
        if(index%3 ==0 && index%5==0){
            console.log(`${Fizz} ${Buzz}`);
        }else if (index%5==0){
                console.log(Buzz);
        }else if (index%3==0){
            console.log(Fizz);
        }else {
            console.log(index);
        }
        
    }
}