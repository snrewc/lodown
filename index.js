'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

 function each(collection, action) {
     // ...code
 }
 module.exports.each = each;
 
 /**
  * filter: Designed to filter values in a collection based on a test. 
  * Takes a collection, Array or Object, and passes each value 
  * in the collection through a test Function. The test Function returns 
  * true if the value passes the test, false otherwise. Values that pass 
  * the test are collected and returned in an output Array.
  * 
  * @param {Array or Object} collection: The collection to filter.
  * @param {Function} test: The Function to be applied to each value in 
  * the collection. The test Function must return a Boolean based on some 
  * logic which tests the value given to it.
  * 
  * @return {Array}: An Array containing the filtered collection values. 
  * The Array will contain only the values that passed the test.
  * 
  * Usage: 
  * 
  *      const letters = ['a', 'b', 'b', 'c'];
  *      const onlyBs = filter(letters, function(letter) {
  *          return letter === 'b';
  *      });
  *      console.log(onlyBs); // -> ['b', 'b']
  */
 function filter(collection, test) {
     // ...code
 }
 module.exports.each = each;