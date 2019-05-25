export class Encoder {
  private source:string;
  private keyStr:string;

  constructor(source:string) {
    this.source = source;
    this.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  };

  static toBase64(string: string) {
    return new Encoder(string).toBase64();
  };

  static fromBase64(string: string) {
    return new Encoder(string).fromBase64();
  };

  private toBase64() {
    let output = "";
    var i = 0;
    while (i < this.source.length) {
      let chr1 = this.source.charCodeAt(i++);
      let chr2 = this.source.charCodeAt(i++);
      let chr3 = this.source.charCodeAt(i++);
      let enc1 = chr1 >> 2;
      let enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      let enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      let enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      };
      output += `${this.keyStr.charAt(enc1)}${this.keyStr.charAt(enc2)}${this.keyStr.charAt(enc3)}${this.keyStr.charAt(enc4)}`
    };
    return output;
  };

  private fromBase64() {
    let output = "";
    let i = 0;
    let input = this.source.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      let enc1 = this.keyStr.indexOf(input.charAt(i++));
      let enc2 = this.keyStr.indexOf(input.charAt(i++));
      let enc3 = this.keyStr.indexOf(input.charAt(i++));
      let enc4 = this.keyStr.indexOf(input.charAt(i++));
      let chr1 = (enc1 << 2) | (enc2 >> 4);
      let chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      let chr3 = ((enc3 & 3) << 6) | enc4;
      output += String.fromCharCode(chr1);
      if (enc3 != 64) {
        output += String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output += String.fromCharCode(chr3);
      }
    };
    return output;
  };
};
