describe('template', function() {
    it('should replace value', function() {
       expect(dictionary.template('{0} is awesome.', ['Beer'])).toBe('Beer is awesome.');
    });

    it('should replace multiple values', function() {
        expect(dictionary.template('{0} is too fast! Enter a value smaller then {0} and at least {1}', [0, -15]))
            .toBe('0 is too fast! Enter a value smaller then 0 and at least -15');
    });
});

describe('translate', function() {
    it('should return same value is no match in dictionary', function() {
        dictionary.reset();
        var testString = 'not in dictionary';
        expect(dictionary.translate(testString)).toBe(testString);
    });

    it('should return translated value if is in dictonary', function() {
        var testDictionary = {
            'Take this tomato': 'Weź ten pomidor',
            'Eat this salad': 'Zjedz tę sałatkę'
        };

        dictionary.set(testDictionary);
        _.each(testDictionary, function(value, key) {
            expect(dictionary.translate(key)).toBe(value);
        });
    });

    it('should use template function', function() {
        var testDictionary = {
            'It is not {0}, it is {1}': 'To nie jest {0}, to jest {1}'
        };
        dictionary.set(testDictionary);

        expect(dictionary.translate('It is not {0}, it is {1}', [10, 9]))
            .toBe('To nie jest 10, to jest 9');
    });
});