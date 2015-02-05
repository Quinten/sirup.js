var sirup = function (expr) {

this.nodes = null;

this.get = function () {
  var n = [];
  if (this.nodes !== null) {
    n = this.nodes;
  } else if (typeof expr === 'string') {
    n = document.querySelectorAll(expr);
  } else if (expr instanceof Node){
    n = [expr];
  }
  return this.nodes = n;
};

this.each = function (func) {
  var n = this.get();
  for (var i = 0; i < n.length; i++) {
    n[i].tempf = func;
    n[i].tempf(i);
    delete n[i].tempf;
  }
  return this;
};

this.ready = function (func) {
  if(document.readyState === 'complete'){
    func();
  } else {
    var oldf = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = func;
    } else {
      window.onload = function() {
        if (oldf) {
          oldf();
        }
        func();
      }
    }
  }
  return this;
};

this.getRE = function (str) {
  return new RegExp('(\\s|^)' + str + '(\\s|^)', 'g');
}

this.addClass = function(str) {
  var n = this.get();
  if(!!document.body.classList){
    for (var i = 0; i < n.length; i++) {
      n[i].classList.add(str);
    }
  } else {
    for (var i = 0; i < n.length; i++) {
      if (!n[i].className.match(this.getRE(str))) {
        n[i].className += ' ' + str;
      }
    }
  }
  return this;
};

this.removeClass = function(str) {
  var n = this.get();
  if(!!document.body.classList){
    for (var i = 0; i < n.length; i++) {
      n[i].classList.remove(str);
    }
  } else {
    for (var i = 0; i < n.length; i++) {
      n[i].className = n[i].className.replace(this.getRE(str), '');
    }
  }
  return this;
};

this.hasClass = function (str) {
  if(!!document.body.classList){
      return this.get()[0].classList.contains(str);
  }else{
      return this.get()[0].className.match(this.getRE(str));
  }
};

this.toggleClass = function (str) {
  var n = this.get();
  if(!!document.body.classList){
    for (var i = 0; i < n.length; i++) {
      if (!n[i].classList.contains(str)) {
        n[i].classList.add(str);
      } else {
        n[i].classList.remove(str);
      }
    }
  } else {
    for (var i = 0; i < n.length; i++) {
      if (!n[i].className.match(this.getRE(str))) {
        n[i].className += ' ' + className;
      } else {
        n[i].className = n[i].className.replace(this.getRE(str), '');
      }
    }
  }
  return this;
};

this.click = function (func) {
  var n = this.get();
  for (var i = 0; i < n.length; i++) {
    n[i].addEventListener('click', func);
  }
  return this;
};

if (this instanceof sirup) {
  return this;
} else {
  return new sirup(expr);
}

};
