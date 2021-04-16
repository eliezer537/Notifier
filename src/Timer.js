import { View } from './View.js';
import { Emitter } from './Emitter.js';

const Timer = {
	time: 60 * 60,
	currentTime: 0,
	interval: null,

	timeToMinutes: time => Math.floor(time / 60),
	timeToSeconds: time => time % 60,
	formatTime: time => String(time).padStart(2, '0'),

	init(time) {
		Timer.time = time || Timer.time;
		Timer.currentTime = Timer.time;
		Timer.interval = setInterval(Timer.countDown, 1000);
	},

	countDown() {
		Timer.currentTime -= 1;

		const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime));
		const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime));

		View.render({
			minutes,
			seconds,
		});

		if (Timer.currentTime === 0) {
			clearInterval(Timer.interval);
			Emitter.emit('countdown-start');
			Emitter.emit('countdown-end');
			return;
		}
	},
};

export { Timer };
