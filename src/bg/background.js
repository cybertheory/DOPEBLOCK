// // if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// // var settings = new Store("settings", {
// //     "sample_setting": "This is how you use Store.js to remember values"
// // });


// //example of using a message handler from the inject scripts
// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete') {

//       let default_val = JSON.stringify(new Set(['www.google.com']));

//       // chrome.storage.sync.get({'workspace': default_val}, function(data) {
//       //     // data.links will be either the stored value, or defaultValue if nothing is set
//           // let url = tab.url;
//       //     let set = JSON.parse(data.workspace);
//       //     console.log(typeof(set));
//       $('body').empty();
//       // console.log(chrome.extension.getURL('images/Dope.png'));
//       $('body').append('<img id="images/Dope Block.png" src="' + chrome.extension.getURL('images/Dope.png') +'" />');
//       // });
//   }
// })

