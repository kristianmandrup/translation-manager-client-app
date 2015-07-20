/*eslint-disable */
import TranslationManager from '../../src/index.js';
import StorageInternationalizer from '../../src/helpers/storageInternationalizer.js';
var expect = chai.expect;
describe('A Feature tests', () => {
  var translationManager;
  var options;
  it('TranslationManager exsists', () => expect(TranslationManager).is.not.undefined);
  it('Created TranslationManager', () => {
    options = {'locales': ['hi', 'en'],
      'realtimePort': 6379, /*optional. Default value 6379*/
      'realtimeHost': 'localhost', /*optional. Default value localhost*/
      'railsPort': 3000, /*optional. Default value 3000*/
      'railsHost': 'localhost', /*optional. Default value localhost*/
      'channel': 'realtime_msg', /*optional. Default value realtime_msg*/
      'locale' : 'hi', /*optional. Default value 'en'*/
      'key' : 'date.abbr_day_names' /*optional. Default value "'date.day_names'"*/
    };
    translationManager = new TranslationManager(options);
  });
  it('Translation using i18next', () => {
    translationManager.translate(options);
  });

});
