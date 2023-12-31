//    MergePseudo

//    setup empty array / sortedArray
//    arguments = 1st Array / 2nd Array / 1st Array length / 2nd Array length
//    set each initial index for 1st array, 2nd array, and sortedArray
//    set loop condition = if the indexes of the 1st and 2nd array are less than their respective length

//    then loop statement 
//    if 1stArray[ index ] < 2ndArray[ index ], then push the former to sortedArray
//    increment the index of 1st array and sortedArray

//    else, push the latter to sortedArray
//    increment index of 2nd array and sorted array

//    close loop
//    copy remaining elements with a loop

const A = [ 2, 8, 15, 18, 19, 25 ];
const B = [ 5, 9, 12, 17 ];

function merge(A, B, a, b) {
    const sortedArray = [];
    let iA = 0, 
        iB = 0,
        iSorted = 0; 

    //  compare and place
    while (iA < a && iB < b) {
        A[iA] < B[iB] ?
        sortedArray[iSorted++] = A[iA++]:
        sortedArray[iSorted++] = B[iB++];
    }

    //  push what remains
    while (iA < a) {
        sortedArray.push(A[iA++])
    }

    while (iB < b) {
        sortedArray.push(B[iB++])
    }

    return sortedArray; 
}

function sliceLeft(array) {
    const midIndex = Math.floor(array.length / 2);
    return array.slice(0, midIndex);
}

function sliceRight(array) {
    const midIndex = Math.floor(array.length / 2);
    return array.slice(midIndex);
}

function mergeSort(array) {
    if (array.length > 1) {
        const firstHalf = sliceLeft(array);
        const secondHalf = sliceRight(array);

        const firstArr = mergeSort(firstHalf);
        const secondArr = mergeSort(secondHalf);

        return merge(firstArr, secondArr, firstArr.length, secondArr.length)
    } else {
        return array;
    }
}

// const array = [ 9, 3, 7, 5, 6, 4, 8, 2 ];
// mergeSort(array);
// console.log(mergeSort(array));


const refactor = (() => {
    const A = [ 2, 8, 15, 18, 19, 25 ];
    const B = [ 5, 9, 12, 17 ];

    function merge(A, B) {
        const sortedArray = [];
        let iA = 0, 
            iB = 0
    
        while (iA < A.length && iB < B.length) {
            A[iA] < B[iB] ?
            sortedArray.push(A[iA++]):
            sortedArray.push(B[iB++]);
        }
    
        while (iA < A.length) {
            sortedArray.push(A[iA++])
        }
    
        while (iB < B.length) {
            sortedArray.push(B[iB++])
        }
    
        return sortedArray;
    }

    function mergeSort(array) {
        if (array.length < 2) return array;
            
        const mid = Math.floor(array.length / 2);
        const firstHalf = array.slice(0, mid);
        const secondHalf = array.slice(mid);

        return merge(
            mergeSort(firstHalf),
            mergeSort(secondHalf)
        );
    }

    const array = [ 9, 3, 7, 5, 6, 4, 8, 2 ];
    console.log(mergeSort(array));
})();