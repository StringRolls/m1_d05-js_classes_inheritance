![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Classes and inheritance
# Module 1 - Day 5

## Classes
 
- Classes describe the structure that all its instances will share.
- They have:
  - **Constructor method**: unique, optional and connected to the instance, where the internal properties of the instance are declared:
    ````javascript
    class Person {
  
      constructor(par1, par2){
          this.propName1 = par1
          this.propName2 = par2
      }
    }
    ````
  - **prototype methods**: ordinary methods that endow instances with capabilities.
    ````javascript
    class Person {
  
      methodName(value){
          this.propName += value
      }
    }
    ````
- The `extends` reserved keyword allows extending the initial scope of a class with other child class(es).
- In them, the `super()` method allows sending to the parent class the properties related to it.