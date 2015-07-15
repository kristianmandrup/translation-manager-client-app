import Internationalizer from './internationalizer';

/**
 * @class
 * An awesome script
 */
class StorageInternationalizer extends Internationalizer {
  init(resource) {
    super.init(this.configurationFor(resource));
  }

  configurationFor(resource) {
    return {resStore: resource};
  }

}

export default StorageInternationalizer;
