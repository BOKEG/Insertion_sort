const insertionSort = (arr) => {
    // Loop through each element in the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let currentValue = arr[i];
        // Initialize the position for insertion
        let j = i - 1;

        // Shift elements of the sorted part to the right to create the correct position
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into its correct position
        arr[j + 1] = currentValue;
    }

    return arr; // Return the sorted array
}

// // Example Usage
// const array = [7, 3, 1, 2, 5, 6];
// console.log("Original Array:", array);
// const sortedArray = insertionSort(array);
// console.log("Sorted Array:", sortedArray);
