import i18next from 'i18next';
import EventLogger from './eventLogger';

/**
 * @class
 * StorageInternationalizer manages translation using i18next
 */
export default class Internationalizer {
  constructor(options) {
    this.locale = options.locale;
    this.key = options.key;
    this.init(this.locale);
    this.translate(this.locale, this.key);
  }
  init(locale) {
    i18next.init(this.configurationFor(locale));
  }
  configurationFor(locale) {
    return {resStore: {locale: {translation: JSON.parse(window.localStorage.getItem(locale))}}};
  }

  translate(locale, key) {
    var translated = {};
    if (key && locale) {
      translated = i18next.t(key);
    } else if (locale) {
      translated = JSON.parse(window.localStorage.getItem(locale));
    } else {
      translated = JSON.parse(window.localStorage.getItem('en'));
    }
    EventLogger.log(translated);
    return translated;
  }
}
