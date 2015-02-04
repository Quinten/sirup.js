# sirup.js

sirup.js is a small library that makes it easy to work with classes in javascript. It is intended to provide some simple building blocks to build simple css transition slideshows. Naming of functions is based on jQuery.

## the set of features are

**get** : get the set or nodeList of matched elements

```javascript
sirup('.myClass').get()[0]; // first element with the class '.myClass' in the dom
```
Note: You can pass an element or a css selector to the sirup function.

**each** : loop over elements

```javascript
sirup('ul.list li').each(function (index) {
  console.log(index); // 0,1,2,3,...
  console.log(this); // element
  sirup(this).addClass('item');
});
```

**ready** : check if the dom is ready

```javascript
sirup().ready(function(){
  console.log('We can access the dom.');
});
```

**addClass** : add a css class

```javascript
sirup('.peanut').addClass('butter');
```

**removeClass** : remove a class

```javascript
sirup('div').removeClass('peanut');
```

**hasClass** : checks to see if the first element has a class

```javascript
sirup('.peanut').hasClass('peanut'); // returns true
```

**toggleClass** : toggles a class

```javascript
sirup('.peanut').toggleClass('butter');
```

**click** : bind a simple click

```javascript
sirup('.peanut').click(function (e) {
  console.log(e); // event object
  console.log(this); // element that fired the event
});
```

All sirup functions can be chained, except for get and hasClass.
```javascript
sirup('.peanut').addClass('butter').removeClass('peanut');
```

### Inspiration

sirup.js is a small library that only implements those features of jQuery you need to build simple css transition slideshows.

The idea for this mini framework is inspired by the article [Getting over jQuery](http://ponyfoo.com/articles/getting-over-jquery) by [Nicolas Bevacqua](https://github.com/bevacqua)

In production environments it is off course adviced to use the real jQuery.
