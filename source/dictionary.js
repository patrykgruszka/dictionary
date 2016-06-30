(function (window, document) {
    var Dictionary = function() {
        this.reset();
    };

    Dictionary.prototype.set = function(dictionary) {
        if (dictionary && (typeof dictionary == 'object')) {
            this.base = dictionary;
        }
    };

    Dictionary.prototype.get = function() {
        return this.base;
    };

    Dictionary.prototype.extend = function(words) {
        var base = this.base;
        for (var i in words) {
            if (words.hasOwnProperty(i)) {
                base[i] = words[i];
            }
        }
    };

    Dictionary.prototype.reset = function() {
        this.set({})
    };

    Dictionary.prototype.__ = function(text) {
        return this.base[text] || text;
    };

    window.Dictionary = Dictionary;
    window.dictionary = new Dictionary();
    window.__ = function(text) {
        return dictionary.__(text);
    };
})(window, document);