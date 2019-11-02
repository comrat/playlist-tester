Item {
	anchors.fill: context;

	TextAreaInput {
		id: playlistInput;
		x: 30;
		y: 30;
		width: 200;
		height: 200;
		border.width: 1;
		border.color: "#000";
	}

	WebItem {
		x: 240;
		y: 30;
		width: 100;
		height: 30;
		color: "#ccc";

		Text {
			y: 5;
			width: 100%;
			text: "Check";
			horizontalAlignment: Text.AlignHCenter;
			font.pixelSize: 15;
			color: "#000";
		}

		onClicked: {
			this.parent.processData()
		}
	}

	VideoPlayer {
		y: 80;
		x: 240;
		width: 200;
		height: 150;
	}

	processData: {
		var lines = playlistInput.text.split('\n');
		this._data = []
		for (var i = 0; i < lines.length - 1; ++i) {
			var line = lines[i]
			var nextLine = lines[i + 1]
			if (line.indexOf('#EXTINF') == 0 && nextLine.indexOf('http') == 0) {
				var comaPos = line.indexOf(',')
				if (comaPos < 0)
					continue
				var title = line.substring(comaPos + 1, line.length)
				if (title.indexOf('==') < 0)
					this._data.push({'title': title, 'playlist': nextLine})
			} else if (line.indexOf('#EXTINF') == 0 && (i < lines.length - 2 && lines[i + 2].indexOf('http') == 0)) {
				var comaPos = line.indexOf(',')
				if (comaPos < 0)
					continue
				var title = line.substring(comaPos + 1, line.length)
				if (title.indexOf('==') < 0)
					this._data.push({'title': title, 'playlist': lines[i + 2]})
			}
		}
	}
}
