# Javascript Tips

## simple variables can be copied and will be new 
```
var x = 1;

var y = x;

x = 2;

console.log(x,y);
```

Results:
x = 2, y = 1

## complex variables can not be copied and will be new, they will point to the orginal
```
var a = { x: 1 };

var b = a;

a.x = 2;

console.log(a,b);
```

Results:
a = { x: 2 }, b = { x: 2 }

## solve this by using a closure
```
var a = (function(){
	return { x: 1 };
});

b = a();
c = a();

b.x = 2;

console.log(b,c);
```

Results:
b = { x: 2 }, c = { x: 1 }


