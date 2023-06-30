
//* arrow funtion dùng để thực thi kết quả ( ko sử dụng this trong arrow funtion)

const sum = (a, b ) => a + b;

console.log(sum(1,3))

//* arrow funtion object 
//* name, id này là key trong object 
const convertData = (name, id) => ({name : name, id : id})
//* viết tắt khi key = name 
const convertData_1 = (name, id) => ({name, id})


// &--------------------(class)-----------------------
class Person {
    constructor(name, age, gender, hobby) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.hobby = hobby;
    }
    getInfo = () => ({
      name: this.name,
      age: this.age,
      gender: this.gender,
      hobby: this.hobby,
    });
  }

  class User extends Person {
    constructor(email, password, name, age, gender, hobby) {
      super(name, age, gender, hobby);
      this.email = email;
      this.password = password;
    }

    getAccount = () => ({ email: this.email, password: this.password });
  }

  const person = new Person("Nguyễn Văn A", 20, true, "game");
  const user = new User(
    "b@gmail.com",
    "1234",
    "Nguyễn Văn B",
    21,
    false,
    "guitar"
  );

  console.log("Kiểm tra person", person);
  console.log("Kiểm tra user", user.getInfo());

  const data = [
    ["a","b"],
    ["c","d","e"],
    ["f","g","m"]
  ];

  const newData = data.reduce((pre))

