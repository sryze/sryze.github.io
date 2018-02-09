var converters = {
    'to-uppercase': function(input) {
        return input.toUpperCase();
    },
    'to-lowercase': function(input) {
        return input.toLowerCase();
    }
};

addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('convert-button');

    button.addEventListener('click', function(e) {
        var inputArea = document.getElementById('input-area');
        var outputArea = document.getElementById('output-area');

        var select = document.getElementById('converter-select');
        var converterOption = select.selectedOptions[0];
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