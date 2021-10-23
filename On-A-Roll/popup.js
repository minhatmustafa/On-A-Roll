document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('My Lunchbox');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            alert("Welcome to your lunchbox!");
        });
    }, false);

}, false);