import EventLogger from './eventLogger';
import TranslationSynchronizer from './translationSynchronizer';
/*eslint-disable */
import Redispubsub from 'redis-pubsub';
/*eslint-enable */
/**
 * @class
 * An awesome script
 */
class EventBus {
  constructor(options) {
    this.eventLogger = new EventLogger(options);
    this.translationSynchronizer = new TranslationSynchronizer(options);
    this.channel = Redispubsub.createChannel(
      options.realtimePort || 6379,
      options.realtimeHost || '127.0.0.1',
      options.channel || 'realtime_msg');
    this.init();
  }

  init() {
    var me = this;
    this.channel.on('connect', function() {
      me.channel.on('message', function(msg) {
        me.eventLogger.log(msg.msg);
        me.translationSynchronizer.sync(msg);
      });
    });
  }
}

export default EventBus;
