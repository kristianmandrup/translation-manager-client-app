import i18next from 'i18next';

/**
 * @class
 * StorageInternationalizer manages translation using i18next
 */
export default class Internationalizer {
  constructor(options = {}) {
    this.locale = options.locale;
    this.key = options.key;
    this.defaultLocale = options.defaultLocale || 'en';
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
    return key ? this.translation(key) : this.allTranslations(locale);
  }

  translation(key) {
    return i18next.t(key);
  }

  allTranslations(locale) {
    let translations = window.localStorage.getItem(locale || this.defaultLocale);
    return JSON.parse(translations);
  }
}
