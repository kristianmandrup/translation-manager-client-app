(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('redis-pubsub')) : typeof define === 'function' && define.amd ? define(['redis-pubsub'], factory) : global.MyLibrary = factory(global.pubsub);
})(this, function (pubsub) {
  'use strict';

  var Another = {
    anotherFn: function anotherFn() {
      return 'ok';
    }
  };

  var MyLibrary = {
    anotherFn: function anotherFn() {
      return Another.anotherFn() + ', friend';
    },
    mainFn: function mainFn() {
      // Subscribe to channel 'foobar' on a local server.
      var channel = pubsub.createChannel(6379, '127.0.0.1', 'realtime_msg');
      channel.on('connect', function () {
        console.log('connect -----');
        channel.on('message', function (msg) {
          console.log(msg.message);
          //channel.end();
        });
        //channel.send({greeting: 'Hello world!'});
      });
      return 'hello';
    }
  };

  var index = MyLibrary;

  return index;
});
//# sourceMappingURL=./library-dist.js.map