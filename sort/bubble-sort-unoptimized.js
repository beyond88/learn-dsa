function swapValue(itemContainer, firstItem, secondItem)
{
	var tempItem = itemContainer[firstItem];
	itemContainer[firstItem] = itemContainer[secondItem];
	itemContainer[secondItem] = tempItem;
}

function bubbleSort( itemContainer, itemLength )
{
    var firstIterator, secondIterator;
    for (firstIterator = 0; firstIterator < itemLength-1; firstIterator++)
    {
        for (secondIterator = 0; secondIterator < itemLength-firstIterator-1; secondIterator++)
        {
            if (itemContainer[secondIterator] > itemContainer[secondIterator+1])
            {
                swapValue(itemContainer,secondIterator,secondIterator+1);
            }
        }

    }
}

/* Function to print an array */
function printItems(itemContainer, size)
{
	var iterator;
	for (iterator=0; iterator < size; iterator++)
		document.write(itemContainer[iterator]+ " ");
	document.write("\n");
}

// Driver program to test above functions
var targetItems = [5, 1, 4, 2, 8];
var targetLength = 5;
document.write("UnSorted array: \n");
printItems(targetItems, targetLength);

bubbleSort(targetItems, targetLength);
document.write("Sorted array: \n");
printItems(targetItems, targetLength);

