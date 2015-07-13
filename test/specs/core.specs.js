
/* global TranslationManager */
describe('Core', function() {
  'use strict';

  beforeEach(function () {
  	function storageMock() {
	    var storage = {};

	    return {
	      setItem: function(key, value) {
	        storage[key] = value || '';
	      },
	      getItem: function(key) {
	        return storage[key];
	      },
	      removeItem: function(key) {
	        delete storage[key];
	      },
	      get length() {
	        return Object.keys(storage).length;
	      },
	      key: function(i) {
	        var keys = Object.keys(storage);
	        return keys[i] || null;
	      }
	    };
	  }

	  window.localStorage = storageMock();
		// mock the sessionStorage
		window.sessionStorage = storageMock();
  });
  
  it('TranslationManager exsists', () => expect(TranslationManager).is.not.undefined);

  it('Created TranslationManager', () => {
    let translationManager = new TranslationManager({"locales": ["hi"]});
  });

  it('Verify LocalStore', () => {
    console.log(localStorage.getItem('hi'));
  });


});

