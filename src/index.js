import TranslationsLoader from './helpers/translationsLoader';
import LocaleStorage from './helpers/localeStorage';
import RealTime from './helpers/realTime';
import Internationalizer from './helpers/internationalizer';
/**
 * @class
 * TranslationManager a pivot class for translation manager
 */
export default class TranslationManager {
  constructor(options) {
    this.options = options;
    options.loader = new TranslationsLoader(options || {});
    this.options.storage = new LocaleStorage(options);
    this.realTime = new RealTime(options);
  }
  translate(options) {
    var internationalizer = new Internationalizer(options);
    internationalizer.translate(options);
  }
}
