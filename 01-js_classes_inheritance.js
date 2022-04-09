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
          return super.speak() + ` and I am a ${this.kind}` // You can invoke the parent method inside the child class
      }
  }
  

  const martini = new Dog("Martini", 12)
  console.log("martini speaks and walks: ", martini.speak(), martini.walk())
  console.log(martini) // Will tell you this is of class Dog !
  
  const santana = new Cat("Santana", 9)
  console.log("santana speaks and walks: ", santana.speak(), santana.walk())
  console.log(santana) // Will tell you this is of class Cat !


// Example 2
  class Person {

    constructor(nameValue, lastNameValue, ageValue, weightValue, heightValue, hobbiesValue) {
        this.name = nameValue
        this.lastName = lastNameValue
        this.age = ageValue
        this.weight = weightValue
        this.height = heightValue
        this.hobbies = hobbiesValue
        this.alive = true
    }

    learnNewHobby(newHobby) {
        this.hobbies.push(newHobby)
    }

    gainWeight(extraKilos) {
        this.weight += extraKilos
    }

    grow(years = 1) {
        this.age += years
    }
}


const person1 = new Person('Germán', 'Álvarez', 35, 80, 1.70, ['sky', 'beer'])
const person2 = new Person('Ana', 'de Ordanza', 29, 60, 1.65, ['gadgets', 'coding'])

console.log(`My name is ${person1.name} an I am ${person1.age} years old`)

console.log(`My hobbies are ${person2.hobbies}`)
person2.learnNewHobby('snowboard')
console.log(`My hobbies are ${person2.hobbies}`)

console.log(`${person1.name} before the bootcamp I was ${person1.weight}`)
person1.gainWeight(2.6)
console.log(`${person1.name} now I weight ${person1.weight}`)

