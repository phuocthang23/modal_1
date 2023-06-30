const accounts = [];
    const getUserName = document.getElementById('userName');
    const getEmail = document.getElementById('email');
    const getPassword = document.getElementById('password');
    const getPasswordConfirmation = document.getElementById('repeat'); 
function submit(){

    const user = getData();
    if(checkPasswords()){
        if(accounts.length === 0){
            accounts.push(user);
        }else {
            //todo: --> check xem đó có phần tử nào trong mảng chưa
            let item = accounts.find((item)=> item.email == user.email)
            if(!item){
                accounts.push(user);
                console.log(user)
            }else {
                alert(`email tồn tại`)
            }
        }
    }else{
        alert(`vui lòng nhập đúng password`)
    }
    getUserName.value="";
    getEmail.value="";
    getPassword.value="";
    getPasswordConfirmation.value="";

    load();
    console.log(1,accounts);
}

function checkPasswords (){
    if( getPasswordConfirmation.value !== getPassword.value){
        // alert(`Passwords do not match`)
        return false;
    } else {
        return true;
    }
}

//*-- hàm log in 
function getData(){
    //todo: lấy dữ liệu từ input
    return {
        userName: getUserName.value,
        email:getEmail.value,
        password:getPassword.value
    };
}

function login(){
    const emailLog = document.getElementById('email-log');
    const passwordLog = document.getElementById('password-log');
    console.log(accounts)
    let isTrue = false;
    accounts.forEach((item, index) => {
        if (item.email === emailLog.value && item.password === passwordLog.value);
        isTrue = true;
        
    });
    
    if(isTrue){
        emailLog.value ="🎁🎁"
        passwordLog.value ="🎁🎁"
        alert(` đk thành công `)
    } else {
        emailLog.value ="🎁🎁"
        passwordLog.value ="🎁🎁"
        alert(` đk ko thành công `)
    }
   
}

function load() {
    location.href = "login.html";
}

