$("#workspace").on("load", function(e) {
    chrome.storage.sync.get({workspace}, function(data) {
        e.text(data.workspace);
    });
});

$("form").on('submit', function (e) {
    //ajax call here
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        chrome.storage.sync.get({workspace: new Set([])}, function(data) {
            // data.links will be either the stored value, or defaultValue if nothing is set
            let url = tabs[0].status == "complete" ? tabs[0].url : tabs[0].pendingUrl
            chrome.storage.sync.set({workspace: data.workspace.add(url)}, function() {
                chrome.storage.sync.get({workspace}, function(data) {
                    console.log(data.workspace);
                });
            });
        });
        // use `url` here inside the callback because it's asynchronous!
    });
    
    //stop form submission
    // e.preventDefault();
 });