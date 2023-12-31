// share page
function submitForm() {
  // Get values from the form
  var fromName = document.getElementById("ownName").value;
  var toName = document.getElementById("sendName").value;

  // Construct the URL with parameters
  var url =
    "index.html?from=" +
    encodeURIComponent(fromName) +
    "&to=" +
    encodeURIComponent(toName);

  // Redirect to the URL
  window.location.href = url;
}

// gretting page
function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var fromParameter = getParameterByName("to");
var toParameter = getParameterByName("from");

document.addEventListener("DOMContentLoaded", function () {
  let nameFrom = document.querySelector(".from");
  let nameTo = document.querySelector(".to");

  if (nameFrom) {
    nameFrom.innerText = fromParameter;
  }

  if (nameTo) {
    nameTo.innerText = toParameter;
  }
});
