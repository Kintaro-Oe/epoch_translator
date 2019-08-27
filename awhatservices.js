browser = chrome;

url = browser.runtime.getURL("vpcData.json");

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(addTooltipsIfFocused);

document.body.style.border = "5px solid green";

function addTooltipsIfFocused(data) {
  setInterval(() => {
    if (document.hasFocus()) {
      data.forEach(({ vpcId, tooltip }) => addTooltip(search(vpcId), tooltip));
    }
  }, 200);
}

function search(vpcId) {
  var aTags = Array.from(document.getElementsByTagName("a"));
  var searchText = vpcId;
  var foundList = [];

  aTags.forEach(aTag => {
    if (aTag.textContent.includes(searchText)) {
      foundList.push(aTag);
    }
  });
  return foundList;
}

function addTooltip(foundList, tooltip) {
  foundList.forEach(aTag => (aTag.title = tooltip));
}
