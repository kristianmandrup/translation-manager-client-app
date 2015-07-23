/*eslint-disable */
import TranslationManager from '../../src/index.js';
import AjaxTranslationsLoader from '../../src/helpers/ajaxTranslationsLoader.js';
import Realtime from '../../src/helpers/realTime.js';
import Internationalizer from '../../src/helpers/internationalizer.js';
import TranslationSynchronizer from '../../src/helpers/translationSynchronizer.js';
import EventLogger from '../../src/helpers/eventLogger';

let translationManager;
let ajaxTranslationsLoader;
let realtime;
let internationalizer;
let translationSynchronizer;
let options;

describe('A Feature tests', () => {
  it('TranslationManager exsists', () => expect(TranslationManager).is.not.undefined);
  it('Created TranslationManager', () => {
    options = {'locales': ['hi', 'en', 'ja', 'fr'],
      'realtimePort': 6379, /*optional. Default value 6379*/
      'realtimeHost': 'localhost', /*optional. Default value localhost*/
      'restPort': 3000, /*optional. Default value 3000*/
      'restDomain': 'http://127.0.0.1', /*optional. Default value localhost*/
      'storage' : 'window.localStorage',
      'channel': 'realtime_msg', /*optional. Default value realtime_msg*/
      'locale' : 'hi', /*optional. Default value 'en'*/
      'key' : 'date.abbr_day_names' /*optional. Default value "'date.day_names'"*/
    };
    translationManager = new TranslationManager(options);
  });

  it('AjaxTranslationsLoader exsists', () => expect(AjaxTranslationsLoader).is.not.undefined);
  it('AjaxTranslationsLoader default ajax call', () => {
    let mockSuccess = function() {
      EventLogger.log('Success');
    }

    let mockFail = function() {
      EventLogger.log('Fail');
    }
    ajaxTranslationsLoader = new AjaxTranslationsLoader({}, mockSuccess, mockFail);
  });
  it('Realtime exsists', () => expect(Realtime).is.not.undefined);
  it('Realtime Sync ', () => {
    realtime = new Realtime(options);
  });
  it('Internationalizer exsists', () => expect(Internationalizer).is.not.undefined);
  it('Translation using i18next', () => {
    internationalizer = new Internationalizer(options);
  });
  it('TranslationSynchronizer exsists', () => expect(TranslationSynchronizer).is.not.undefined);
  it('TranslationSynchronizer using i18next', () => {
    translationSynchronizer = new TranslationSynchronizer(options);
  });
});
