var sirup = function (expression) {
  this.get = function () {
    if (typeof expression === 'string') {
      return document.querySelectorAll(expression);
    } else {
      return this;
    }
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
  
  this.addClass = function(className) {
    var nodes = this.get();
    if(!!document.body.classList){
      for (var n = 0; n < nodes.length; n++) {
        nodes[n].classList.add(className);
      }
    } else {
      for (var n = 0; n < nodes.length; n++) {
        if (!nodes[n].className.match(new RegExp('(\\s|^)' + className + '(\\s|^)', 'g'))) {
          nodes[n].className += ' ' + className;
        }
      }
    }    
    return this;
  };
  
  this.removeClass = function(className) {
    var nodes = this.get();
    if(!!document.body.classList){
      for (var n = 0; n < nodes.length; n++) {
        nodes[n].classList.remove(className);
      }
    } else {
      for (var n = 0; n < nodes.length; n++) {
        nodes[n].className = nodes[n].className.replace(new RegExp('(\\s|^)' + className + '(\\s|^)', 'g'), '');
      }
    }    
    return this;
  };
  
  this.hasClass = function (className) {
    if(!!document.body.classList){
        return this.get()[0].classList.contains(className);
    }else{
        return this.get()[0].className.match(new RegExp('(\\s|^)' + className + '(\\s|^)', 'g'));
    }
  };
  
  this.toggleClass = function () {
    return this;
  };

  if (this instanceof sirup) {
    return this.sirup;
  } else {
    return new sirup(expression);
  }
};
