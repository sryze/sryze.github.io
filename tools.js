if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+/, '').replace(/\s+$/, '');
    };
}

var params = parseURLParams(location.hash.substring(1));
var converters = {
    'to-uppercase': function(input) {
        return input.toUpperCase();
    },
    'to-lowercase': function(input) {
        return input.toLowerCase();
    }
};

function parseURLParams(query) {
    var params = {};
    var pairs = query.split('&');
    for (var i = 0; i < pairs.length; i++) {
        var nameValue = pairs[i].split('=');
        var name = (decodeURIComponent(nameValue[0]) || '').trim();
        var value = decodeURIComponent(nameValue[1]);
        if (name && name.length > 0) {
            params[name] = value;
        }
    }
    return params;
}

addEventListener('DOMContentLoaded', function() {
    var inputArea = document.getElementById('input-area');
    inputArea.value = params['input'];

    var outputArea = document.getElementById('output-area');
    var convertButton = document.getElementById('convert-button');

    var toolSelect = document.getElementById('converter-select');
    var initialTool = params['tool'];
    if (converters.keys().contains(initialTool)) {
        converterSelect.value = initialTool;
    }

    convertButton.addEventListener('click', function(e) {
        var converterOption = toolSelect.selectedOptions[0];
        if (!converterOption || converterOption.value === '_') {
            return;
        }

        var converterType = converterOption.value;
        var converter = converters[converterType];
        if (!converter) {
            return;
        }

        var input = inputArea.value;
        outputArea.value = converter(input);
    });
});