Item {
	anchors.fill: context;

	Resource {
		id: playlistLoader;

		onDataChanged: {
			log("GOT DATA", value)
		}
	}

	TextInput {
		id: playlistInput;
		x: 30;
		y: 30;
		width: 200;
		border.width: 1;
		border.color: "#000";
	}

	WebItem {
		x: 240;
		y: 30;
		width: 100;
		height: 30;
		color: "#ccc";

		onClicked: {
			playlistLoader.url = playlistInput.text
		}
	}

	VideoPlayer {
		y: 80;
		x: 30;
		width: 200;
		height: 150;
	}
}
