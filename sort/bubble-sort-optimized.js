
// An optimized version of Bubble Sort
function bubbleSort(itemContainer, itemLength)
{
    var firstIterator, secondIterator, tempItem;
    var swapped;
    for (firstIterator = 0; firstIterator < itemLength - 1; firstIterator++)
    {
        swapped = false;
        for (secondIterator = 0; secondIterator < itemLength - firstIterator - 1; secondIterator++)
        {
            if (itemContainer[secondIterator] > itemContainer[secondIterator + 1])
            {
                // swap itemContainer[secondIterator] and itemContainer[secondIterator+1]
                tempItem = itemContainer[secondIterator];
                itemContainer[secondIterator] = itemContainer[secondIterator + 1];
                itemContainer[secondIterator + 1] = tempItem;
                swapped = true;
            }
        }

        // IF no two elements were
        // swapped by inner loop, then break
        if (swapped == false)
            break;
    }
}

// Function to print an array
function printItems(itemContainer, size)
{
    var iterator;
    for (iterator = 0; iterator < size; iterator++)
        document.write(itemContainer[iterator] + " ");
    document.writeln();
}

// Driver program
var targetItems = [ 64, 34, 25, 12, 22, 11, 90 ];
var targetLength = targetItems.length;
bubbleSort(targetItems, targetLength);
document.write("Sorted array: ");
printItems(targetItems, targetLength);
