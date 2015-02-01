var sirup = function (expression) {
  var sirupObject = window.sirup;
  if (expression) {
    sirupObject.nodes = document.querySelectorAll(expression);
  } else {
    sirupObject.nodes = null;
  }
  sirupObject.ready = function (func) {
    if(document.readyState === 'complete'){
      func();
    } else {
      var oldonload = window.onload;
      if (typeof window.onload != 'function') {
        window.onload = func;
      } else {
        window.onload = function() {
          if (oldonload) {
            oldonload();
          }
          func();
        }
      }
    }
  };
  return sirupObject;
};
