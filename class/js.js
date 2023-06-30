class Car {
    constructor (name, price, brand, type, color){
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.type = type;
        this.color = color;
    }
    
    get Name(){
        return this.name;
    }

    set Name(x){
        this.name = x
   }

   get Type(){
        return this.type;    
    }

    show(){
        console.log(`ten xe ${this.name}`);
    }

}
let obj = new Car('vf8',1000,"vin", 4, "red");

console.log(obj.name);
console.log(obj.price);
console.log(obj.brand);
console.log(obj.type);
console.log(obj.color);

let stringDate = Date();
console.log(typeof stringDate); // ra string

let objectDate = new Date();
console.log(typeof objectDate); // ra object

let day = objectDate.getDate();
console.log(day); // lấy ngày

let month = objectDate.getMonth();
console.log(month + 1); // lấy tháng

let year = objectDate.getFullYear();
console.log(year); // láy năm 
//-----------------------------------------------------------
let format1 = `${month+1}/${day}/${year}`;
console.log(format1); // 7/23/2022

let format2 = `${day}/${month+1}/${year}`;
console.log(format2); // 23/7/2022

let format3 = `${month+1}-${day}-${year}`;
console.log(format3); // 7-23-2022

let format4 = `${day}-${month+1}-${year}`;
console.log(format4); // 23-7-2022

// ---------------------------------------
if (day < 10) {
    day = `0${day}`;
}

if (month < 10) {
    month = `0${month+1}`;
}

let formatN = `${day}/${month}/${year}`;
console.log(formatN);

//- Các phương thức thường được sử dụng nhất của đối tượng Math:
/*
abs()	    Trả về giá trị tuyệt đối của một số
random()	Trả về một số ngẫu nhiên trong khoảng từ 0 đến 1
sqrt()	    Trả về căn bậc hai của một số
pow()	    Trả về lũy thừa của hai số xác định
ceil()	    Làm tròn một số lên số nguyên gần nó nhất
floor()	    Làm tròn một số xuống số nguyên gần nó nhất
round()	    Làm tròn một số đến số nguyên gần nó nhất
max()	    Trả về số lớn nhất trong danh sách
min()	    Trả về số nhỏ nhất trong danh sách
*/

/*
    Cách sử dụng:
    1. Hàm abs()
    var a = Math.abs(8.75); //Trả về 8.75
    
    2. Hàm random()
    var a = Math.random();
    
    3. Hàm sqrt(x)
    var a = Math.sqrt(0); //Trả về 0
    var b = Math.sqrt(1); //Trả về 1
    var c = Math.sqrt(4); //Trả về 2
    var d = Math.sqrt(81); //Trả về 9
    var e = Math.sqrt(49); //Trả về 7
    var f = Math.sqrt(-4); //Trả về NaN
    
    4. Hàm pow() 
    var a = Math.pow(5,2); //52 = 25
   
    5. Hàm ceil()
    - Phương thức ceil() dùng để làm tròn một số lên số nguyên gần nó nhất.
    - Lưu ý: Nếu giá trị ban đầu là một số nguyên thì nó sẽ không được làm tròn.
   
    var a = Math.ceil(3.60); //Trả về 4
    var b = Math.ceil(3.40); //Trả về 4
    var c = Math.ceil(3); //Trả về 3
    var d = Math.ceil(-3.60); //Trả về -3
    var e = Math.ceil(-3.40); //Trả về -3
    var f = Math.ceil(-3); //Trả về -3
    
    6. Hàm floor()
    var a = Math.floor(3.60); //Trả về 3
    var b = Math.floor(3.40); //Trả về 3
    var c = Math.floor(3); //Trả về 3
    var d = Math.floor(-3.60); //Trả về -4
    var e = Math.floor(-3.40); //Trả về -4
    var f = Math.floor(-3); //Trả về -3
    
    7. Hàm round()
    Phương thức round() dùng để làm tròn một số đến số nguyên gần nó nhất.
    Có nghĩa là phần thập phân lớn hơn 5 thì làm tròn lên, còn dưới 5 thì làm tròn xuống
    
    var a = Math.round(3.60); //Trả về 4
    var b = Math.round(3.50); //Trả về 4
    var c = Math.round(3.49); //Trả về 3
    var d = Math.round(-3.60); //Trả về -4
    var e = Math.round(-3.50); //Trả về -3
    var f = Math.round(-3.49); //Trả về -3

    8. Hàm Math.max(đối số thứ nhất, đối số thứ hai, đối số thứ ba, ...., đối số thứ n);
    
    var a = Math.max(0, 16, -3, 5.25, 100, -1); //Trả về 100
    var b = Math.max(0, "JavaScript", -3, 5.25, 100, -1); //Trả về NaN
    var c = Math.max(); //Trả về -Infinity

    9. Hàm Math.min(đối số....)

    var a = Math.min(0, 16, -3, 5.25, 100, -1); //Trả về -3
    var b = Math.min(0, "JavaScript", -3, 5.25, 100, -1); //Trả về NaN
    var c = Math.min(); //Trả về Infinity

    CŨNG CỐ KIẾN THỨC:

    cách tạo 1 số ngẫu nhiên: 
      Math.floor(Math.random() * 10);
      Math.floor(Math.random() * 11);
      Math.floor(Math.random() * 100);
      Math.floor(Math.random() * 7) + 3;

        function TaoSoNgauNhien(min, max){ // KO BAO GOM MAX
        return Math.floor(Math.random() * (max - min)) + min;
    }
*/