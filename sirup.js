var sirup = function (expression) {
  var sirupObject = window.sirup;
  sirupObject.nodes = document.querySelectorAll(expression);
  return sirupObject;
};
