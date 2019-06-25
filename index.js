'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: designed to return a value unchanged. 
 * 
 * @param {value} value: any value to be returned unchanged.  
 * 
 * @return {value} value: value unchanged. 
 */

function identity(value) {
    return value; 
}

module.exports.identity = identity;

/*
* typeOf: designed to test a value & return its datatype as a string. 
* 
* @param {value} value: any value to be tested. 
* 
* @return {String} string: type of given value.
*/
function typeOf(value){
        if(Array.isArray(value)){
        return 'array';
        } else if (value === null){
            return 'null';
    } return typeof value;
}
module.exports.typeOf = typeOf;


/*
* first : If an array is not an array - return an array. If number is not given or 
* isn't a number, return the first element of the array. Else, return the number
* of items in the array starting from the beginning of array.  
*   
*  
* 
* @param {Array} array : An Array to be iterated over
* @param {Number} number : A number to be representing all the elements in an array. 
* 
* @return {array/element/number} : return array literal || first element of the array || number of items in array. 
 */
 

 function first(array, number){
    if(!Array.isArray(array) || number < 0){
        return []; 
    } else if (typeof number !== 'number') {
        return array[0];
        }
        return array.slice(0, number);
    }
 
  module.exports.first = first;
 
/*
* last : If an array is not an array - return an array. If number is not given or 
* isn't a number, return the last element of the array. Else, return the number
* of items in the array start from the end of the array.  
*   
*  
* 
* @param {Array} array : An Array to be iterated over.
* @param {Number} number : A number to be representing all the elements in an array. 
*
* @return {array/element/number} : return array literal || last element of the array || number of items in array
 */
 
function last(array, number){
    if(!Array.isArray(array) || number < 0){
        return []; 
    } else if (typeof number !== 'number') {
        return array[array.length - 1];
        }
        return array.slice(-number);
    }
    
     module.exports.last = last;
/*
* indexOf : Iterate over an array, if value is found return index position of value.
* If an array is not an array - return an array. If number is not given or 
* isn't a number, return the  element of the array. Else, return the number
* of items in the array.  
*   
* @param {Array} array : An Array to be iterated over.
* @param {Number} value : A number to be representing all the elements in an array. 
*
* @return {Number}: number || an empty array || the element of an array || number of items in array.
 */
 
function indexOf(array, value) {
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            return i; 
        
        }
    }
    return -1; 
}
 module.exports.indexOf = indexOf;

/*
* contains : Designed to search an Array for a value. If the Array contains
* the value - return true. Else return False. 
* @param {Array} array : An Array to search. 
* @param {Value} value : A values to be searched for. 
*
* @return {Boolean}: true || false. 
*/
 
function contains(array, value){
    let result = false;
    for( var i = 0; i < array.length; i++){
            result = value === array[i] ? true : result;
        }
        return result;
}
 module.exports.contains = contains;

/*
* each : Designed to call a function for each property in a collection.
* @param {Collection} collection : Either an Array or an Object to loop over and call a 
* function on. 
* @param {Function} funcy : A function to call on each element of a collection.  
*
* @return {n/a}: no return. 
*/


function each(collection, funcy){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
        funcy(collection[i], i, collection);
    } 
    } else {
        for (var key in collection){
            funcy(collection[key], key, collection);
        }
    }
    
}
 module.exports.each = each;
/*
* unique : Designed to return a new array with all the duplicated elements of the
* original array removed.
* @param {Array} array : Original array that contains duplicates. 
*
* @return {Array}: new array with unique values. 
*/
function unique(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++){
         if( newArr.includes(array[i])){
            } else {
                newArr.push(array[i]);
            }
    } return newArr;
}
 module.exports.unique = unique;

/*
* filter : Designed to filter an array for values passing the function TRUE.
* 
* @param {Array} array : An array full of values to be tested. 
* @param {func} Function: A function to test values. 
*
* @return {Array} : array of values that pass a function test. 
*/

function filter(array,func){
    let newArr = [];
    if (Array.isArray(array)){
        for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array) === true){ 
        newArr.push(array[i]);
        }
        }
        return newArr;
    }
}
 module.exports.filter = filter;

