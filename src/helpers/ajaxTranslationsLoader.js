import xhttp from 'xhttp';
import LocaleStorage from './localeStorage';

/**
 * @class
 * An awesome script
 */
class AjaxTranslationsLoader {
  constructor(options,sucessCallback,failCallback) {
    this.restPath = options.restPath || AjaxTranslationsLoader.defaultPath;
    this.storage = options.storage;
    this.sucessCallback = sucessCallback;
    this.failCallback = failCallback;
  }

  static get defaultPath() {
    return '/translations'; 
  }

  get request() {
    return `{
      url: 'http://localhost:3000${this.restPath}',
      method: 'get'
    }`; // use String interpolation!
  }

  load() {
    xhttp(this.request())
    // Success handler
    .then(this.sucessCallback)
    // Fail handler
    .then(this.failCallback);
  }  
}

export default AjaxTranslationsLoader;