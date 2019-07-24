// take in a single unsorted array as parameter
//split the array into halves
function mergesort(arr){
  if(arr.length < 2) return arr;
  var middleIndex = Math.floor(arr.alength/2);
  var firstHalf = arr.slice(0, middleIndex);
  var secondHalf = arr.slice(middleIndex);

  return merge(mergesort(firstHalf)), mergesort(secondHalf)
}

//takes two sorted arrays as parameters
// merges those sorted arrys into one sorted array
// return one sorted array
function merge(array1, array2){
  var result =[];
  while (array1.length && array2.length){
    var minElem;
    if(array1[0]< array2[0]) minElem = array1.shift();
    else minElem=array2.shift();
    result.push(minElem);
  }
  if (array1.length) result=result.concat(array1);
  else result =result.concat(array2);
  return result;
}