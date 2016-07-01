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

    Dictionary.prototype.template = function(source, params) {
        if (params === undefined) {
            return source;
        }

        for (var i = 0; i < params.length; i++) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
                return params[i];
            });
        }
        return source;
    };

    Dictionary.prototype.translate = function(source, params) {
        var translated = this.base[source] || source;
        return this.template(translated, params);
    };

    window.Dictionary = Dictionary;
    window.dictionary = new Dictionary();
    window.__ = function(source) {
        return dictionary.translate(source);
    };
})(window, document);