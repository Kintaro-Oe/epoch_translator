data = [{vpcId: "vpc-0344e927c56868e6b", tooltip: "It works!\nOr does it?"}]

document.body.style.border = "5px solid blue";

setInterval(
  () => {
    if (document.hasFocus()) {
      addTooltip(search(data[0].vpcId), data[0].tooltip)
    }
  }, 200
);

function search(vpcId){
  var aTags = document.getElementsByTagName("a");
  var searchText = vpcId;
  var foundList = [];

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent.includes(searchText)) {
      foundList.push(aTags[i]);
    }
  }

  return foundList;
}

function addTooltip(foundList, tooltip) {
  foundList.forEach(aTag => aTag.title = tooltip);
}
