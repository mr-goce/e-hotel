function PersistanceLayer() {
    this.getOpenTripMapData = (city) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://api.opentripmap.com/0.1/ru/places/geoname?name=" + city + "&apikey=5ae2e3f221c38a28845f05b6545c9b3541ca05dcb8e4ce7450fd8487",
                // url: "http://api.opentripmap.com/0.1/ru/places/bbox?lon_min=19.9151&lat_min=50.0434&lon_max=19.9645&lat_max=50.0756&kinds=adult&apikey=5ae2e3f221c38a28845f05b6545c9b3541ca05dcb8e4ce7450fd8487",
                type: "GET",
                success: function (data) {
                    resolve(data);
                    //  console.log(data);
                },
                error: function (error) {
                    reject(error);
                }

            });
        });

    }
  
    this.getBarsData = (lon, lat) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=" + lon + "&kinds=bars&lat=" + lat + "&format=json&apikey=5ae2e3f221c38a28845f05b6545c9b3541ca05dcb8e4ce7450fd8487",

                // url: "https://api.opentripmap.com/0.1/en/places/radius?radius=10000&" + lon + "&kinds=adult&" + lat + "&format=json&apikey=5ae2e3f221c38a28845f05b6545c9b3541ca05dcb8e4ce7450fd8487",
                //  url: "https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon="+lon+"&lat="+lat+"&rate=3h&format=json&limit=10&apikey=5ae2e3f221c38a28845f05b6545c9b3541ca05dcb8e4ce7450fd8487",
                type: "GET",
                success: function (data) {
                    resolve(data);
                    // console.log(data);
                },
                error: function (error) {
                    reject(error);
                }
            });

        });
    }
    // za object CODE
    this.getObjCode = (code) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://api.opentripmap.com/0.1/ru/places/xid/" + code + "?apikey=5ae2e3f221c38a28845f05b6545c9b3541ca05dcb8e4ce7450fd8487",

                type: "GET",
                success: function (data) {
                    resolve(data);
                    console.log(data);
                },
                error: function (error) {
                    reject(error);
                }
            });

        });
    }

    // this.getObjCode();
    //  za Hotels
    this.getHotelsData = (lon, lat) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "https://api.opentripmap.com/0.1/en/places/radius?radius=1500&lon=" + lon + "&kinds=other_hotels&lat=" + lat + "&format=json&apikey=5ae2e3f221c38a28845f05b6545c9b3541ca05dcb8e4ce7450fd8487",

                type: "GET",
                success: function (data) {
                    resolve(data);
                    // console.log(data);
                },
                error: function (error) {
                    reject(error);
                }
            });

        });
    }

   
}