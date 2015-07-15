import AjaxTranslationsLoader from './ajaxTranslationsLoader';

/**
 * @class
 * An awesome script
 */
class LocaleStorage {
  constructor(options) {
    this.loader = options.loader || LocaleStorage.defaultLoader;
    this.initialize();
  }

  static get defaultLoader() {
    return new AjaxTranslationsLoader(
      {},
      this.sucessCallback,
      this.failCalllback);
  }

  initialize() {
    // retrieve via loader
    for (let locale of this.loader.locales) {
      this.loader.load(
        locale,
        this.sucessCallback,
        this.failCalllback);
    }
  }

  sucessCallback(data) {
    // do stuff with data
    console.log('save');
    this.save(Object.keys(data)[0], JSON.stringify(data[Object.keys(data)[0]]));
  }

  failCalllback(data) {
    // do stuff with data
    console.log('fail');
    console.log(data);
  }

  save(key, value) {
    window.localStorage.setItem(key, value);
    console.log('localStorage = ' + key + ' : ' + value);
  }

  load(key) {
    window.localStorage.getItem(key);
  }
}

export default LocaleStorage;
