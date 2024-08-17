Item {
	id: main;
	property int currentIndex;
	property int count;
	anchors.fill: context;

	VideoPlayer {
		id: player;
		width: 200;
		height: 150;
		clip: true;
		backend: "videojs";
		autoPlay: true;
		volume: 0;

		onError: { checkTimer.processNext() }

		onReadyChanged: {
			if (value) {
				var parent = this.parent
				var row = parent._data[parent.currentIndex - 1]
				parent._workingPlaylists.push(row)

				playlistResult.text += "#EXTINF:-1," + row.title + "\n"
				playlistResult.text += row.playlist + "\n"
			}
		}
	}

	TextAreaInput {
		id: playlistInput;
		x: 230;
		width: 300;
		height: 600;
		border.width: 1;
		border.color: "#000";
	}

	TextAreaInput {
		id: playlistResult;
		width: 300;
		height: 600;
		anchors.left: playlistInput.right;
		anchors.leftMargin: 20s;
		border.width: 1;
		border.color: "#000";
	}

	WebItem {
		y: 160;
		width: 200;
		height: 50;
		color: "#ccc";

		Rectangle {
			width: main.count ? Math.round(main.currentIndex * 1.0 / main.count * parent.width) : 0;
			height: 100%;
			color: "#999";
		}

		Text {
			y: 5;
			width: 100%;
			text: main.count ? Math.round(main.currentIndex * 1.0 / main.count * 100) : "Check";
			horizontalAlignment: Text.AlignHCenter;
			font.pixelSize: 24;
			color: "#000";
		}

		onClicked: {
			this.parent.processData()
		}
	}

	WebItem {
		y: 220;
		width: 200;
		height: 50;
		color: "#ccc";

		Text {
			y: 5;
			width: 100%;
			text: "Stop";
			horizontalAlignment: Text.AlignHCenter;
			font.pixelSize: 24;
			color: "#000";
		}

		onClicked: {
			main.count = 0
			checkTimer.stop()
		}
	}

	Timer {
		id: checkTimer;
		interval: 5000;

		processNext: {
			var parent = this.parent
			if (parent._data && parent.currentIndex < parent._data.length) {
				log("Check link", parent._data[parent.currentIndex])
				player.ready = false
				player.source = parent._data[parent.currentIndex].playlist
				++parent.currentIndex
			} else {
				log("Finish...")
				player.source = ""
				player.stop()
			}
			this.restart()
		}

		onTriggered: { this.processNext() }
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
		this._workingPlaylists = []
		this.currentIndex = 0
		this.count = this._data.length
		checkTimer.restart()
	}
}
