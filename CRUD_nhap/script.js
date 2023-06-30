let constent ={};
let wrap = []
const inputName = document.querySelector('#name')
const inputStatus = document.querySelector('#status')
const showInput =  document.querySelector('.input')
let position = "";
function getData() {
    
    let input = prompt(` nhập chữ cái cần thực hiện chức năng `);
    if (input == "c") {
        console.log(`c`)
        return createData()
    }else if (input === "r"){
        console.log(`r`)
        return render(wrap)
    } else if (input === "u"){
        console.log(`u`)
        return update(wrap);
    } else if (input === "d"){
        console.log(`d`)
        return deleta(wrap);
    } else alert(` ko có chức năng `);
}
getData();

function createData(){
   
    let name = prompt(` nhập tên `);
    let status = prompt(` nhập trạng thái `,true);

    //* đặt điều kiện để lấy status
    //* kiểm tra đã tồn hay chưa

    constent = {
        name: name,
        status : status,
    }
    console.log(constent);
    wrap.push(constent);
    // render(wrap);
}

function render(a){
    let XHtml ="";
    const showresult = document.querySelector(".show")
    for (const item of a) {
        XHtml += `
            <tbody>
                <td>${item.name}</td>
                <td>${item.status}</td>
            </tbody>
        `
    }
    showresult.innerHTML = XHtml;
}

function deleta(a){
    const index = prompt (` nhập vị trí muốn xóa`)
    if(isNaN(index)){
         alert(` vui vòng nhập số để bik đc vị trí `)
    }

    if(index-1 >= a.lenght){
        alert (` vị trí cần xóa hiện ko có`)
    } else {
        a.splice(index-1, 1)
    }
    // render(wrap);
}
// * đưa dữ liệu vào vô để chuẩn bị update
function update(a){
    const index = prompt (` nhập vị trí muốn update `)
    if(isNaN(index)){
         alert(` vui vòng nhập số để bik đc vị trí `)
    }

    if(index-1 > a.lenght){
        alert (` vị trí cần xóa hiện ko có`)
    } else {
        showInput.classList.remove('input') 
        position = index-1;
        inputName.value = wrap[position].name;
        inputStatus.value = wrap[position].status;

        //todo: cách khác sửa trực tiếp 
        // for (let i = 0; i < wrap.length; i++) {
        //      if(index === i);{
        //         wrap.splice(position,1,(prompt))
        //     }
            
        // }
    }
}

function OK(){
    let containUpdate = {
        name: inputName.value ,
        status: inputStatus.value,
    }
    wrap.splice(position,1,containUpdate)
    showInput.classList.add('input') 
    // render(wrap);
}
