## Bubble sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

### Characteristics of bubble short:

- Simplest sorting.
- Starting from the first index, compare the first and the second elements.
- If the first element is greater than the second element, they are swapped.
- Not suitable for large data sets
- Worst time complexity O(n²)
- Auxilarity space O(1)
- Bubble sort takes minimum time (Order of n) when elements are already sorted.
- The bubble sort algorithm is stable.

### How does Bubble Sort Work?

```
Input: arr[] = {-2, 45, 0, 11, -9}
```

<strong>First Iteration (Compare and Swap):</strong>

```
- Bubble sort starts with very first two elements, comparing them to check which one is greater.
- ( -2, 45, 0, 11, -9 ) –> ( -2, 45, 0, 11, -9 ), Here, nothing will be swaped in the first iteration.
- ( -2, 45, 0, 11, -9 ) –> ( -2, 0, 45, 11, -9 ), Here, algorithm compares the second two elements, and swaps since 45 > 0.
- ( -2, 0, 45, 11, -9 ) –> ( -2, 0, 11, 45, -9 ), Here, algorithm compares the third two elements, and swaps since 45 > 11.
- ( -2, 0, 11, 45, -9 ) –> ( -2, 0, 11, -9, 45 ), Here, algorithm compares the forth two elements, and swaps since 45 > -9.
```

<strong>Second Iteration:</strong> The same process goes on for the remaining iterations. After each iteration, the largest element among the unsorted elements is placed at the end.

```
- ( -2, 0, 11, -9, 45 ) –> ( -2, 0, 11, -9, 45 ), Here, nothing will be swaped in the first iteration because of 0 > -2.
- ( -2, 0, 11, -9, 45 ) –> ( -2, 0, 11, -9, 45 ), Here, nothing will be swaped in the second iteration because of 11 > 0.
- ( -2, 0, 11, -9, 45 ) –> ( -2, 0, -9, 11, 45 ), Here, algorithm compares the third two elements, and swaps since 11 > -9.
```

<strong>Remaining Iteration:</strong>

```
- ( -2, 0, -9, 11, 45 ) –> ( -2, 0, -9, 11, 45 ), Here, nothing will be swaped in the first iteration because of 0 > -2.
- ( -2, 0, -9, 11, 45 ) –> ( -2, -9, 0, 11, 45 ), Here, algorithm compares the second two elements, and swaps since 0 > -9.
```

<strong>Another Remaining Iteration:</strong>

```
- ( -2, -9, 0, 11, 45 ) –> ( -9, -2, 0, 11, 45 ), Here, algorithm compares the first two elements, and swaps since -2 > -9.
```

The array is sorted when all the unsorted elements are placed at their correct positions and final array will be look like: `( -9, -2, 0, 11, 45 )`
