describe('utility', function() {

    it('dictionary should be a function', function() {
        expect(typeof dictionary).toBe('object');
    });

    it('dictionary should define the public methods', function() {
        expect(typeof dictionary.translate).toBe('function');
        expect(typeof dictionary.set).toBe('function');
        expect(typeof dictionary.get).toBe('function');
        expect(typeof dictionary.reset).toBe('function');
        expect(typeof dictionary.extend).toBe('function');
    });
});