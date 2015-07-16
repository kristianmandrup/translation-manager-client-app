/*eslint-disable */
import TranslationManager from '../../src/index.js';

describe('A Feature tests', () => {
  it('TranslationManager exsists', () => expect(TranslationManager).is.not.undefined);
  it('Created TranslationManager', () => {
    var options = {'locales': ['en'],
      'realtimePort': 6379, /*optional. Default value 6379*/
      'realtimeHost': '127.0.0.1', /*optional. Default value 127.0.0.1*/
      'railsPort': 3000, /*optional. Default value 3000*/
      'railsHost': '127.0.0.1', /*optional. Default value 127.0.0.1*/
      'channel': 'realtime_msg' /*optional. Default value realtime_msg*/
    };
    var translationManager = new TranslationManager(options);
  });

});
