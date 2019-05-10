import { removeFirstAndLastChar } from './../../katas/removeFirstAndLastChar/removeFirstAndLastChar';

function testExample(str, expectedResult) {

  describe("when str = '" + str + "'", () => {

    it("returns " + expectedResult, () => {
      let result = removeFirstAndLastChar(str);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("removeFirstAndLastChar", () => {

  testExample('eloquent', 'loquen');
  testExample('country', 'ountr');
  testExample('person', 'erso');
  testExample('place', 'lac');
  testExample('lol', 'o');
});
