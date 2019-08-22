data = [
  {vpcId: "vpc-0344e927c56868e6b", tooltip: "It works!\nOr does it?"},
  {vpcId: "vpc-90e6e5f6", tooltip: "Wooo! The other one."}
]

document.body.style.border = "5px solid green";

setInterval(
  () => {
    if (document.hasFocus()) {
      data.forEach(({vpcId, tooltip}) => addTooltip(search(vpcId), tooltip))
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
