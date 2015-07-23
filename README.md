### Prerequisites
- Node 0.12.7
- Redis DB
- Rails 4.0 or grater

To install Node 0.12.7 :
	- Download Node 0.12.7
	- cd node-v0.12.0
    - ./configure 
    - sudo make install 
    - make

To install Redis :
	- http://redis.io/topics/quickstart

To install Rails :
	- https://github.com/aspiresoftware/translation-manager-client-app

### Getting Started

Now we have three components, that you need to configure:
	- Translation-manager-app(Rails Server)
	- Translation-manager-client-app(rails client, realtime client)
	- RealTime Server

### Translation-manager-app

Just, clone it from github:
	- git clone https://github.com/smigit/translation-manager-app

Then start Rails server:
	- cd translation-manager-app
	- rails server

Also start Rails console as well on second terminal which will be used later:
	- cd translation-manager-app
	- rails c


### RealTime Server

Configuration for Realtime server:

Now open third terminal and follow the steps,
	- gem install foreman
	- git clone git://github.com/mikeatlas/realtime-server.git
	- cd realtime-server
	- sudo npm install
	- foreman start

### Translation-manager-client-app

Installation and configuration for Translation-manager-client-app:

Now open forth terminal and follow the steps,
	- git clone https://github.com/aspiresoftware/translation-manager-client-app
	- cd translation-manager-client-app
	- sudo npm install
	- gulp test-browser

Now Load this client-app on any web-server:

	# Using SimpleHTTPServer (we are using python SimpleHTTPServer) 
	- Open fifth terminal at location of translation-manager-client-app and run following command.
	- python -m SimpleHTTPServer 8000


Now Open browser with:
	- http://localhost:8000/test/runner.html


Here, you will see the all test cases that have been passed.

Your Locale Storage of browser would also be filled with the translations.

### Getting Started synchronization,

To sync translation, open rails console(second terminal) and publish the message,
	- $redis.publish 'realtime_msg', {en: {"date": {"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}}, recipient_user_ids: [41, 42]}.to_json

This will update your local storage translation with key 'en'

And, for next translation it will use this updated value. Cheers!!
