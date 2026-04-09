class Dinglemouse {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age || 0;
    this.sex = sex;
  }

  setAge(age) {
    this.age = age;
    return this.age;
  }

  setSex(sex) {
    this.sex = sex;
    return this.sex;
  }

  setName(name) {
    this.name = name;
    return this.name;
  }

  hello() {
    return `Hello. My name is ${this.name}. I am ${this.age}. I am ${
      this.sex == "M" ? "male" : "female"
    }.`;
  }
}
let dm = new Dinglemouse("Bob", 27, "M");
// let dm = new Dinglemouse().setName("Bob").setAge(27).setSex("M");
// let dm0 = new Dinglemouse().setAge(27).setSex("M").setName("Bob");
// let dm1 = new Dinglemouse().setName("Alice").setSex("F");
// let dm2 = new Dinglemouse().setName("Batman");
console.log(dm.hello());
// console.log(dm0.hello());
// console.log(dm1.hello());
// console.log(dm2.hello());
