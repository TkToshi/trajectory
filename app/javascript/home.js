//= require posts

document.addEventListener('DOMContentLoaded', function() {
  // 全てのポップアップボタンにクリックイベントを追加
  document.querySelectorAll('.showPopupButton').forEach(function(button) {
      button.addEventListener('click', function(event) {
          // ポストID、緯度、経度を取得
          var postId = event.currentTarget.dataset.postId;
          console.log('Post ID:', postId);
          var latitude = event.currentTarget.dataset.latitude;
          console.log('Latitude:', latitude);
          var longitude = event.currentTarget.dataset.longitude;
          console.log('Longitude:', longitude);

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
                      #mapContainer {
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
                          var postLatitude = parseFloat(${latitude}); // 修正・追記箇所
                          var postLongitude = parseFloat(${longitude}); // 修正・追記箇所

                          var mapOptions = {
                              center: { lat: postLatitude, lng: postLongitude },
                              zoom: 12
                          };
                          var mapInstance = new google.maps.Map(document.getElementById('mapContainer'), mapOptions);

                          var marker = new google.maps.Marker({
                              position: { lat: postLatitude, lng: postLongitude },
                              map: mapInstance
                          });
                      }
                  </script>
                  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
              </head>
              <body>
                  <h2>Location Preview</h2>
                  <div id="mapContainer"></div>
              </body>
              </html>
          `);
          popup.document.close();
      });
  });
});