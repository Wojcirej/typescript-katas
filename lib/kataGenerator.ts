import * as fs from "fs";

export class KataGenerator {
  private kataName:string;
  private params:Array<string>;
  private rootDirectoryPath:string;
  private readmeFilePath:string;
  private kataDefinitionFilePath:string;
  private kataSpecFilePath:string;

  constructor(kataName:string, params:Array<string> = []) {
    this.kataName = kataName;
    this.params = params;
    this.rootDirectoryPath = `katas/${this.kataName}`;
    this.readmeFilePath = `katas/${this.kataName}/README.md`;
    this.kataDefinitionFilePath = `katas/${this.kataName}/${this.kataName}.ts`;
    this.kataSpecFilePath = `spec/katas/${this.kataName}.spec.ts`;
  };

  static call(kataName:string, params:Array<string> = []) {
    new KataGenerator(kataName, params).call();
  };

  call() {
    this.createKataRootDirectory();
    this.createKataFile(this.readmeFilePath, this.readmeFileContent());
    this.createKataFile(this.kataDefinitionFilePath, this.kataDefinitionFileContent());
    this.createKataFile(this.kataSpecFilePath, this.kataSpecFileContent());
  };

  humanizeKataName() {
    let lowerCased = this.kataName.replace(/([A-Z]+)/g, " $1").toLowerCase();
    return lowerCased[0].toUpperCase() + lowerCased.slice(1);
  };

  formatParamsForDescription() {
    let content = "";
    for(let i = 0; i < this.params.length; ++i) {
      content += "when " + this.params[i] + " = '\" + " + this.params[i] + " + \"'";
      if (i < this.params.length - 1) {
        content += ", ";
      };
    }
    return content;
  };

  private createKataRootDirectory() {
    fs.mkdirSync(this.rootDirectoryPath);
    console.log("\x1b[32m%s\x1b[37m%s", "Created ", this.rootDirectoryPath);
  };

  private createKataFile(path:string, content:string) {
    fs.writeFileSync(path, content);
    console.log("\t\x1b[32m%s\x1b[37m%s", "Created ", path);
  };

  private readmeFileContent() {
    let content = "# " + this.humanizeKataName() + "\n\n";
    content += "### Description\n";
    content += "<!-- Add kata description here -->\n\n";
    content += "### Examples\n";
    content += "<!-- Add your examples here -->\n";
    content += "```typescript\n```\n\n";
    content += "### Link to kata on codewars.com\n";
    return content;
  };

  private kataDefinitionFileContent() {
    return `export function ${this.kataName}(${this.params.join(", ")}) {\n};\n`;
  };

  private kataSpecFileContent() {
    let content = `import { ${this.kataName} } from './../../katas/${this.kataName}/${this.kataName}';\n\n`;
    content += `function testExample(${this.params.join(", ")}, expectedResult) {\n\n`;
    content += `  describe(\"${this.formatParamsForDescription()}\", () => {\n\n`;
    content += "    it(\"returns \" + expectedResult, () => {\n";
    content += `      let result = ${this.kataName}(${this.params.join(", ")});\n`;
    content += "      expect(result).toEqual(expectedResult);\n";
    content += "    });\n";
    content += "  });\n";
    content += "};\n\n";
    content += `describe(\"${this.kataName}\", () => {\n\n`;
    content += "  //Include your test examples here like:\n";
    content += "  //testExample(list, of, params, expectedResult);\n";
    content += "});\n";
    return content;
  };
};
