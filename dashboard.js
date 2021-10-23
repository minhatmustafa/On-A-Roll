document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('My Dashboard');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            alert("Welcome to your dashboard!");
        });
    }, false);

}, false);

// document.addEventListener('DOMContentLoaded', function() {
//     var checkPageButton = document.getElementById('Open Lunchbox');
//     addEventListener('click', function() {
//         chrome.tabs.getSelected(null, function(tab) {
//             chrome.windows.create({
//                 url: chrome.runtime.getURL("lunchbox.html")
//             })
//         })
//     });
// }, false);
