let onoff = false;
chrome.storage.sync.get({'dopeon' : onoff}, function(data) {
    onoff = data.dopeon;
    if(onoff){
        let url = location.hostname.trim();
        console.log("on at " + url);
        chrome.storage.sync.get({[url] : false}, function(data) {
            // data.links will be either the stored value, or defaultValue if nothing is set
            
            if(!data[url]){
                console.log("not in workspace, DOPEBLOCKINGing!!!");      
                $('body').empty();
                $('body').attr('style', '');
                $('html').attr('style', '');
                // console.log(chrome.extension.getURL('images/Dope.png'));
                $("body").css({"background-image": "url(" + chrome.runtime.getURL('/images/Dope.png') + ")", "background-size": "cover"});
            }
            else{
                console.log("workspace detected");
            }

        });
    }
});
