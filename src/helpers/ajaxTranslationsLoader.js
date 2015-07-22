import xhttp from 'xhttp';

/**
 * @class
 * AjaxTranslationsLoader to load the translations
 */
export default class AjaxTranslationsLoader {
  constructor(options, sucessCallback, failCallback) {
    this.host = options.railsHost || 'localhost';
    this.port = options.railsPort || 3000;
    this.restPath = options.restPath || this.defaultPath;
    this.sucessCallback = sucessCallback;
    this.failCallback = failCallback;
    this.load();
  }

  get defaultPath() {
    return '/translations';
  }

  get request() {
    return this.defaultUrl + ':' + this.defaultPort + '/translations?locale=' + this.restPath;
  }

  get defaultUrl() {
    return 'http://127.0.0.1';
  }

  get defaultPort() {
    return 3000;
  }

  load() {
    var localKey = this.restPath;
    var sucessCallback = this.sucessCallback;
    xhttp({
      url: this.request,
      type: 'form',
      contantType: 'application/x-www-form-urlencoded'})
    .then(function(data) {
      sucessCallback(localKey, data);
    })
    .catch(this.failCallback);
  }
}
