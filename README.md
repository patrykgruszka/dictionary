# Incredible easy JavaScript translations
When you want simple JS translation tool, this is what you are looking for.

## Basic usage
### Extend initial dictionary
```javascript
dictionary.extend({
    'One': 'Один',
    'More than {0}, less than {1}': 'больше {0}, меньше {1}'
});
```

### Translate 
```javascript
dictionary.translate('One');
// <- "Один"

dictionary.translate('More than {0}, less than {1}', ['0.5', '0.7']);
// <- "больше 0.5, меньше 0.7"
```

### Translate shortcut
If you are too lazy to white dictionary.translate every time when you want to translate text you definitely should check this:
```javascript
__('One');
// <- "Один"

__('More than {0}, less than {1}', ['0.5', '0.7']);
// <- "больше 0.5, меньше 0.7"
```

### Creating custom dictionaries
If you need multiple custom dictionaries just create new instance:
```javascript
const customDictionary = new Dictionary();

customDictionary.extend({
    '3.6': 'Not great, no terrible'
});

customDictionary.translate('3.6');
// <- "Not great, no terrible"
```