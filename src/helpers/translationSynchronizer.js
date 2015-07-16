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
    this.dataKeys = Object.keys(message)[0];
    this.storage.save(this.dataKeys, JSON.stringify(message[this.dataKeys]));
  }
}

export default TranslationSynchronizer;
