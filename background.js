
function runCopyScript() {
	// if extension icon is clicked => inject copy script
	chrome.browserAction.onClicked.addListener((tab) => {
		chrome.tabs.executeScript(tab.id, { file: 'copy.js' });
	});
}

runCopyScript();