/*
* reject : Return an a new array with the values that failed a given function test. The inverse of .filter.  
* @param {Array} array : A array with values to be tested.
* @param {Function} func : A function to test those values. 
*
* @return {Array}: new array with values that fail a function test. 
*/

function reject(array,func){
    let newArr = [];
    if (Array.isArray(array)){
        for (let i = 0; i < array.length; i++){
        if (!func(array[i], i, array) === true){ 
        newArr.push(array[i]);
        }
        }
        return newArr;
    }
}
 module.exports.reject = reject;
/*
* partition : Given the values of an array - filter the values into two sub arrays.
* One where the values passed the function test. The other where they failed. 
* @param {Array} array : An array full of values.
* @param {Function} func : A function to test values. 
*
* @return {Array} : an array containing two arrays. 
*/
 
function partition(array, func){
    let myArr = [[], []];
     
     each(array, function(element, index, array){
        if (func(element, index, array)){
                myArr[0].push(element);
        } else {        
            myArr[1].push(element);
        }
     });
     return myArr;
}
 module.exports.partition = partition;

/*
* map : Designed to test a collections values & save the return value to a new
* array. Return that new array.
* @param {Collection} collection : A collection of values to be tested. 
* @param {Function} action : A function to test a collections values. 
*
* @retrun {array}: array with values modified by action. 
*/
 
function map(collection, action){
    let myArr = [];
     if (Array.isArray(collection)){
     for (let i = 0; i < collection.length; i++){
        myArr.push(action(collection[i], i, collection));
     }
        } else {
        for (var key in collection){
            myArr.push(action(collection[key], key, collection));
        }
     }
      return myArr;
}
 module.exports.map = map;
/*
 * pluck: Designed to use .map to return an array containing the value of prop
 * for every element in the array. 
 * @param {Array} array : Array with values to be returned.
 * @param {prop} : A property to be searched in Array. 
 *
 * @return {value}: value of prop. 
 */

function pluck(array, prop){
return map(array, function(element, index, collection){
    return element[prop];
});
}
 module.exports.pluck = pluck;
/*
* every: Call a function for every element of a collection. if EVERY elements pass return TRUE. If even one fails
* return FALSE. If function is not provided return true if every element is truthy, otherwise return false
* 
* @param {Collection} collection: A collection of values to be tested. 
* @param {Function} func : A function to test the values. 
*
* @return {boolean} : true || false.
*/
function every(collection, func) {
    let bool = true;
    each(collection, function(element, index, collection) {
        if (typeof func === 'function' && !func(element, index, collection)) {
          bool = false;
        }
        else if (typeof func !== 'function' && !element) {
            bool = false;
        }
    });
    
    return bool;
} 
module.exports.pluck = pluck; 
/*
* some: Call a function for every element of a collection. if EVEN ONE element passes return TRUE. If EVERY element
* fails return FALSE. If function is not provided return true if every element is truthy, otherwise return false
* @param {Collection} collection : a collection of values to be tested.
* @param {Function} func : a function used to test values. 
*
* @return {boolean}: true || false.
*/
 function some(collection, func){
     let bool = false;
    each(collection, function(element, index, collection) {
        if (typeof func === 'function' && func(element, index, collection)) {
          bool = true;
        }
        else if (typeof func !== 'function' && element) {
            bool = true;
        }
    });
    return bool;
}
 module.exports.some = some;
 
/*
* reduce: 
* 
* @param {Array} array : an array to iterate over. 
* @param {Function} action: a function that acts on a the seed, element, and index. 
* @param {seed}: previous value. 
* 
* @return {seed}: current value. 
*/
function reduce(array, action, seed) {
    if (seed === undefined) {
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            seed = action(seed, array[i], i);
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            seed = action(seed, array[i], i);
        }
    }
    return seed;
}

module.exports.reduce = reduce;
/*
 * extend: Designed to pass all new values to an original object.
 * 
 * @param {Object} object1 : Object1 - an object for all other values to be passed to. 
 * @param {Object} object2 : another object with values to be passed to Object1. 
 *
 * @return {Object}: Object1 containing new values. 
 */
 
 function extend(object1, object2) {
    return Object.assign(object1, ...arguments);

}
 
 
module.exports.extend = extend;