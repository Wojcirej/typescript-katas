import { abbrevName } from './../../katas/abbreviateTwoWordName/abbreviateTwoWordName';

function testExample(name:string, expectedResult:string) {

  describe("when name = '" + name + "'", () => {

    it("returns '" + expectedResult + "'", () => {
      let result = abbrevName(name);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("abbreviateTwoWordName", () => {

  testExample("Sam Harris", "S.H");
  testExample("Sam Smith", "S.S");
  testExample("some Name", "S.N");
  testExample("Some name", "S.N");
  testExample("Sam Harris", "S.H");
  testExample("Patrick Feenan", "P.F");
});
