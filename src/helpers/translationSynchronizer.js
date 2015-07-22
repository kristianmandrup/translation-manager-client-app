import LocaleStorage from './localeStorage';

/**
 * @class
 * TranslationSynchronizer to synchronize translation
 */
// syncs with Redis DB via Realtime Eventbus
export default class TranslationSynchronizer {
  constructor(options) {
    this.options = options;
  }

  sync(message) {
    this.dataKeys = Object.keys(message)[0];
    LocaleStorage.save(this.dataKeys, JSON.stringify(message[this.dataKeys]));
  }
}
