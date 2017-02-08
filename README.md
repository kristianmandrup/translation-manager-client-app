# Translation Manager client

The entire Translation Manager consists of:
- Translation-manager-app (Rails Server)
- Translation-manager-client-app (Rails client, realtime client)
- RealTime Server


- [translator - localeapp connector](https://github.com/kristianmandrup/translator)
- [translator_manager - Rails engine](https://github.com/kristianmandrup/translator_manager)
- [translator-app](https://github.com/kristianmandrup/sample-translator-app)

## Prerequisites
- Node 5+

### Getting Started

Clone the project locally and play with it.

`git clone https://github.com/smigit/translation-manager-app`

## TODO

Extract this client app into an npm module `translator-manager-client` for easy reuse.

We should make it easy to mock the server so the entire Rails server setup is unneccesary in order to test and play with it.

## Usage

### TranslationManager

```js
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
```

### Internationalizer

Connects i18next library to localstorage with translations.

```js
internationalizer = new Internationalizer(options);
internationalizer.init(locale)

// translate
internationalizer.translate(locale, key)
internationalizer.translate(key)

// all translations
internationalizer.allTranslations(locale)
```

### AjaxTranslationsLoader

Reads all translations via Ajax GET request from server `translations` endpoint

```
const ajaxTranslationsLoader = new AjaxTranslationsLoader(options)
```

### TranslationLoader

```js
const  translationLoader = new TranslationLoader(options)
translationLoader.load(locale, sucessCallback, failCallback)
```

### RealTime

Connects to RedisDB socket with translation updates. On each new message, `translationSynchronizer` is used to save the entry in local storage.

```js
const realtime = new Realtime(options);
```

### TranslationSynchronizer

Saves message in LocalStorage

```js
let translationSynchronizer = new TranslationSynchronizer(options)
translationSynchronizer.save(message)
```


## Use with Rails app server

Start Rails server:

```
rails server
```

Start Rails console as well on second terminal which will be used later:

```
rails c
```

### RealTime Server

Configuration for Realtime server:

Open new terminal (process)

```
gem install foreman
git clone git://github.com/mikeatlas/realtime-server.git
cd realtime-server
npm install
foreman start
```

### Translation-manager-client-app

Installation and configuration for Translation-manager-client-app:

Open new terminal (process)

```
git clone https://github.com/aspiresoftware/translation-manager-client-app
cd translation-manager-client-app
npm install
gulp test-browser
```

Load this client app on any web-server:

# Using SimpleHTTPServer (we are using python SimpleHTTPServer) 
Open fifth terminal at location of translation-manager-client-app and run

`python -m SimpleHTTPServer 8000`

Open browser with: `http://localhost:8000/test/runner.html`

Here, you will see the all test cases that have been passed.

Your Locale Storage should then be filled with the translations from the server

### Getting Started synchronization,

To sync translation, open rails console(second terminal) and publish the message,

```
$ redis.publish 'realtime_msg', {en: {"date": {"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}}, recipient_user_ids: [41, 42]}.to_json
```

This will update your local storage translation with key `en`

And, for next translation it will use this updated value. Cheers!!
