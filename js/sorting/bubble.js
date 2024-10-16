const array = [9, 8, 7, 6, 5, 11, 22, 30, 4, 3, 2, 1, 0];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
console.log(array);