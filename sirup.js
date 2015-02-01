var sirup = function (expression) {
  this.get = function () {
    if (expression != undefined) {
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

  //var class_list = !!document.body.classList;
  //var s = '(\\s|^)'; // space or start
  //var e = '(\\s|$)'; // space or end

  function getRegex(className){
    return new RegExp(s + className + e, 'g');
  }
  
  this.addClass = function() {
    
    return this;
  };

  this.removeClass = function() {
    
    return this;
  };
  
  this.hasClass = function (className) {
    if(!!document.body.classList){
        return this.get[0].classList.contains(className);
    }else{
        return this.get[0].className.match(new RegExp('(\\s|^)' + className + '(\\s|^)', 'g'));
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
