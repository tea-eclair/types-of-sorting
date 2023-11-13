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


function ShellSort(A)
{
    var n = A.length, i = Math.floor(n/2);
    while (i > 0)
     { for (var j = 0; j < n; j++)
        { var k = j, t = A[j];
          while (k >= i && A[k-i] > t)
           { A[k] = A[k-i]; k -= i; }
          A[k] = t;
        }
      i = (i==2) ? 1 : Math.floor(i*5/11);
     }
    return A;
}

function SimpleCountingSort(A)
{   
    var n = A.length, Count = [], B = [];
    for (var i = 0; i < n; i++) Count[ i ] = 0;
    for (var i = 0; i < n-1; i++)
     { for (var j = i+1; j < n; j++)
        { if (A[ i ] < A[j]) Count[j]++;
          else Count[ i ]++;
        }
     }
    for (var i = 0; i < n; i++) B[Count[ i ]] = A[ i ];
    return B;
}


