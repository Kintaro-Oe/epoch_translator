document.body.style.border = "5px solid blue";

// window.onload = function() {
//   search("vpc-0344e927c56868e6b");
// }


setInterval(
  () => {
    if (document.hasFocus()) {
      search("vpc-0344e927c56868e6b")
    }
  }, 200
);

function search(vpcId){
  var aTags = document.getElementsByTagName("a");
  var searchText = vpcId;
  var found = [];

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent.includes(searchText)) {
      found.push(aTags[i]);
    }
  }

  return found.map(aTag => aTag.title = "It works!\nOr does it?");
}
