'use strict';

// const Stack = require('../stacks-and-queues');
const multiBracketValidation = require('../multi-bracket-validation');


describe('test for checking are all the brackets pairs valid', ()=>{
    it('returns true if the brackets are balanced even if there are numbers',()=>{
         let str1 = '12(0)';
         expect(multiBracketValidation(str1)).toBe(true);
    });

    it('returns true if the brackets are balanced even if there are other strings',()=>{
        let str2 = '12a(b0)c';
        expect(multiBracketValidation(str2)).toBe(true);
   });

   it('returns false if the brackets are not closing properly',()=>{
    let str3 = '12([0)';
    expect(multiBracketValidation(str3)).toBe(false);
});

it('returns false if the brackets are not closing properly',()=>{
    let str4 = '({)}';
    expect(multiBracketValidation(str4)).toBe(false);
});

});
