import AjaxTranslationsLoader from './ajaxTranslationsLoader';
import EventLogger from './eventLogger';
/**
 * @class
 * LocaleStorage for storage management
 */
export default class LocaleStorage {
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
    return this.loader.locales ? this.loadAllLocales(this.loader.locales) : this.loadDefaultLocale();
  }

  loadAllLocales(locales) {
    for (let locale of locales) {
      this.dataKeys = locale;
      this.loader.load(
        locale,
        this.sucessCallback,
        this.failCalllback);
    }
  }

  loadDefaultLocale() {
    this.loader.load(
      'en',
      this.sucessCallback,
      this.failCalllback);
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
