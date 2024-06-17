
// loadGoogleMapsApi 関数の定義を追加
function loadGoogleMapsApi(apiKey, callback) {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callback.name}`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

let map;        // 地図オブジェクトを格納する変数を宣言
let marker;     // マーカーオブジェクトを格納する変数を宣言
let apiKey = window.GOOGLE_MAPS_API_KEY;  // Google Maps APIキーを格納する変数を宣言


document.addEventListener('DOMContentLoaded', async function() {  
  if (document.getElementById('map')) {
    loadGoogleMapsApi(apiKey, initMap);
  }

  if (document.getElementById('location_name')) {
    document.getElementById('location_name').addEventListener('blur', async function() {
      var locationName = this.value;
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationName)}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log('Geocoding API Response:', data);
        if (data.results.length > 0) {
          var location = data.results[0].geometry.location;
          if (!map) {
            map = new google.maps.Map(document.getElementById('map'), {
              center: location,
              zoom: 12
            });
            marker = new google.maps.Marker({
              position: location,
              map: map,
              draggable: true // マーカーをドラッグ可能にする
            });
          } else {
            map.setCenter(location);
            marker.setPosition(location);
          }

          // 緯度と経度を隠しフィールドに設定
          document.querySelector('[name="post[latitude]"]').value = location.lat;
          document.querySelector('[name="post[longitude]"]').value = location.lng;

          console.log('Updated Latitude:', location.lat);
          console.log('Updated Longitude:', location.lng);

          // マーカーをドラッグした後の位置を取得
          google.maps.event.addListener(marker, 'dragend', function(event) {
            var newLat = event.latLng.lat();
            var newLng = event.latLng.lng();
            console.log('New Latitude:', newLat);
            console.log('New Longitude:', newLng);
            document.querySelector('[name="post[latitude]"]').value = newLat;
            document.querySelector('[name="post[longitude]"]').value = newLng;
          });
        } else {
          alert('Location not found');
        }
      })
      .catch(error => console.error('Error fetching location:', error));
    });
  }
});

function initMap() {
  if (document.getElementById('map')) {
    var latitudeElement = document.querySelector('[name="post[latitude]"]');
    var longitudeElement = document.querySelector('[name="post[longitude]"]');
    
    var latitude = parseFloat(latitudeElement ? latitudeElement.value : NaN);
    var longitude = parseFloat(longitudeElement ? longitudeElement.value : NaN);

    if (isNaN(latitude) || isNaN(longitude)) {
      // デフォルトの位置を設定（例: 東京駅）
      latitude = 35.681236;
      longitude = 139.767125;
    }

    var location = { lat: latitude, lng: longitude };

    if (!map) {
      map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
      });

      marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: true // マーカーをドラッグ可能にする
      });

      // マーカーをドラッグした後の位置を取得
      google.maps.event.addListener(marker, 'dragend', function(event) {
        var newLat = event.latLng.lat();
        var newLng = event.latLng.lng();
        console.log('New Latitude:', newLat);
        console.log('New Longitude:', newLng);
        document.querySelector('[name="post[latitude]"]').value = newLat;
        document.querySelector('[name="post[longitude]"]').value = newLng;
      });
    } else {
      map.setCenter(location);
      marker.setPosition(location);
    }
  }
}

