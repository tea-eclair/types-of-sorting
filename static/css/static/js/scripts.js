function BubbleSort(A)       // A - массив, который нужно
{                            // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (A[j+1] < A[j])
           { var t = A[j+1]; A[j+1] = A[j]; A[j] = t; }
        }
     }                     
    return A;    // На выходе сортированный по возрастанию массив A.
}


function SelectionSort(A)       // A - массив, который нужно
{                               // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { var min = i;
       for (var j = i+1; j < n; j++)
        { if (A[j] < A[min]) min = j; } 
       var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
     }                    
    return A;    // На выходе сортированный по возрастанию массив A.
}


function InsertionSort(A)       // A - массив, который нужно
{                               // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n; i++)
     { var v = A[ i ], j = i-1;
       while (j >= 0 && A[j] > v)
        { A[j+1] = A[j]; j--; }
       A[j+1] = v;
     }                    
    return A;    // На выходе сортированный по возрастанию массив A.
}
