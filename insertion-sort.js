//first pass, not exactley correct sorting process

const insertionSort = arr => {
  const swapHelper = (arr, a, b) => {
    let temp = arr[b]
    arr[b] = arr[a]
    arr[a] = temp
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        swapHelper(arr, i, j)
     }
   }
  }
return arr
}

console.log(insertionSort([423,1,5,6,3,4345,456,43,525,348,4,78,546,2346,3568]))

//or

const insertionSort2 = arr => {
  let length = arr.length;
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 &&arr[j] > key) {
           arr[j + 1] =arr[j];
            j = j - 1;
        }
       arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort2([423,1,5,6,3,4345,456,43,525,348,4,78,546,2346,3568]))

