const imageUrl = [
  "https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/15/08/05/bee-8064761_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/15/02/38/fauna-8064270_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/08/04/49/cat-8048688_640.jpg",
  "https://cdn.pixabay.com/photo/2023/05/10/04/31/eurasian-whimbrel-7982937_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/15/11/04/huddle-of-walrus-8065100_640.jpg",
  "https://cdn.pixabay.com/photo/2023/05/24/21/56/bug-8015937_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/03/18/12/benz-8038240_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/09/18/30/ibex-8052387_640.jpg",
];
//  const position ="";
function renderGallary() {
//   const show = document.getElementById("gallary");
  //todo: tạo một biến rỗng để đưa phần code thiết kết vào
  tempGallary = "";
  //todo: gọi forEach để lấy các phần tử trong arry 
  imageUrl.forEach((element, index) => {
    console.log(element, "------", index);
    tempGallary += `
        <div class = wrap>
        <div class="item2"><img src="${element}" alt=""></div>
        <button onclick="editBtn(${index})"> edit</button>
        <button onclick="deleteBtn(${index})"> delete </button>
        </div>`
  });
  document.querySelector(".grid-container").innerHTML= tempGallary;
}
renderGallary()

// ^nút xóa -------------------------------------
function deleteBtn(index){    
    imageUrl.splice(index,1)
    // *gọi lại render
    renderGallary(imageUrl);
}

// ^nút add --------------------------------------
function addBtn(){
    const inputUrl = document.getElementById('link-img');

    imageUrl.push(inputUrl.value);

    renderGallary(inputUrl);
     inputUrl.value ="";
}
// ^nút edit ---------------------------------------
function editBtn(index){
    const inputEdit = document.getElementById('edit-img')
    inputEdit.value = 
}

