var testDictionary = {
    'Take this tomato': 'Weź ten pomidor',
    'Eat this salad': 'Zjedz tę sałatkę'
};

describe('translate', function() {
    it('should return same value is no match in dictionary', function() {
        dictionary.reset();
        var testString = 'not in dictionary';
        expect(dictionary.__(testString)).toBe(testString);
    });

    it('should return translated value if is in dictonary', function() {
        dictionary.set(testDictionary);
        _.each(testDictionary, function(value, key) {
           expect(dictionary.__(key)).toBe(value);
        });
    });
});