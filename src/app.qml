Item {
	id: main;
	property int currentIndex;
	property int count;
	anchors.fill: context;

	TextAreaInput {
		id: playlistInput;
		x: 230;
		width: 300;
		height: 600;
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
			text: "Get";
			horizontalAlignment: Text.AlignHCenter;
			font.pixelSize: 24;
			color: "#000";
		}

		onClicked: {
			log("WORKS", this.parent._workingPlaylists)
			checkTimer.stop()
			var text = ""
			var playlist = this.parent._workingPlaylists
			for (var i = 0; i < playlist.length; ++i) {
				text += "#EXTINF:-1," + playlist[i].title + "\n"
				text += playlist[i].playlist + "\n"
			}
			playlistInput.text = text
		}
	}

	VideoPlayer {
		id: player;
		width: 200;
		height: 150;
		autoPlay: true;

		onReadyChanged: {
			if (value) {
				var parent = this.parent
				parent._workingPlaylists.push(parent._data[parent.currentIndex - 1])
			}
		}
	}

	Timer {
		id: checkTimer;
		interval: 5000;

		onTriggered: {
			var parent = this.parent
			if (parent._data && parent.currentIndex < parent._data.length) {
				log("Check link", parent._data[parent.currentIndex])
				player.ready = false
				player.source = parent._data[parent.currentIndex].playlist
				++parent.currentIndex
			}
			this.restart()
		}
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
