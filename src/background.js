// Set up context menu at install time
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: 'testing',
    title: 'epoch translator',
    contexts: ['selection'],
  })
});

// add click events
chrome.contextMenus.onClicked.addListener(epochTranslator)

// The onClicked callback function
function epochTranslator(objectInfo, tab) {
  epochTimestamp = objectInfo.selectionText

  if (isNaN(epochTimestamp)) {
    // console.log('please select a numerical value')
    message = 'please select a numerical value'
  } else {
    javascriptTs = epochTimestamp*1000
    // console.log(new Date(javascriptTs))
    message = (new Date(javascriptTs)).toUTCString()
  }

  chrome.tabs.sendMessage(tab.id, message) // send message to content script
};
