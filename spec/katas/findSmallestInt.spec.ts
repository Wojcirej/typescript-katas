import { findSmallestInt } from './../../katas/findSmallestInt/findSmallestInt';

function testExample(numbers, expectedResult) {

  describe("when numbers = '" + numbers + "'", () => {

    it("returns " + expectedResult, () => {
      let result = findSmallestInt(numbers);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("findSmallestInt", () => {

  testExample([78, 56, 232, 12, 8], 8);
  testExample([78, 56, -2, 12, 8], -2);
  testExample([-78, 56, -2, 12, 8], -78);
  testExample([-8], -8);
  testExample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
  testExample([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -10);
  testExample([-78, 56, 232, 12, 8], -78);
  testExample([78, 56, -2, 12, -8], -8);
  testExample([-8, -3], -8);
  testExample([-3, -8], -8);
});
