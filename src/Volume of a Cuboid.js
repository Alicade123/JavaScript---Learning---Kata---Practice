class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
console.log(Kata.getVolumeOfCuboid(6, 2, 5));

class Animal {
  static identity(nam) {
    console.log(nam);
  }
}

Animal.identity("Bella");
