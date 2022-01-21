const person1 = {
    firstName: "Ali",
    age: 23
}

const person2 = {
    firstName: "Giovanni",
    age: 55
}

class Person {
    
    constructor( firstName, age){
        this.firstName = firstName || "", // in the constructor we define and assign to create properties
        this.age = age || 0
    }

    tellAge(){
        return this.age
    }
}

const marco = new Person( "Marco", 48) // Here you see the constructor fucntion invoked
const carlos = new Person( "Carlos", 25) // Here you see the constructor fucntion invoked
const carol = new Person( "Carol") // Missing argument

console.log(carol.tellAge())
console.log(marco.tellAge())
console.log(carlos.tellAge())

class Animal {
    constructor(nameOfAnimal, ageOfAnimal){
      this.fur = ""
      this.weight = 0
      this.age = ageOfAnimal
      this.legs = 4
      this.name = nameOfAnimal
    }
  
    speak(){
      return `Hello I am ${this.name}`
    }
  
    walk(){
      return `I am going out alone because I am ${this.age} years old`
    }
  }

  const snowflake = new Animal("Snowflake", 3)

  console.log(
      snowflake.speak(),
      snowflake.walk()
  )

  class Cat extends Animal{
      constructor(nameOfAnimal, ageOfAnimal){
          super(nameOfAnimal, ageOfAnimal)
          this.kind = "cat"
      }
      speak(){
        return super.speak() + ` and I am a ${this.kind}`
    }
  }

  class Dog extends Animal{
      constructor(nameOfAnimal, ageOfAnimal){
          super(nameOfAnimal, ageOfAnimal)
          this.kind = "dog"
      }

      speak(){ // We are overriding the parent method. It's called shadowing. We re-define it to be different in the child class
          return super.speak() + ` and I am a ${this.kind}`
      }
  }

  const martini = new Dog("Martini", 12)
  console.log("martini speaks and walks: ", martini.speak(), martini.walk())

  const santana = new Cat("Santana", 9)
  console.log("santana speaks and walks: ", santana.speak(), santana.walk())


