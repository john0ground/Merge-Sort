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