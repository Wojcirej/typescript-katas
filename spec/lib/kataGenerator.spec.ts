import { KataGenerator } from './../../lib/kataGenerator';
import * as fs from 'fs';

describe("KataGenerator", () => {

  describe("constructor", () => {

    describe("when blank params", () => {

      it("creates instance", () => {
        expect(new KataGenerator('test')).toBeTruthy;
      });
    });

    describe("when params present", () => {

      it("creates instance", () => {
        expect(new KataGenerator('test', ['param1', 'param2'])).toBeTruthy;
      });
    });
  });

  describe("#call", () => {
    const kataName = "testKata";
    const rootDirectoryPath = `katas/${kataName}`;
    const readmeFilePath = `katas/${kataName}/README.md`;
    const kataDefinitionFilePath = `katas/${kataName}/${kataName}.ts`;
    const kataSpecFilePath = `spec/katas/${kataName}.spec.ts`;

    beforeEach(() => {
      KataGenerator.call(kataName);
    });

    afterEach(() => {
      fs.unlinkSync(kataDefinitionFilePath);
      fs.unlinkSync(readmeFilePath);
      fs.unlinkSync(kataSpecFilePath);
      if (fs.existsSync(rootDirectoryPath)) {
        fs.rmdirSync(rootDirectoryPath);
      };
    });

    function testExample(description:string, path:string) {

      it(description, () => {
        expect(fs.existsSync(path)).toBe(true);
      });
    };

    testExample("creates 'testKata' directory in 'katas/' directory", rootDirectoryPath);
    testExample("creates 'testKata.ts' file in 'katas/testKata' directory", kataDefinitionFilePath);
    testExample("creates 'README.md' file in 'katas/testKata' directory", readmeFilePath);
    testExample("creates 'testKata.spec.ts' file in 'spec/katas/' directory", kataSpecFilePath);
  });

  describe("#humanizeKataName", () => {

    function testExample(kataName:string, description:string, expectedResult:string) {

      describe(description, function() {

        it("returns '" + expectedResult + "'", function() {
          expect(new KataGenerator(kataName).humanizeKataName()).toEqual(expectedResult);
        });
      });
    };

    testExample("testKata", "when kataName = 'testKata'", "Test kata");
    testExample("testTestTest", "when kataName = 'testTestTest'", "Test test test");
  });

  describe("#formatParamsForDescription", () => {

    function testExample(params:Array<string>, description:string, expectedResult:string) {

      describe(description, function() {

        it("returns '" + expectedResult + "'", function() {
          expect(new KataGenerator('testKata', params).formatParamsForDescription()).toEqual(expectedResult);
        });
      });
    };

    testExample(["param"], "when params = '[param]'", "when param = '\" + param + \"'");
    testExample(["param1", "param2"], "when params = '[param1, param2]'", "when param1 = '\" + param1 + \"', when param2 = '\" + param2 + \"'");
  });
});
