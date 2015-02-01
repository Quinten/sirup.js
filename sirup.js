var sirup = function (expression) {
  var sirupObject = window.sirup;
  if (expression) {
    sirupObject.nodes = document.querySelectorAll(expression);
  } else {
    sirupObject.nodes = null;
  }
  return sirupObject;
};
