describe('set', function() {
    var testDictoinary = {
        'test key': 'test value'
    };

    it('should set the dictionary base', function() {
        dictionary.set(testDictoinary);
        expect(dictionary.get()).toBe(testDictoinary);
    });
});

describe('reset', function() {
    it('should clear the dictionary', function() {
        dictionary.reset();
        expect(dictionary.get()).toEqual({});
    });
});

describe('extend', function() {
    var animalsSet = {
        'chicken': 'kurczak',
        'dog': 'pies'
    };
    var colorsSet = {
        'blue': 'niebieski',
        'black': 'czarny'
    };

    it('should extend current dictionary', function() {
        dictionary.reset();
        dictionary.extend(animalsSet);
        dictionary.extend(colorsSet);
        expect(dictionary.get()).toEqual(_.extend({}, animalsSet, colorsSet));
    });

    dictionary.reset();
});