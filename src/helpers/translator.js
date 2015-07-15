/**
 * @class
 * An awesome script
 */
class Translator {
  contructor(message) {
    this.key = Object.keys(message)[0];
    this.value = JSON.stringify(message[this.key]);
  }

  get locale() {
    return localStorage.getItem(this.key);
  }

  get translation() {
    return JSON.parse(this.locale);
  }

  // get resource() {
  //   return {key: {translation: value}};
  // }
}

export default Translator;
