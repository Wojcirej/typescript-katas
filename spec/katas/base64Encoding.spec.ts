import { Encoder } from './../../katas/base64Encoding/base64Encoding';

describe("Encoder", () => {

  describe(".toBase64()", () => {

    function testExample(input, expectedResult) {

      describe(`when 'input' = ${input}`, () => {

        it("returns " + expectedResult, () => {
          let result = Encoder.toBase64(input);
          expect(result).toEqual(expectedResult);
        });
      });
    };
    testExample("this is a string!!", "dGhpcyBpcyBhIHN0cmluZyEh");
    testExample("this is a test!", "dGhpcyBpcyBhIHRlc3Qh");
    testExample("1234567890  ", "MTIzNDU2Nzg5MCAg");
    testExample("ABCDEFGHIJKLMNOPQRSTUVWXYZ ", "QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVog");
  });

  describe(".fromBase64()", () => {

    function testExample(input, expectedResult) {

      describe(`when 'input' = ${input}`, () => {

        it("returns " + expectedResult, () => {
          let result = Encoder.fromBase64(input);
          expect(result).toEqual(expectedResult);
        });
      });
    };
    testExample("dGhpcyBpcyBhIHN0cmluZyEh", "this is a string!!");
    testExample("dGhpcyBpcyBhIHRlc3Qh", "this is a test!");
    testExample("MTIzNDU2Nzg5MCAg", "1234567890  ");
    testExample("QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVog", "ABCDEFGHIJKLMNOPQRSTUVWXYZ ");
  });
});
