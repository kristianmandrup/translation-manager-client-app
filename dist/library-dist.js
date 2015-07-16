var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('redis-pubsub'), require('ainojs-ajax'), require('i18n-node')) : typeof define === 'function' && define.amd ? define(['redis-pubsub', 'ainojs-ajax', 'i18n-node'], factory) : global.TranslationManager = factory(global.Redispubsub, global.Ajax, global.i18n);
})(this, function (Redispubsub, Ajax, i18n) {
  'use strict';

  /**
   * @class
   * An awesome script
   */

  var EventLogger = (function () {
    function EventLogger() {
      _classCallCheck(this, EventLogger);
    }

    _createClass(EventLogger, null, [{
      key: 'log',
      value: function log(message) {
        EventLogger.log(message);
      }
    }]);

    return EventLogger;
  })();

  var eventLogger = EventLogger;

  var AjaxTranslationsLoader = (function () {
    function AjaxTranslationsLoader(options, sucessCallback, failCallback) {
      _classCallCheck(this, AjaxTranslationsLoader);

      this.host = options.railsHost || '127.0.0.1';
      this.port = options.railsPort || 3000;
      this.restPath = options.restPath || AjaxTranslationsLoader.defaultPath;
      this.storage = options.storage;
      this.sucessCallback = sucessCallback;
      this.failCallback = failCallback;
      this.load();
    }

    _createClass(AjaxTranslationsLoader, [{
      key: 'load',
      value: function load() {
        eventLogger.log('Ajax');
        Ajax.get(this.request).then(function (data) {
          eventLogger.log(data);
        })['catch'](function (data) {
          eventLogger.log(data);
        });
      }
    }, {
      key: 'request',
      get: function get() {
        return '\'http://' + this.host + ':' + this.port + '/translations?' + this.restPath + '\''; // use String interpolation!
      }
    }], [{
      key: 'defaultPath',
      get: function get() {
        return '/translations';
      }
    }]);

    return AjaxTranslationsLoader;
  })();

  var ajaxTranslationsLoader = AjaxTranslationsLoader;

  var TranslationsLoader = (function () {
    function TranslationsLoader(options) {
      _classCallCheck(this, TranslationsLoader);

      this.locales = options.locales;
      this.options = options;
    }

    _createClass(TranslationsLoader, [{
      key: 'load',
      value: function load(locale, sucessCallback, failCallback) {
        this.options.restPath = 'locale=' + locale;
        return new ajaxTranslationsLoader(this.options, sucessCallback, failCallback);
      }
    }]);

    return TranslationsLoader;
  })();

  var translationsLoader = TranslationsLoader;

  var Internationalizer = (function () {
    function Internationalizer() {
      _classCallCheck(this, Internationalizer);
    }

    _createClass(Internationalizer, [{
      key: 'init',

      // constructor(options) {
      //   // ??
      // }

      value: function init(options) {
        i18n.init(options);
      }
    }]);

    return Internationalizer;
  })();

  var internationalizer = Internationalizer;

  var StorageInternationalizer = (function (_internationalizer) {
    _inherits(StorageInternationalizer, _internationalizer);

    function StorageInternationalizer() {
      _classCallCheck(this, StorageInternationalizer);

      _get(Object.getPrototypeOf(StorageInternationalizer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(StorageInternationalizer, [{
      key: 'init',
      value: function init(resource) {
        _get(Object.getPrototypeOf(StorageInternationalizer.prototype), 'init', this).call(this, this.configurationFor(resource));
      }
    }, {
      key: 'configurationFor',
      value: function configurationFor(resource) {
        return { resStore: resource };
      }
    }]);

    return StorageInternationalizer;
  })(internationalizer);

  var storageInternationalizer = StorageInternationalizer;

  /**
   * @class
   * An awesome script
   */

  var Translator = (function () {
    function Translator() {
      _classCallCheck(this, Translator);
    }

    _createClass(Translator, [{
      key: 'contructor',
      value: function contructor(message) {
        this.key = Object.keys(message)[0];
        this.value = JSON.stringify(message[this.key]);
      }
    }, {
      key: 'locale',
      get: function get() {
        return localStorage.getItem(this.key);
      }
    }, {
      key: 'translation',
      get: function get() {
        return JSON.parse(this.locale);
      }

      // get resource() {
      //   return {key: {translation: value}};
      // }

    }]);

    return Translator;
  })();

  var helpers_translator = Translator;

  var TranslationSynchronizer = (function () {
    function TranslationSynchronizer(options) {
      _classCallCheck(this, TranslationSynchronizer);

      this.storage = options.storage;
    }

    _createClass(TranslationSynchronizer, [{
      key: 'sync',
      value: function sync(message) {
        var translator = new helpers_translator(message);
        new storageInternationalizer().init(translator.resource());
        this.dataKeys = Object.keys(message)[0];
        this.storage.save(this.dataKeys, JSON.stringify(message[this.dataKeys]));
      }
    }]);

    return TranslationSynchronizer;
  })();

  var translationSynchronizer = TranslationSynchronizer;

  var EventBus = (function () {
    function EventBus(options) {
      _classCallCheck(this, EventBus);

      this.eventLogger = new eventLogger(options);
      this.translationSynchronizer = new translationSynchronizer(options);
      this.channel = Redispubsub.createChannel(options.realtimePort || 6379, options.realtimeHost || '127.0.0.1', options.channel || 'realtime_msg');
      this.init();
    }

    _createClass(EventBus, [{
      key: 'init',
      value: function init() {
        var me = this;
        this.channel.on('connect', function () {
          me.channel.on('message', function (msg) {
            me.eventLogger.log(msg.msg);
            me.translationSynchronizer.sync(msg);
          });
        });
      }
    }]);

    return EventBus;
  })();

  var eventBus = EventBus;

  var TranslationManager = function TranslationManager(options) {
    _classCallCheck(this, TranslationManager);

    this.options = options;
    options.loader = new translationsLoader(options || {});
    // this.storage = new LocaleStorage(options);
    this.eventBus = new eventBus(options);
  };

  // export default TranslationManager;

  return TranslationManager;
});
//# sourceMappingURL=./library-dist.js.map