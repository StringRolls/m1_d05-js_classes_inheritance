// Class and inheritance
 /*
- Create a class `Rectangle` with:
  - A property `width`
  - A property `height`
  - A method `constructor(width,height)`
  - A method `calculatePerimeter()`
  - A method `calculateArea()`

- Create a class `Square` that __extends Rectangle__ with:
  - A property `side`
- A method `constructor(side)` (make sure you call super and pass the required parameters)
*/

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculatePerimeter() {
    return 2 * this.width + 2 * this.height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
   // this.side = side; // you can ommit this
  }
}

const r1 = new Rectangle(6, 7);
// The previous line is the same as
// const r1 = {}
// r1.width = 6
// r1.height = 7
// r1.calculatePerimeter = function() {
//    return 2*this.width+2*this.height
// }
// r1.calculateArea = function() {
//    return this.width * this.height
// }

console.log('Perimeter of r1 =', r1.calculatePerimeter()); // 26
console.log('Area of r1 =', r1.calculateArea()); // 42

const s1 = new Square(5);
console.log('Perimeter of s1 =', s1.calculatePerimeter()); // 20
console.log('Area of s1 =', s1.calculateArea()); // 25

const s2 = new Square(10);
console.log('Perimeter of s2 =', s2.calculatePerimeter()); // 40
console.log('Area of s2 =', s2.calculateArea()); // 100


// Perimeter of r1 = 26
// Area of r1 = 42
// Perimeter of s1 = 20
// Area of s1 = 25
// Perimeter of s2 = 40
// Area of s2 = 100
  /*
  Note: Although the `square` class accepts just one parameter you have to pass `two` parameters while calling the `super` method ? Why ? Because as we saw in class the `super` method invokes/calls the parent class `constructor` method. And here the parent class is `rectangle`
  */