 import Another from './another';
import pubsub from 'redis-pubsub';

const MyLibrary = {
  anotherFn() {
    return Another.anotherFn() + ', friend';
  },
  mainFn() {
    // Subscribe to channel 'foobar' on a local server.
    var channel = pubsub.createChannel(6379, '127.0.0.1', 'realtime_msg');
    channel.on('connect', function() {
      console.log('connect -----');
      channel.on('message', function(msg) {
        console.log(msg.message);
        //channel.end();
      });
      //channel.send({greeting: 'Hello world!'});
    });
    return 'hello';
  }
};

export default MyLibrary;
