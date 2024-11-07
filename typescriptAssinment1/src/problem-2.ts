{
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.


    const removeDuplicates = (inputArray: number[]): number[] => {

        return inputArray.filter((inputNumber, index) =>
            inputArray.indexOf(inputNumber) === index
        )


    }

    //const remuv= 
    removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    
    //    console.log(remuv)

    // 
}