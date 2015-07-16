import AjaxTranslationsLoader from './ajaxTranslationsLoader';
import EventLogger from './eventLogger';
/**
 * @class
 * An awesome script
 */
export class LocaleStorage {
  constructor(options) {
    this.loader = options.loader || LocaleStorage.defaultLoader;
    this.initialize();
    this.store = options.storage || window.localStorage;
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
    this.dataKeys = Object.keys(data)[0];
    this.save(this.dataKeys, JSON.stringify(data[this.dataKeys]));
  }

  failCalllback(data) {
    EventLogger.log(data);
  }

  save(key, value) {
    this.store.setItem(key, value);
  }

  load(key) {
    this.store.getItem(key);
  }
}
