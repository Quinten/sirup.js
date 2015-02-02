# sirup.js

sirup.js is a small library that only implements those features of jQuery you need to build simple css transition slideshows.

The idea is inspired by the article [Getting over jQuery](http://ponyfoo.com/articles/getting-over-jquery) by [Nicolas Bevacqua](https://github.com/bevacqua)

## the set of features are

get : get the set or nodeList of matched elements

```javascript
sirup('.myClass').get()[0]; // first element with the class '.myClass' in the dom
```

each : loop over elements

```javascript
sirup('ul.list li').each(function (index) {
  console.log(index); // 0,1,2,3,...
  console.log(this); // element
  sirup(this).addClass('item');
});
```

ready : check if the dom is ready

```javascript
sirup().ready(function(){
  console.log('We can access the dom.');
});
```

addClass : add a css class

```javascript
sirup('.peanut').addClass('butter');
```

removeClass : remove a class

```javascript
sirup('div').removeClass('peanut');
```

hasClass : checks to see if the first element has a class

```javascript
sirup('.peanut').hasClass('peanut'); // returns true
```

toggleClass : toggles a class

click : bind a simple click

You can pass an element or a css selector to the sirup function.

Most sirup functions can be chained.
