function BubbleSort(A, ascending = true) {
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            var condition = ascending ? A[j] > A[j + 1] : A[j] < A[j + 1];
            if (condition) {
                var t = A[j];
                A[j] = A[j + 1];
                A[j + 1] = t;
            }
        }
    }
    return A;
}

function SelectionSort(A, ascending = true) {
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        var indexToSwap = i;
        for (var j = i + 1; j < n; j++) {
            var condition = ascending ? A[j] < A[indexToSwap] : A[j] > A[indexToSwap];
            if (condition) {
                indexToSwap = j;
            }
        }
        var t = A[indexToSwap];
        A[indexToSwap] = A[i];
        A[i] = t;
    }
    return A;
}

function InsertionSort(A, ascending = true) {
    var n = A.length;
    for (var i = 0; i < n; i++) {
        var v = A[i],
            j = i - 1;
        while (j >= 0 && (ascending ? A[j] > v : A[j] < v)) {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = v;
    }
    return A;
}

function ShellSort(A, ascending = true) {
    var n = A.length,
        i = Math.floor(n / 2);
    while (i > 0) {
        for (var j = 0; j < n; j++) {
            var k = j,
                t = A[j];
            while (k >= i && (ascending ? A[k - i] > t : A[k - i] < t)) {
                A[k] = A[k - i];
                k -= i;
            }
            A[k] = t;
        }
        i = i == 2 ? 1 : Math.floor((i * 5) / 11);
    }
    return A;
}

function SimpleCountingSort(A, ascending = true) {
    var n = A.length,
        Count = [],
        B = [];
    for (var i = 0; i < n; i++) Count[i] = 0;
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (ascending ? A[i] < A[j] : A[i] > A[j]) Count[j]++;
            else Count[i]++;
        }
    }
    for (var i = 0; i < n; i++) B[Count[i]] = A[i];
    return B;
}


var arrayToSort = [64, 25, 12, 22, 11];

console.log('Original Array:', arrayToSort);

console.log('Bubble Sort (Ascending):', BubbleSort(arrayToSort.slice()));
console.log('Bubble Sort (Descending):', BubbleSort(arrayToSort.slice(), false));

console.log('Selection Sort (Ascending):', SelectionSort(arrayToSort.slice()));
console.log('Selection Sort (Descending):', SelectionSort(arrayToSort.slice(), false));

console.log('Insertion Sort (Ascending):', InsertionSort(arrayToSort.slice()));
console.log('Insertion Sort (Descending):', InsertionSort(arrayToSort.slice(), false));

console.log('Shell Sort (Ascending):', ShellSort(arrayToSort.slice()));
console.log('Shell Sort (Descending):', ShellSort(arrayToSort.slice(), false));

console.log('Simple Counting Sort (Ascending):', SimpleCountingSort(arrayToSort.slice()));
console.log('Simple Counting Sort (Descending):', SimpleCountingSort(arrayToSort.slice(), false));
