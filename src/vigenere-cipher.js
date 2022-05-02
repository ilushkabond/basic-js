const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(message, key, decrypt = false) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let index = 0;

    const result = [];

    [message, key] = [message, key].map(e => e.toUpperCase());

    [...message].forEach(char => {
      const code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        let charCode;

        const idx = index % key.length;
        const keyCode = (key[idx].charCodeAt(0) - 65) % 32;

        if (decrypt)
          charCode = code + 65 - keyCode
        else
          charCode = code - 65 + keyCode;

        char = String.fromCharCode(charCode % 26 + 65);
        index++;
      }

      result.push(char);
    });

    if (this.direction)
      return result.join('')
    else
      return result.reverse().join('');
  }

  decrypt(message, key) {
    return this.encrypt(message, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine
};
