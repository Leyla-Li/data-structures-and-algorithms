'use strict';

const structure = require('./stacks-and-queues');
const Queue = structure.Queue;

class AnimalShelter {
  constructor(){
    this.number = 0;
    this.dogs = new Queue();
    this.cats = new Queue();
  }
  
  enqueueAnimal(animal){
    if(animal.type === 'cat'){
      this.cats.enqueue({animal:animal, number:this.number +1});
    }
    if(animal.type === 'dog'){
        this.dogs.enqueue({animal:animal, number:this.number +1});
    }
  }

  dequeueAnimal(pref){
    if(pref !== 'cat' && pref !== 'dog'){
      return null;
    }else{
      const cat = this.cats.dequeue();
      const dog = this.dogs.dequeue();
      console.log(cat, dog);
      return dog.number > cat.number ? cat : dog;
    }
  }
}

module.exports = AnimalShelter;