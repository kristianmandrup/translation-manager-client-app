/*eslint-disable */
import TranslationManager from '../../src/index.js';
var expect = chai.expect;
describe('A Feature tests', () => {
  it('TranslationManager exsists', () => expect(TranslationManager).is.not.undefined);
  it('Created TranslationManager', () => {
    var options = {'locales': ['hi', 'en'],
      'realtimePort': 6379, /*optional. Default value 6379*/
      'realtimeHost': 'localhost', /*optional. Default value localhost*/
      'railsPort': 3000, /*optional. Default value 3000*/
      'railsHost': 'localhost', /*optional. Default value localhost*/
      'channel': 'realtime_msg' /*optional. Default value realtime_msg*/
    };
    var translationManager = new TranslationManager(options);
  });

});
