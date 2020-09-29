
exports.min = function min (array) {
    if (array !== undefined && array[0] !== undefined) {
        let minNumber = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] < minNumber) {
                minNumber = array[i];
            }
        }

        return minNumber;
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (array !== undefined && array[0] !== undefined) {
        let maxNumber = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] > maxNumber) {
                maxNumber = array[i];
            }
        }

        return maxNumber;
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    return 0;
}
