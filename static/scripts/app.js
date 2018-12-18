$(document).ready(function(){
    console.log("jQuery up and running")
});


// curl -X GET -u "apikey : hB8gmTcFeu7MNsKDbRhW8_AYWntJn0sTcEV8A6SGJA7c" \ 
//   "https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-11-16&url=www.ibm.com&features=keywords,entities&entities.emotion=true&entities.sentiment=true&keywords.emotion=true&keywords.sentiment=true"


//   curl --user "apikey:hB8gmTcFeu7MNsKDbRhW8_AYWntJn0sTcEV8A6SGJA7c" \
//   "https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-09-21" \
//   --request POST \
//   --header "Content-Type: application/json" \
//   --data '{
//     "url": "http://newsroom.ibm.com/Guerbet-and-IBM-Watson-Health-Announce-Strategic-Partnership-for-Artificial-Intelligence-in-Medical-Imaging-Liver",
//     "features": {
//       "sentiment": {},
//       "categories": {},
//       "concepts": {},
//       "entities": {},
//       "keywords": {}
//     }
//   }'



var watsonUrl = "https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-09-21"

// // var text = '{
// //         "url": "http://newsroom.ibm.com/Guerbet-and-IBM-Watson-Health-Announce-Strategic-Partnership-for-Artificial-Intelligence-in-Medical-Imaging-Liver",
// //         "features": {
// //           "sentiment": {},
// //           "categories": {},
// //           "concepts": {},
// //           "entities": {},
// //           "keywords": {}
// //         }
// //       }'



  $.ajax({
    url: watsonUrl,
    beforeSend: function(xhr) {
        xhr.setRequestHeader('apikey', 'hB8gmTcFeu7MNsKDbRhW8_AYWntJn0sTcEV8A6SGJA7c')
    },
    type: 'POST',
    crossDomaign: true,
    headers: {"Content-Type" : "application/json"},
    data: {
        "url": "http://newsroom.ibm.com/Guerbet-and-IBM-Watson-Health-Announce-Strategic-Partnership-for-Artificial-Intelligence-in-Medical-Imaging-Liver",
        "features": {
          "sentiment": {},
          "categories": {},
          "concepts": {},
          "entities": {},
          "keywords": {}
        }
      },
    success: onSuccess,
    error: onError,
});

    function onError ( err ) {
        console.log( err );
    }
    function onSuccess (response) {
        console.log(response);
}
