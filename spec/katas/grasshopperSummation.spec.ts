import { grasshopperSummation } from './../../katas/grasshopperSummation/grasshopperSummation';

function testExample(num, expectedResult) {

  describe("when num = '" + num + "'", () => {

    it("returns " + expectedResult, () => {
      let result = grasshopperSummation(num);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("grasshopperSummation", () => {

  testExample(1, 1);
  testExample(8, 36);
  testExample(22, 253);
  testExample(100, 5050);
  testExample(213, 22791);

  for(let i = 0; i < 95; ++i) {
    let number = Math.floor(Math.random() * 80) + 1;
    let expectedResult = Array.apply(null, { length: number + 1 }).map(Number.call, Number).reduce((partial_sum, a) => partial_sum + a);
    testExample(number, expectedResult);
  };
});
