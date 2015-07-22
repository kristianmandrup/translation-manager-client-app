import AjaxTranslationsLoader from './ajaxTranslationsLoader';

/**
 * @class
 * TranslationsLoader to load all translations
 */
// performs Ajax Request to get JSON response with locales
export default class TranslationsLoader {
  constructor(options) {
    this.locales = options.locales;
    this.options = options;
  }

  load(locale, sucessCallback, failCallback) {
    this.options.restPath = `${locale}`;
    return new AjaxTranslationsLoader(this.options, sucessCallback, failCallback);
  }
}
