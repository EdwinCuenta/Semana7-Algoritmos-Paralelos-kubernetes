// Metodo burbuja
const sortBubble = (arr) => {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// busqueda binaria
const searchBinary = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === val) {
            return middle;
        } else if (arr[middle] < val) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
}

module.exports = {sortBubble:sortBubble, searchBinary:searchBinary}

