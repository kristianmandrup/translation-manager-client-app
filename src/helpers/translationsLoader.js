import AjaxTranslationsLoader from './ajaxTranslationsLoader';

/**
 * @class
 * An awesome script
 */
// performs Ajax Request to get JSON response with locales
class TranslationsLoader {
  constructor(options) {
    this.locales = options.locales;
    this.options = options;
  }

  load(locale, sucessCallback, failCallback) {
    this.options.restPath = `${locale}`;
    return new AjaxTranslationsLoader(this.options, sucessCallback, failCallback);
  }
}

export default TranslationsLoader;
