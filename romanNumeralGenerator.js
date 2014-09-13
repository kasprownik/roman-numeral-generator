(function (root, factory) {
    if (typeof define === 'function' && define.amd) { //AMD
        define(function () {
            return (root.returnExportsGlobal = factory());
        });
    } else if (typeof exports === 'object') { //Node
        module.exports = factory();
    } else { //browser global
        root.romanNumeralGenerator = factory();
    }
}(this, function () {

    //wrapper for mapper, we need to cache dividend number in a closure
    function getDivisionsMapper(dividend) {
        return function (divisor) {
            var division = Math.floor(dividend / divisor);
            dividend -= division * divisor;
            return division;
        }
    }

    //wrapper for reducer, we need to cache base values array in a closure
    function getResultReducer(values) {
        return function (previous, current, index) {
            //if the current positions is not 0, multiply the current character and add to the symbol
            return current ? new Array(current + 1).join(values[index]) + previous : previous;
        }
    }

    //main function
    function romanNumeralGenerator(int) {
        //base symbols and related numbers, including subtractive notation
        var baseKeys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var baseValues = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

        if (!(typeof int === "number" && isFinite(int) && int % 1 === 0 && int > 0)) {
            throw new TypeError("Argument must be a positive integer.");
        }

        return baseKeys
            .map(getDivisionsMapper(int))
            .reduceRight(getResultReducer(baseValues), '');
    }

    return romanNumeralGenerator;
}));