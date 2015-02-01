var sirup = function (expression) {
  var nodes = null;
  if (expression != undefined) {
    nodes = document.querySelectorAll(expression);
  }
  this.get = function () {
    return nodes;
  };
  this.ready = function (func) {
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
    return this;
  };
  
  this.add = function() {
    alert('add');
    return this;
  }

  this.del = function() {
    alert('delete');
    return this;
  }

  if (this instanceof sirup) {
    return this.sirup;
  } else {
    return new sirup();
  }
};
