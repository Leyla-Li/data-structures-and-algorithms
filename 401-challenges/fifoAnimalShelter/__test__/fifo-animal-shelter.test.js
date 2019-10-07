'use strict';


// const Test = require('../stacks-and-queues');

// const testStack = new Test.Stack();
// const testQueue = new Test.Queue();

const AnimalShelter = require('../fifo-animal-shelter');
const animalShelter = new AnimalShelter();

describe('test if enqueue and dequeue animal work',()=>{

  it('enqueue an animal to the shelter', ()=>{
    animalShelter.enqueueAnimal({type: 'dog', name: 'lucky'})
    let result = animalShelter.dogs.peekQ();
    expect(result.animal.name).toEqual('lucky');

  });

  it('dequeue no animal off the queue if not cat or dog',()=>{
    animalShelter.enqueueAnimal({type: 'cat', name: 'mimi'});
    let result = animalShelter.dequeueAnimal('rabbit');
    expect(result).toBe(null);
  });

  it('dequeue an animal off the queue if cat or dog',()=>{
    animalShelter.enqueueAnimal({type: 'cat', name: 'mimi'});
    let result = animalShelter.dequeueAnimal('cat');
    expect(result.animal.name).toBe('lucky');
  });
});
