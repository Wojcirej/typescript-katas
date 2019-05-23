import { stringRepeater } from './../../katas/stringRepeater/stringRepeater';

function testExample(str, n, expectedResult) {

  describe("when str = '" + str + "', when n = '" + n + "'", () => {

    it("returns " + expectedResult, () => {
      let result = stringRepeater(str, n);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("stringRepeater", () => {

  testExample("a", 5, "aaaaa");
  testExample("Na", 16, "NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa");
  testExample("Wub ", 6, "Wub Wub Wub Wub Wub Wub ");
});
