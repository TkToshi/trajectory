//= require posts

document.addEventListener('DOMContentLoaded', function() {
  var showPopupButton = document.getElementById('showPopupButton');
  document.getElementById('showPopupButton').addEventListener('click', function() {


    
      // ポップアップウィンドウのサイズを設定
      var width = 400;
      var height = 300;
      var left = (screen.width - width) / 2;
      var top = (screen.height - height) / 2;

      // ポップアップウィンドウを開く
      var popup = window.open('', 'popupWindow', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);

      // ポップアップウィンドウにコンテンツを追加
      popup.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Popup Window</title>
          <style>
              #mapContainer  {
                  height: 100%;
                  width: 100%;
              }
              html, body {
                  height: 100%;
                  margin: 0;
                  padding: 0;
              }
          </style>
          <script>

          function initMap() {
            // ポップアップウィンドウで親ウィンドウの変数を使用
            var latitude = parseFloat(window.opener.MyApp.postLatitude);
            var longitude = parseFloat(window.opener.MyApp.postLongitude);
        
            if (isNaN(latitude) || isNaN(longitude)) {
                console.error("Invalid latitude or longitude values.");
                return;
            }

            console.log("Latitude in JS:", latitude);
            console.log("Longitude in JS:", longitude);

            var mapOptions = {
                center: { lat: latitude, lng: longitude },
                zoom: 12
            };
            var mapInstance = new google.maps.Map(document.getElementById('mapContainer'), mapOptions);

            var marker = new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: mapInstance
            });
          }

          </script>
          <script src="https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap" async defer></script>
      </head>
      <body>
          <h2>Location Preview</h2>
          <div id="mapContainer" style="height: 500px; width: 100%;"></div>
      </body>
      </html>
  `);
      popup.document.close();
  });
});
