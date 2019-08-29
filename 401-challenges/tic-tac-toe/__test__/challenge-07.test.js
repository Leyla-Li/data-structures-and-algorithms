'use strict';

const whoWon = require('../challenge-07');

describe('Checking if the whoWon return the valid winner', () => {
    it('Testing if it can test the groups of the rows', () => {
      expect(whoWon([['X', 'X', 'X'], ['', 'O', ''], ['X', 'O', 'X']])).toEqual(true);
    });
  
    it('Testing if it can test the groups of the column', () => {
      expect(whoWon([['X', 'O', 'O'], ['O', 'O', ''], ['X', 'O', 'X']])).toEqual(true);
    });

    it('Testing if it can test the groups of the diagonal', () => {
        expect(whoWon([['X', '', 'O'], ['O', 'X', ''], ['O', 'O', 'X']])).toEqual(true);
      });
  
  });
  