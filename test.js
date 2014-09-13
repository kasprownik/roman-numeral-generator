(function () {
    var convert = require('./romanNumeralGenerator');

    var passed = 0;
    var failed = 0;

    function assert(input, output) {

        var message = input + ' -> ' + output;
        var result = convert(input);

        if (result === output) {
            console.log('passed: ' + message);
            passed += 1;
        } else {
            console.log('failed: ' + message + ' (' + result + ' returned)');
            failed += 1;
        }
    }

    //base
    assert(1, 'I');
    assert(2, 'II');
    assert(3, 'III');
    assert(4, 'IV');
    assert(5, 'V');
    assert(6, 'VI');
    assert(7, 'VII');
    assert(8, 'VIII');
    assert(9, 'IX');
    assert(10, 'X');
    assert(40, 'XL');
    assert(50, 'L');
    assert(90, 'XC');
    assert(100, 'C');
    assert(400, 'CD');
    assert(500, 'D');
    assert(900, 'CM');
    assert(1000, 'M');

    //simple
    assert(20, 'XX');
    assert(38, 'XXXVIII');
    assert(1111, 'MCXI');
    assert(68, 'LXVIII');

    //tricky
    assert(49, 'XLIX');
    assert(1949, 'MCMXLIX');
    assert(3999, 'MMMCMXCIX');
    assert(3444, 'MMMCDXLIV');

    console.log('\n' + passed + ' passed, ' + failed + ' failed');

}());