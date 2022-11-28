
// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(itemContainer, leftIndex, midIndex, rightIndex)
{
	var n1 = midIndex - leftIndex + 1;
	var n2 = rightIndex - midIndex;

	// Create temp arrays
	var leftSubArray = new Array(n1);
	var rightSubArray = new Array(n2);

	// Copy data to temp arrays L[] and R[]
	for (var i = 0; i < n1; i++)
    leftSubArray[i] = itemContainer[leftIndex + i];
	for (var j = 0; j < n2; j++)
    rightSubArray[j] = itemContainer[midIndex + 1 + j];

	// Merge the temp arrays back into arr[l..r]

	// Initial index of first subarray
	var initialFirstSubArrayIndex = 0;

	// Initial index of second subarray
	var initialSecondSubArrayIndex = 0;

	// Initial index of merged subarray
	var initialMergedSubArrayIndex = leftIndex;

	while (initialFirstSubArrayIndex < n1 && initialSecondSubArrayIndex < n2) {
		if (leftSubArray[initialFirstSubArrayIndex] <= rightSubArray[initialSecondSubArrayIndex]) {
			itemContainer[initialMergedSubArrayIndex] = leftSubArray[initialFirstSubArrayIndex];
			initialFirstSubArrayIndex++;
		}
		else {
			itemContainer[initialMergedSubArrayIndex] = rightSubArray[initialSecondSubArrayIndex];
			initialSecondSubArrayIndex++;
		}
		initialMergedSubArrayIndex++;
	}

	// Copy the remaining elements of
	// L[], if there are any
	while (initialFirstSubArrayIndex < n1) {
		itemContainer[initialMergedSubArrayIndex] = leftSubArray[initialFirstSubArrayIndex];
		initialFirstSubArrayIndex++;
		initialMergedSubArrayIndex++;
	}

	// Copy the remaining elements of
	// R[], if there are any
	while (initialSecondSubArrayIndex < n2) {
		itemContainer[initialMergedSubArrayIndex] = rightSubArray[initialSecondSubArrayIndex];
		initialSecondSubArrayIndex++;
		initialMergedSubArrayIndex++;
	}
}

// leftIndex is for left index and rightIndex is
// right index of the sub-array
// of itemContainer to be sorted */
function mergeSort(itemContainer,leftIndex, rightIndex){
	if(leftIndex >= rightIndex){
		return;//returns recursively
	}

	var midIndex = leftIndex + parseInt((rightIndex-leftIndex)/2);
	mergeSort(itemContainer,leftIndex,midIndex);
	mergeSort(itemContainer,midIndex+1,rightIndex);
	merge(itemContainer,leftIndex,midIndex,rightIndex);
}

// UTILITY FUNCTIONS
// Function to print an array
function printItems( A, size )
{
	for (var i = 0; i < size; i++)
	document.write( A[i] + " ");
}


var targetItems = [ 12, 11, 13, 5, 6, 7 ];
var totalItems = targetItems.length;

document.write( "Given array is <br>");
printItems(targetItems, totalItems);

mergeSort(targetItems, 0, totalItems - 1);

document.write( "<br>Sorted array is <br>");
printItems(targetItems, totalItems);

