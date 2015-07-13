import TranslationsLoader from './helpers/translationsLoader';
import LocaleStorage from './helpers/localeStorage';
import EventBus from './helpers/eventBus';
import AjaxTranslationsLoader from './helpers/ajaxTranslationsLoader';
import redisPubSub from '../node_modules/redis-pub-sub/lib/redisPubSub';

/**
 * @class
 * An awesome script
 */
class TranslationManager {
  constructor(options) {
    this.options = options;
    options.loader = new TranslationsLoader(options || {});
    this.storage = options.storage || new LocaleStorage(options);
    this.logger  = options.logger || console.log;

    var appPubSub = new redisPubSub();

    //appPubSub.on('create:project', function(data) {
    //  console.log(data.name);
    //});
 
    //appPubSub.emit('create:project', {name : 'foo'});

    //var queue = require('message-queue')('redis');

    //var cats = queue.Subscribe({channel: 'realtime_msg'});

    //cats.on('message', function(coolCat){
//      console.log('message: ' + JSON.stringify(coolCat));
  //  });

    //this.realtime = window.realtime;
    //this.eventbus = this.realtime.eventBus;

    new EventBus(options);    
  }
}

export default TranslationManager;