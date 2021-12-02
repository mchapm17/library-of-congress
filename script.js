var search ="search";
var input = document.querySelector('#text-search');
var submitBtn = document.querySelector('#submit-btn');
var formatValue = document.querySelector('#format').value;


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
    if (formatValue) {
        getLoc(formatValue, input);
    } else {
        getLoc(search, input);
    }

   location.replace('./searchresults.html');
}

submitBtn.addEventListener('click', submitted);