/*1*/
const assert = require('assert');
/*2*/
const Rooster = require('../index');
/*3*/
describe('Rooster', () => {
    /*4*/
  describe('.announceDawn', () => {
    /*5*/
    it('returns a rooster call', () => {
        /*6*/
      const expected = 'cock-a-doodle-doo!';
      const actual = Rooster.announceDawn();
      assert.equal(actual, expected);
    });
  });
  /*8*/
  describe('.timeAtDawn', () => {
    /*9*/
    it('returns its argument as a string', () => {
      const inputNumber = 12;
      const expected = '12';
      const actual = Rooster.timeAtDawn(inputNumber);
      assert.equal(actual, expected);
    })
    /*10*/
    it('throws a range error if passed a number less than 0', () => {
      const inputNumber = -1;
      const expected = RangeError;
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
    /*11*/
     it('throws a range error if passed a number more than 23', () => {
      const inputNumber = 24;
      const expected = RangeError;
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    })
  })
})