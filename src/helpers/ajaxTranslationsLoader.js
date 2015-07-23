import xhttp from 'xhttp';

/**
 * @class
 * AjaxTranslationsLoader to load the translations
 * @options (Object)
 *   restDomain, restPort, restPath, localeParam
 */
export default class AjaxTranslationsLoader {
  constructor(options, sucessCallback, failCallback) {
    this.init(options);
    this.sucessCallback = sucessCallback;
    this.failCallback = failCallback;
    this.load();
  }

  init(options) {
    this.domain = options.restDomain || this.defaultDomain;
    this.port = options.restPort || this.defaultPort;
    this.restPath = options.restPath;
    this.localeParam = options.localeParam || this.defaultLocaleParam;
  }

  get localePath() {
    return [this.localeParam, this.restPath].join('=');
  }

  get request() {
    return [[[this.domain, this.port].join(':'), this.defaultPath].join('/'), this.localePath].join('?');
  }

  load() {
    let localeKey = this.restPath;
    let sucessCallback = this.sucessCallback;
    xhttp({
      url: this.request,
      type: 'form',
      contantType: 'application/x-www-form-urlencoded'})
    .then(function(data) {
      sucessCallback(localeKey, data);
    })
    .catch(this.failCallback);
  }

  // private

  get defaultPath() {
    return 'translations';
  }

  get defaultLocaleParam() {
    return 'locale';
  }

  get defaultDomain() {
    return 'http://127.0.0.1';
  }

  get defaultPort() {
    return 3000;
  }
}
