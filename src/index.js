import TranslationsLoader from './helpers/translationsLoader';
import LocaleStorage from './helpers/localeStorage';
import EventBus from './helpers/eventBus';

/**
 * @class
 * An awesome script
 */
class TranslationManager {
  constructor(options) {
    this.options = options;
    options.loader = new TranslationsLoader(options || {});
    this.storage = new LocaleStorage(options);
    this.logger = options.logger || console.log;
    this.eventBus = new EventBus(options);
  }
}

export default TranslationManager;
