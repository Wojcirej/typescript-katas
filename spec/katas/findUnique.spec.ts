import { findUnique } from './../../katas/findUnique/findUnique';

function testExample(array, expectedResult) {

  describe("when array = '" + array + "'", () => {

    it("returns " + expectedResult, () => {
      let result = findUnique(array);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("findUnique", () => {

  testExample([ 1, 1, 1, 2, 1, 1 ], 2);
  testExample([ 0, 0, 0.55, 0, 0 ], 0.55);
  testExample([ 4, 4, 4, 3, 4, 4, 4, 4 ], 3);
  testExample([ 5, 5, 5, 5, 4, 5, 5, 5 ], 4);
  testExample([ 6, 6, 6, 6, 6, 5, 6, 6 ], 5);
  testExample([ 7, 7, 7, 7, 7, 7, 6, 7 ], 6);
  testExample([ 8, 8, 8, 8, 8, 8, 8, 7 ], 7);
  testExample([ 3, 3, 2, 3, 3, 3, 3, 3 ], 2);
  testExample([ 2, 1, 2, 2, 2, 2, 2, 2 ], 1);
  testExample([ 0, 1, 1, 1, 1, 1, 1, 1 ], 0);
});
