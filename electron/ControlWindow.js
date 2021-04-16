const { screen } = require('electron');

function ControlWindow(win, tray) {
	function toggle() {
		if (win.isVisible()) {
			win.hide();
		} else {
			show();
		}
	}

	function show() {
		const { x, y } = getPosition();
		win.setPosition(x, y, false);
		win.show();
		win.focus();
	}

	function getPosition() {
		const winBounds = win.getBounds();
		const trayBounds = tray.getBounds();

		if (process.platform === 'linux') {
			const { x: pointX, y } = screen.getCursorScreenPoint();
			const x = Math.round(pointX - winBounds.width / 2);

			return { x, y };
		}

		const x = Math.round(trayBounds.x + trayBounds.width / 2 - winBounds.width / 2);
		const y = Math.round(trayBounds.y - trayBounds.height - winBounds.height);

		return { x, y };
	}

	return {
		toggle,
	};
}

module.exports = ControlWindow;
