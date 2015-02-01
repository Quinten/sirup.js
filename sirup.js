var sirup = function (expression) {
  var sirupObject = new sirup();
  if (expression) {
    sirupObject.nodes = document.querySelectorAll(expression);
  } else {
    sirupObject.nodes = null;
  }
  return sirupObject;
};
