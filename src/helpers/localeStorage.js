import AjaxTranslationsLoader from './ajaxTranslationsLoader';
import EventLogger from './eventLogger';
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

  static get store() {
    return window.localStorage;
  }

  initialize() {
    // retrieve via loader
    for (let locale of this.loader.locales) {
      this.dataKeys = locale;
      this.loader.load(
        locale,
        this.sucessCallback,
        this.failCalllback);
    }
  }

  sucessCallback(dataKeys, data) {
    LocaleStorage.save(dataKeys, JSON.stringify(data));
  }

  failCalllback(data) {
    EventLogger.log(data);
  }

  static save(key, value) {
    LocaleStorage.store.setItem(key, value);
  }

  static load(key) {
    LocaleStorage.store.getItem(key);
  }
}

export default LocaleStorage;
