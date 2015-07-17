import xhttp from 'xhttp';

/**
 * @class
 * An awesome script
 */
class AjaxTranslationsLoader {
  constructor(options, sucessCallback, failCallback) {
    this.host = options.railsHost || 'localhost';
    this.port = options.railsPort || 3000;
    this.restPath = options.restPath || AjaxTranslationsLoader.defaultPath;
    this.storage = options.storage;
    this.sucessCallback = sucessCallback;
    this.failCallback = failCallback;
    this.load();
  }

  static get defaultPath() {
    return '/translations';
  }

  get request() {
    return 'http://' + this.host + ':' + this.port + '/translations?locale=' + this.restPath;
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

export default AjaxTranslationsLoader;
