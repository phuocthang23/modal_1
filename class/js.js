let text = [
  {
    id: "SV1",
    name: "Manuel",
    address: "Tonga",
    gender: "basket",
    class: "104.30.27.44",
  },
  {
    id: "SV2",
    name: "Stephen",
    address: "Finland",
    gender: "flow",
    class: "",
  },
  {
    id: "SV3",
    name: "Ian",
    address: "Ascension Island",
    gender: "language",
    class: "182.181.181.109",
  },
  {
    id: "SV4",
    name: "Josephine",
    address: "Mauritania",
    gender: "structure",
    class: "25.119.227.201",
  },
  {
    id: "SV5",
    name: "Paul",
    address: "Equatorial Guinea",
    gender: "tide",
    class: "239.22.198.192",
  },
];
//todo: tạo 1 mảng chứa các------------------
let newItem = {
  name: "pthang",
  gender: "gai",
};
function bai_01() {
    
  //todo: chạy lập phần tử để tìm đc vị trí----------------
  text.forEach((element, index) => {
    if (element.id === "SV5") {
      //todo: tạo 1 obj mới với công thức {...copy obj cũ, ...copy obj mới}----------------
      let newData = { ...element, ...newItem };
      //todo: rồi đề obj mới  lên obj cũ ------------------
      text.splice(index, 1, newData);
    }
  });
 const showR = console.log(text);
}


const dogs = ["kiki" ,"lu","pull"];
const cats = ["kiki1" ,"lu1","pull2", "meo"];

function bai_03(){
    //* ...
    function convert (...numbers) {
        // let total = 0
        const products = [];
        numbers.forEach((element) => {
            const code = `SP_${element}`;
            const codeObj = {code : code};
            //todo: push đối tượng vào mảng 
            products.push(codeObj);
        });
        return products;
    }
   const convertCode_1 = convert(1,2,3,77,88,56,345)

    console.log(convertCode_1)
}
//& sử dụng để tạo 1 mảng mà ko bik đối số là bao nhiêu 
function bai_04() {
    //* sử dụng .... để gọi và tạo 1 hàm mảng
    function product (...products) { //^ producst ở đây chỉ sử dụng để khai báo tham số 
        const countProducs = [];

        products.forEach((element, i) => {
            const id = `id ${i+1}`;
            const codeObj = {
                id: id,
                name: element,
                quality: 20
            };
            //todo: push đối tượng vào mảng products
            countProducs.push(codeObj);
        })
        return countProducs;
    }
    const containerProduct = product("samsung", "nokia", "sony","apple")
    document.getElementById('result-04').innerHTML = containerProduct;
    console.log(containerProduct)

    
}

