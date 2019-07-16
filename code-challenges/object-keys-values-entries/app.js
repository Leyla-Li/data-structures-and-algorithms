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

  const houseSize = (arr) => {
    const sizes = [];
    arr.forEach((person)=>{
        let personObj = {};
        let characterList =[];
        personObj.house = person.house;
        characterList.push(person.name);
      if(person.spouse){
        characterList.push(person.spouse);
      }
      if(person.children.length !== 0){
          person.children.forEach((child)=>{ 
              characterList.push(child); 
          }); 
      personObj.members = characterList.length;
      sizes.push(personObj);  
    });
    return sizes;
  };

  houseSize(characters);