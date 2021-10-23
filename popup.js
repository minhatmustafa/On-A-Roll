document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('My Fridge');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            alert("Welcome to your refrigerator!");
        });
    }, false);

}, false);