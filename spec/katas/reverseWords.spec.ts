import { reverseWords } from './../../katas/reverseWords/reverseWords';

function testExample(str, expectedResult) {

  describe("when str = '" + str + "'", () => {

    it("returns " + expectedResult, () => {
      let result = reverseWords(str);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("reverseWords", () => {

  testExample("This is an example!", "sihT si na !elpmaxe");
  testExample("double  spaces", "elbuod  secaps");
  testExample('The quick brown fox jumps over the lazy dog.', 'ehT kciuq nworb xof spmuj revo eht yzal .god');
  testExample('apple', 'elppa');
  testExample('a b c d', 'a b c d');
  testExample('double  spaced  words', 'elbuod  decaps  sdrow');
});
