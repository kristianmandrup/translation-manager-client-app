import EventLogger from './eventLogger';
import TranslationSynchronizer from './translationSynchronizer';

/**
 * @class
 * An awesome script
 */
class EventBus { 
	constructor(options) { 
		this.eventLogger = new EventLogger(options);
		this.translationSynchronizer = new TranslationSynchronizer(options);

		this.init();
	}

	init() { 
		//TranslationManager.eventBus.on('realtimeMessage', this.eventLogger.log); 
		//TranslationManager.eventBus.on('realtimeMessage', this.translationSynchronizer.sync); 
	} 
}

export default EventBus;