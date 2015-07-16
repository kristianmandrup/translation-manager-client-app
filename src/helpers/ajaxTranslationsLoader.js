import Ajax from 'ainojs-ajax';
import EventLogger from './eventLogger';

/**
 * @class
 * An awesome script
 */
class AjaxTranslationsLoader {
  constructor(options, sucessCallback, failCallback) {
    this.host = options.railsHost || '127.0.0.1';
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
    return `'http://${this.host}:${this.port}/translations?${this.restPath}'`; // use String interpolation!
  }

  load() {
    EventLogger.log('Ajax');
    Ajax.get(this.request).then(function(data) {
      EventLogger.log(data);
    }).catch(function(data) {
      EventLogger.log(data);
    });
  }
}

export default AjaxTranslationsLoader;
