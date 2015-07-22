import EventLogger from './eventLogger';
import TranslationSynchronizer from './translationSynchronizer';
/*eslint-disable */
import io from 'socket.io-client';

/*eslint-enable */
/**
 * @class
 * Realtime for real time events
 */
export default class Realtime {

  constructor(options) {
    this.options = options;
    this.socketUrl = options.socketUrl || this.defaultSocketUrl;
    this.connect();
  }

  get defaultSocketUrl() {
    return [[this.defaultUrl, this.defaultPort].join(':'), this.defaultParam].join('?');
  }

  get defaultUrl() {
    return 'http://127.0.0.1';
  }

  get defaultPort() {
    return '5001';
  }

  get defaultParam() {
    return '_rtUserId=42&_rtToken=610f36bf16d89c12f400414ce1fd8ab3';
  }

  get options() {
    return this.options;
  }

  connect() {
    var socket = io.connect(this.socketUrl);
    socket.on('connect', function() {
      EventLogger.log('connected');
    });
    socket.on('realtime_msg', function(message) {
      EventLogger.log(message);
      var translationSynchronizer = new TranslationSynchronizer(this.options);
      translationSynchronizer.sync(message);
    });
  }
}
