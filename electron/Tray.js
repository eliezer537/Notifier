const { resolve } = require('path');
const { Tray } = require('electron');

const iconPath = resolve(__dirname, '../', 'assets', 'sand-clock.png');

function createTray() {
	const tray = new Tray(iconPath);
	tray.setToolTip('Breaking Time');

	return tray;
}

module.exports = createTray();
