import StorageInternationalizer from './storageInternationalizer';
import Translator from './translator';

/**
 * @class
 * An awesome script
 */
// syncs with Redis DB via Realtime Eventbus
class TranslationSynchronizer {
  constructor(options) {
    this.storage = options.storage;
  }

  sync(message) {
    var translator = new Translator(message);
    (new StorageInternationalizer()).init(translator.resource());
    this.storage.save(Object.keys(message)[0], JSON.stringify(message[Object.keys(message)[0]]));
  }
}

export default TranslationSynchronizer;
