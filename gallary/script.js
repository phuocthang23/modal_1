const arrContent = [
    {id: 1,title : "sunset", detail: "it is the sun" , price: 1000, img:"https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049388/img01_wqwpnu.jpg"},
    {id: 2,title : "wood", detail: "it is the wood" , price: 2000, img:"https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049389/img02_f4vcdt.jpg"},
    {id: 3,title : "beach", detail: "it is the wood" , price: 3000, img:"https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049386/img03_n0asvf.jpg"},
    {id: 4,title : "forest", detail: "it is the wood" , price: 4000, img:"https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049386/img04_iypkrg.jpg"},
    {id: 5,title : "library", detail: "it is the wood" , price: 5000, img:"https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049386/img05_r60xhy.jpg"},
    {id: 6,title : "wall", detail: "it is the wood" , price: 6000, img:"https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049386/img06_ziqnpg.jpg"},
    {id: 7,title : "wood", detail: "it is the wood" , price: 2000, img:"https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049389/img02_f4vcdt.jpg"},
    {id: 8,title : "wood", detail: "it is the wood" , price: 2000, img:"https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049389/img02_f4vcdt.jpg"},
    {id: 9,title : "wood", detail: "it is the wood" , price: 2000, img:"https://res.cloudinary.com/dnroxbmjk/image/upload/v1462049389/img02_f4vcdt.jpg"},
]

const arrCart = [];
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnUpdate = document.querySelector('.update');
const inputIndex = document.getElementById("index");
const inputTitle = document.getElementById("title_edit");
const inputDetail = document.getElementById("detail_edit");
const inputPrice = document.getElementById("price_edit");
const inputImg = document.getElementById("img_edit");
const inputTitleAdd = document.getElementById("title_add");
const inputDetailAdd = document.getElementById("detail_add");
const inputPriceAdd = document.getElementById("price_add");
const inputImgAdd = document.getElementById("img_add");

function renderGallary() {
    xHtml = "";

    arrContent.forEach((Element,index) => {
        xHtml += `
        <article class="image">
        <img src="${Element.img}"/>
        <p>${Element.title}</p>
        <p>Price:${Element.price}$</p>
        <p>${Element.detail}</p>
        <button id="edit" onclick="editBtn(${index})">edit</button>
        <button id="delete" onclick="deleteBtn(${index})">delete</button>
        <button id="buy" onclick="buyBtn(${index})">buy</button>
       </article>
        `
    });
    document.querySelector(".gallery").innerHTML=xHtml;
}

renderGallary()

// ^nút xóa -------------------------------------
function deleteBtn(index){    
    arrContent.splice(index,1)
    // *gọi lại render
    renderGallary(arrContent);
}

// ^nút edit ------------------------------------
function editBtn(index){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    //todo: push dữ liệu lên form để chuẩn bị edit
    inputIndex.value = index;
    inputTitle.value = arrContent[index].title;
    inputDetail.value = arrContent[index].detail;
    inputPrice.value = arrContent[index].price;
    inputImg.value = arrContent[index].img ;
    return index;
}
//^ nút ok ( đẩy giữ liệu đã sửa vào mảng)-------------
function update (){
    
    let containUpdate = {
        title: inputTitle.value,
        detail: inputDetail.value,
        price : inputPrice.value,
        img : inputImg .value
    }
        if(inputDetail === "" || inputImg === "" || inputPrice ==="" || inputTitle ==""){
            alert(` yêu cầu nhật đầy đủ thông tin cần update ko đc để trống `)
        }
        arrContent.splice(inputIndex.value,1,containUpdate)
        renderGallary(arrContent);
        CloseModal();
}
function CloseModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
overlay.addEventListener('click', CloseModal);
btnCloseModal.addEventListener('click', CloseModal);

// * hàm add 
function add(){
    let addProduct = {
        id: arrContent[arrContent.length-1].id +1,
        title: inputTitleAdd.value,
        detail: inputDetailAdd.value,
        price : inputPriceAdd.value,
        img : inputImgAdd.value
    }

    arrContent.push(addProduct);
    renderGallary(arrContent)

    console.log(addProduct)

}



