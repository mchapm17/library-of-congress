var search ="search";
var input = document.querySelector('#text-search');
var submitBtn = document.querySelector('#submit-btn');
var format = document.querySelector('#format');
var formatValue = input.value;


var getLoc = function (api, input) {

    var urlRequest = `https://www.loc.gov/${api}+/?q=${input}&fo=json`;

    fetch(urlRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });

}

var submitted = function() {
    if (!inputValue) {
        getLoc(search, input);
    } else {
        getLoc(formatValue, input);
    }

    document.location('./searchresults.html');
}

submitBtn.addEventListener('click', submitted);