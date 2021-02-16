
exports.min = function min (array) {

if (array instanceof Array && array.length !=0) {return Math.min(...array)}
else {return 0}


}

exports.max = function max (array) {
if (array instanceof Array && array.length !=0) {return Math.max(...array)}
else {return 0}
}

exports.avg = function avg (array) {
if (array instanceof Array && array.length !=0) 
{ return avg =(array.reduce((sum, x) => sum + x) / array.length)}
else {return 0}


}

