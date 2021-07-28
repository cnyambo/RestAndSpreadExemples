function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  //REST 
  function filterOutOddsRest() {
    var nums = [... arguments];
    return nums.filter(num =>num% 2 === 0)
    
  }

function findMin()
{
    var arr = [... arguments];
    return arr.reduce(function(acc,next){
        return acc>next ?next : acc;
    });
}

function mergeObjects (a,b)
{
    return {... a, ... b};
}

function doubleAndReturnArgs (a, ...b)
{
    return [... a,...b.map(num=>num*2)];
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom=(items) =>{
    let index = Math.floor(Math.random() * items.length;
    delete items[index];
    return items;
}

/** Return a new array with every item in array1 and array2. */

const extend=(array1, array2)=> {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const  addKeyVal= (obj, key, val)=> {
    let newObj = {...obj};
    newObj[key]=val
    return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) =>{
    let newObj = {... obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine= (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

const update= (obj, key, val) =>{ 
    let newObj = {...obj};
    newObj[key]=val;
    return newObj;

}
