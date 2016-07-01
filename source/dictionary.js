(function (window, document) {
    /**
     * Dictionary Class
     * @constructor
     */
    var Dictionary = function() {
        this.reset();
    };

    /**
     * Sets a dictionary object
     * @param {Object} dictionary
     */
    Dictionary.prototype.set = function(dictionary) {
        if (dictionary && (typeof dictionary == 'object')) {
            this.base = dictionary;
        }
    };

    /**
     * Returns current dictionary
     * @returns {Object}
     */
    Dictionary.prototype.get = function() {
        return this.base;
    };

    /**
     * Extends current dictionary
     * @param {Object} words
     */
    Dictionary.prototype.extend = function(words) {
        var base = this.base;
        for (var i in words) {
            if (words.hasOwnProperty(i)) {
                base[i] = words[i];
            }
        }
    };

    /**
     * Clear current dictionary
     */
    Dictionary.prototype.reset = function() {
        this.set({})
    };

    /**
     * Simple templating function
     * e.g. template('More than {0}, less than {1}', [5, 10])
     * should return 'More than 5, less than 10'
     * @param {String} source
     * @param {Array} params
     * @returns {String}
     */
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

    /**
     * Main translate method
     * @param {String} source
     * @param {Array} params
     * @returns {String}
     */
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