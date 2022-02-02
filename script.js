'use script'

console.log("hello world")

const pillow = {
    size: "large",
    color: "purple",
    pattern: "stripes",
    discription: function(){
        return("My pillow is "+this.size+", "+this.color+" with "+this.pattern+".")

    }
}

document.write("<h2>", pillow.discription(), "</h2>")

function Pet (animal, characteristic, size){
    this.animal = animal;
    this.characteristic = characteristic;
    this.size = size;
  }

Pet.prototype.color = "brown"

const lilysPet = new Pet ('dog', 'goofy', 'large');

console.log(lilysPet, Pet.prototype);