var sirup = function (expression) {
  this = window.sirup;
  this.nodes = document.querySelectorAll(expression);
  return this;
};
