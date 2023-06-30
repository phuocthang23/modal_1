const account = [];
function submit(){
    const user = getData()
    if(checkPasswords()){
        if(account.length === 0){
            account.push(user);
        }else {
            //todo: --> check xem đó có phần tử nào trong mảng chưa
            let item = account.find((item)=> item.email == account.email)
            if(!item){
                account.push(user);
            }else {
                alert(`email tồn tại`)
            }
        }
    }else{
        alert(`vui lòng nhập đúng password`)
    }
    console.log(user)
}

function getData(){
    //todo: lấy dữ liệu từ input
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("repearPassWord").value;  
    
    return {
        userName :userName,
        // email:email,
        // password:password,
    }
}

{/* <input type="text" placeholder="Username" id="username"/>
<input type="text" placeholder="E-mail" id="email"/>
<input type="password"  placeholder="Password" id="password" />
<input type="password"  placeholder="Retype password" id="retype" /> */}