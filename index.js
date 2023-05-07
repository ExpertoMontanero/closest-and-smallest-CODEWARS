function closest(strng) {

    //making an array of strings from a single string
    var array = strng.split(" ");
    var weights = strng.split(" ");
    var arrayConv = strng.split(" ");

    //making array of ints
    array.forEach(function callback(element, index) {
        array[index] = parseInt(element, 10)
    });

    //weights of numbers creating
    weights.forEach(function callback(element, index) {
        weights[index] = weightCalc(element);
    });

    //array of numbers converted to weights
    arrayConv.forEach(function callback(element, index) {
        arrayConv[index] = weightCalc(element);
    });
    //calculating weight of every string 
    function weightCalc(element) {
        var weightOfNumber = 0;
        for (var i = 0; i < element.length; i++) {
            weightOfNumber = weightOfNumber + parseInt(element.charAt(i), 10);
        }
        return weightOfNumber
    }

    //getting weight which is the closest to other weight 

    function closestWeight(array) {
        var temp = array;
        var pairOfWeights = [];
        temp = temp.sort();
        var diff = 0
        var resDiff = Infinity;
        var currIndex = 0;
        for (var index = 0; index < array.length - 1; index++) {
            diff = array[index + 1] - array[index];
            if (diff == 0) {
                pairOfWeights.push(array[currIndex]);
                pairOfWeights.push(array[currIndex + 1]);
                return pairOfWeights;
            }
            if (diff < resDiff) {
                resDiff = diff;
                currIndex = index;
            }
        }
        pairOfWeights.push(array[currIndex]);
        pairOfWeights.push(array[currIndex + 1]);
        return pairOfWeights;
    }
    //finding index of weights found

    function findingIndexes(array) {

        var weightsArray = closestWeight(weights);
        var result = [];
        var count = 0;
        for (var index = 0; index < arrayConv.length; index++) {
            if (arrayConv[index] == weightsArray[count]) {
                result.push(index);
                count++
                if (count == 2) {
                    return result;
                }
            }
        }
    }
    //combininng all for RESULT
    function result(array) {
        var indexes = findingIndexes(array);
        var weights = closestWeight(arrayConv);
        var actualNumbers = [];
        actualNumbers.push(array[indexes[0]]);
        actualNumbers.push(array[indexes[1]]);
        var first = [weights[0], indexes[0], actualNumbers[0]];
        var second = [weights[1], indexes[1], actualNumbers[1]];
        var result = [first, second];
        return result;
    }
    return (result(array));
}
