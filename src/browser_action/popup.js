chrome.storage.sync.get({'dopeon':false}, function(data) {
    if(data.dopeon){
        console.log("on!");
        $("#checkbox").prop("checked", data.dopeon);
    }
});

$("#checkbox").on('click', function() {
    //ajax call here
    if($(this).is(':checked')){
        // Checkbox is checked..
        chrome.storage.sync.set({'dopeon': true}, function() {
            chrome.storage.sync.get({'dopeon':false}, function(data) {
                if(data.dopeon){
                    console.log("on!");
                }
            });
        });
    } else {
        // Checkbox is not checked..
        chrome.storage.sync.set({'dopeon': false}, function() {
            chrome.storage.sync.get({'dopeon':false}, function(data) {
                if(!data.dopeon){
                    console.log("off!");
                }
            });
        });
    }

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        chrome.tabs.reload(tabs[0].id);
    });
      
            
    
    //stop form submission
    // e.preventDefault();
 });
$("#add").on('click', function (e) {
    //ajax call here
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        console.log(tabs);
        let url = tabs[0].status == "complete" ? tabs[0].url : tabs[0].pendingUrl;
        let urlobj = new URL(url);
        console.log(urlobj.hostname);
        let hostname = urlobj.hostname.trim();
        chrome.storage.sync.set({[hostname] : true}, function() {
            console.log("setted!");
            chrome.storage.sync.get({[hostname] : false}, function(data) {
                if(data[hostname]){
                    console.log("contains!");
                } else {
                    alert("something went wrong with adding to Workspace");
                }
            });
        });
        chrome.tabs.reload(tabs[0].id);
    });
    
 });