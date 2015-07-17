import TranslationsLoader from './helpers/translationsLoader';
import LocaleStorage from './helpers/localeStorage';
import EventBus from './helpers/eventBus';

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
}
