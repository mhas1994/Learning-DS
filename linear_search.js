// linear search in javascript
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}
linearSearch([1, 2, 3, 4, 5], 3);