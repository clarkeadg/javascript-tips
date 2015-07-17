
// simple variables can be copied and will be new 
var x = 1;

var y = x;

x = 2;

console.log(x,y);

// complex variables can not be copied and be new because they will point to the orginal
var a = { x: 1 };

var b = a;

a.x = 2;

console.log(a,b)

// solve this by using a closure
var a = (function(){
	return { x: 1 };
});

var b = a();
var c = a();

c.x = 2;

console.log(b,c)

// dont use switch case
switch(x) {
	case 1:
	break;
	case 2:
	break;
	default;
	break;
}

// use if with returns.
if (x == 1) {
	return;
}
if (x == 2) {
	return;
}

// for loops
for(var i=0,c=dataArray.length;i<c;i++){
	console.log(dataArray[i])
}

for(var i in dataObject){
	console.log(dataObject[i])
}

$.each(dataArray,function(i,v){
	console.log(v)
})

_.each(dataArray,function(v,i){
	console.log(v)
})

// json array of objects
var fruits = [
	{ id: 'apple', color: 'red' },
	{ id: 'grape', color: 'purple' },
	{ id: 'carrot', color: 'orange' }
];

// trailing commas, don't do it. It breaks things in ie
var fruits = [
	{ id: 'apple', color: 'red' },
	{ id: 'grape', color: 'purple' },
	{ id: 'carrot', color: 'orange' }, // <---- BAD: trailing comma
];

var fruits = [
	{ id: 'apple', color: 'red' },
	{ id: 'grape', color: 'purple' },
	{ id: 'carrot', color: 'orange' } // <---- GOOD: no trailing comma
];

var fruits = [
	'apple',
	'grape',
	'carrot', // <---- BAD: trailing comma
];

var fruits = [
	'apple',
	'grape',
	'carrot' // <----  GOOD: no trailing comma
];

// Arrays can be ordered, Objects can't.  Arrays are lists where an index is numerical and always goes in the same order when used in a for loops
// Objects have indexes that are not ordered numericaly like arrays, they will not always go in the same order when used in a for loops
// Use arrays if you need to keep the order
var dataArray = ['a','b','c'];
for(var i=0,c=dataArray.length;i<c;i++){
	console.log(dataArray[i])
}

// Objects wont iterate in order of 0,1,2, they might not even iterate in order of 1,0,2, different browsers handles this in a different way
var dataObject = {1:'b',0:'a',2:'c'};
for(var i in dataObject){
	console.log(dataObject[i])
}

// How to use for loops with a callback function, promises, and data stored with an index
getPromisedDataList(function(error,data){
	// this will return an error if any of the data callbacks have an error
	// it will only return data if all requests were a success
	console.log(error,data);
});

function getPromisedDataList(cb) {
	var rs = {}, n = 0, error = false;
	for(var i=0,c=10;i<c;i++){
		if (!error) {
			(function(index){
				getData(index,function(data){
					if (data.error || !data.data) {
						error = true;
						// there was an error getting data, broken promise;
						return cb({ error: data.error, errorMessage: 'error getting data for: '+index });						
					}
					rs[index] = data.data;
					n++;
					if (n == c) {
						return cb(false,rs);
					}
				});
			})(i);
		}
	}
}

function getData(i,cb){
	//console.log('getting data',i)
	// simulate request time
	var requestTime = Math.random() * 200;
	// put ajax call here, i am sumulated it with a setTimeout
	setTimeout(function(){
		var error = false;
		// simulate error
		//var error = Math.random() > 0.5 ? true : false;
		if (error) {
			//console.log('error getting data',i);
			return cb({ error: error});
		}
		var data = {x:i};
		//console.log('got data',data)
		return cb({ data: data });
	},requestTime);
}

