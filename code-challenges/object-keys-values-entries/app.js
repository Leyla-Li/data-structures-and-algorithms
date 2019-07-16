'use strict';


let characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Sansa',
      spouse: 'Tyrion',
      children: [],
      house: 'Stark'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ];

  const totalCharacters = (arr) => {
    let characterList =[];
    arr.forEach((person)=>{
        if(!characterList.includes(person.name)){
            characterList.push(person.name);
        }
        if(person.spouse){
          if(!characterList.includes(person.spouse)){
              characterList.push(person.spouse);
          }
        }
        if(person.children.length !== 0){
            person.children.forEach((child)=>{
              if(!characterList.includes(child)){
                  characterList.push(child);
              }
            });   
        }
    }); 
    console.log(characterList);
    return characterList;
  };

  totalCharacters(characters);