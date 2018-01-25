var myAnimal = 'dog'
var yourAnimal = 'cat'

function myAnimal() {
<<<<<<< HEAD
  animal = 'dog'
  return animal
=======
  return myAnimal
>>>>>>> 35662fe62547da9e13ef199662a8ca9957adcd3e
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
<<<<<<< HEAD
  animal = 'cat'
  return animal
=======
  return yourAnimal
>>>>>>> 35662fe62547da9e13ef199662a8ca9957adcd3e
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
