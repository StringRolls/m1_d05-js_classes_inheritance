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


class User {
    constructor(nameValue, lastNameValue, emailValue, bankAccountValue) {
        this.name = nameValue
        this.lastName = lastNameValue
        this.email = emailValue
        this.bankAccount = bankAccountValue
    }

    getFullName() {
        return `${this.name} ${this.lastName}`
    }

    changeBankAccount(newAccount) {
        this.bankAccount = newAccount
    }
}

const user1 = new User('German', 'Alvarez', 'germantastic@yahoo.es', 'ES98-6475-4045-1627')

const fullName = user1.getFullName()
console.log(`Me llamo ${fullName}`)

user1.changeBankAccount('ES98-6475-4045-1624')
console.log(`Ahora mi cuenta es ${user1.bankAccount}`)

console.log('-------')




class Player extends User {

    constructor(nameValue, lastNameValue, emailValue, bankAccountValue, nickValue, tokensValue, livesValue) {

        super(nameValue, lastNameValue, emailValue, bankAccountValue)

        this.nick = nickValue
        this.tokens = tokensValue
        this.lives = livesValue
    }

    buyTokens(quantity) {
        this.tokens += quantity
    }

    looseLives(livesLost) {
        this.lives -= livesLost
    }

    buyLives(livesToBuy) {
        const cost = livesToBuy * 20
        if (this.tokens >= cost) {
            this.tokens -= cost
            this.lives += livesToBuy
        } else {
            console.error(`Tienes ${this.tokens} tokens y necesitas ${cost} para comprar ${livesToBuy} vidas`)
        }
    }
}


const player1 = new Player('Ana', 'de Ordanza', 'jj@yay.es', 'ES89-5645-6434', 'Anita92', 100, 5)

console.log(`El jugador ${player1.nick} que en realidad se llama ${player1.name} (${player1.email}) tiene ${player1.lives} vidas`)
player1.buyLives(10)        // ops!
player1.buyTokens(500)
player1.buyLives(10)
console.log(`El jugador ${player1.nick} tiene ${player1.lives} vidas`)



console.log('-------')

class Witch extends Player {

    constructor(nameValue, lastNameValue, emailValue, bankAccountValue, nickValue, tokensValue, livesValue, spellName) {

        super(nameValue, lastNameValue, emailValue, bankAccountValue, nickValue, tokensValue, livesValue)
        this.spell = spellName
    }

    makeSpell() {
        console.warn(`La bruja ${this.nick} te ha echado un conjuro ${this.spell}... ¡OH, NO!`)
    }
}

const witch1 = new Witch('Charini', 'López', 'hshs@msn.es', 'ES98-45676-3456', 'Piruja', 100, 20, 'Abracadabra')

console.log(`La bruja ${witch1.nick} (que en realidad se llama ${witch1.name}) tiene ${witch1.tokens} tokens`)
witch1.makeSpell()




console.log('-------')

class Gnome extends Player {

    constructor(nameValue, lastNameValue, emailValue, bankAccountValue, nickValue, tokensValue, livesValue, shoutValue) {

        super(nameValue, lastNameValue, emailValue, bankAccountValue, nickValue, tokensValue, livesValue)
        this.shout = shoutValue
    }

    attack() {
        console.error(`El gnomo ${this.nick} te ha escupido al grito de ${this.shout}... ¡QUÉ GUARRO!`)
    }
}


const gnome1 = new Gnome('Ivane', 'Arias', 'hshs@msn.es', 'ES98-8495-3456', 'Grifford', 100, 20, 'MERLUZO')

gnome1.attack()


