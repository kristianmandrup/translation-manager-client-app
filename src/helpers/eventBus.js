import EventLogger from './eventLogger';
import TranslationSynchronizer from './translationSynchronizer';
/*eslint-disable */
import io from 'socket.io-client';

/*eslint-enable */
/**
 * @class
 * An awesome script
 */
class EventBus {
  constructor(options) {
    this.eventLogger = new EventLogger(options);
    this.translationSynchronizer = new TranslationSynchronizer(options);
    var socket = io('http://localhost:5001');
    socket.connect();
    socket.on('realtime_msg', function(data) {
      console.log(data);
      // socket.emit('my other event', {my: 'data'});
    });
    //this.channel = Redispubsub.createChannel(
    //  options.realtimePort || 6379,
    //  options.realtimeHost || 'localhost',
    //  options.channel || 'realtime_msg');
    // this.init();
  }

  // init() {
    // var me = this;
    //this.channel.on('connect', function() {
    //  me.channel.on('message', function(msg) {
    //    me.eventLogger.log(msg.msg);
    //    me.translationSynchronizer.sync(msg);
    //  });
    // });
  // }
}

export default EventBus;
