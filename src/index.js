import TranslationsLoader from './helpers/translationsLoader';
import LocaleStorage from './helpers/localeStorage';
import EventBus from './helpers/eventBus';
import StorageInternationalizer from './helpers/storageInternationalizer';
/**
 * @class
 * An awesome script
 */
export default class TranslationManager {
  constructor(options) {
    this.options = options;
    options.loader = new TranslationsLoader(options || {});
    this.options.storage = new LocaleStorage(options);
    this.eventBus = new EventBus(options);
  }
  translate(options) {
    var storageInternationalizer = new StorageInternationalizer(options);
    storageInternationalizer.translate(options);
  }
}
