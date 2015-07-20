// import LocaleStorage from './localeStorage';
import i18next from 'i18next';

/**
 * @class
 * An awesome script
 */
class StorageInternationalizer {
  constructor(options) {
    this.init(options);
    this.translate(options);
  }
  init(options) {
    i18next.init(this.configurationFor(options.locale));
  }
  configurationFor(locale) {
    return {resStore: {locale: {translation: JSON.parse(window.localStorage.getItem(locale))}}};
  }

  translate(options) {
    var translated = {};
    if (options.key && options.locale) {
      console.log(i18next.t(options.key));
      translated = i18next.t(options.key);
    } else if (options.locale) {
      translated = JSON.parse(window.localStorage.getItem(options.locale));
    } else {
      translated = JSON.parse(window.localStorage.getItem('en'));
    }
    console.log(translated);
    return translated;
  }
}

export default StorageInternationalizer;
