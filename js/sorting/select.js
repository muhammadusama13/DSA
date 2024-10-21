const array = [12, 5, 4, 10, 3, 2, 16]

for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i; j < array.length; j++) {

        if (array[min] > array[j]) {
            min = j
        }
    }
    // console.log('ST', array[i], 'EN', array[min])
    let temp = array[i]
    array[i] = array[min]
    // console.log('ST2', array[i], 'EN2', array[min])
    array[min] = temp
    // console.log('ST3', array[i], 'EN3', array[min])

    // console.log('array', array)
}




console.log(array)