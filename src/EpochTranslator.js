browser = chrome;

function epochTranslator(inputValue) {
  if (isNaN(inputValue)) {
    return 'please select a numerical value'
  } else {
    return new Date(inputValue)
  }
};

// browser.contextMenus.create({
//   title: 'epoch translator',
//   context: ['selection'],
//   onclick: epoch_translator
// });