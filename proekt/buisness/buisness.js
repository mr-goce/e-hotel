function BuisnessLayer() {
    this.dataObj = new DataLayer();


    this.resolveApiData = async (city) => {
        await this.dataObj.populateDataLayerData(city);
        var data = this.dataObj.getDataLayerData();
        // console.log(data);
        return data;

        // console.log(data.lon);

    }
    // za vtoroto API:
    this.resolveGeoData = async () => {
        await this.dataObj.populateGeoData();
        var geoData = this.dataObj.getGeoData();
        console.log(geoData);
    }

    // za Adult Data:
    this.resolveBarsData = async () => {
        await this.dataObj.populateBarsData();
        var barsData = this.dataObj.getBarsData();
        
        var bars = [];
        // console.log(allBars);
        for (var i = 0; i < barsData.length; i++) {
            // var allBars = barsData[i].name;

            var barsObj = {
                name: barsData[i].name,
                code: barsData[i].xid
            }
            // console.log(barsData[i].name);
            bars.push(barsObj);
        }
        // console.log(bars);
        return bars;

    }
    // za CodeObject
    this.resolveCodeObj = async (code) => {
        await this.dataObj.populateCodeObjData(code);
        var codeObj = this.dataObj.getObjData();
        // for (var i = 0; i < codeObj.length; i++) {

        //     var code = bars[i].code.preview.source;

        //     console.log(code);

        // }
        return codeObj;
    }
    // this.resolveCodeObj();
    // var hotels =[];
    this.resolveHotelsData = async () => {
        await this.dataObj.populateHotelsData();
        var hotelObj = this.dataObj.getHotelData();

        console.log(hotelObj);
        return hotelObj;

    }
    // muzei
    this.resolveMuseumsData = async () => {
        await this.dataObj.populateMuseumsData();
        var museumObj = this.dataObj.getMuseumData();

        console.log(museumObj);
        return museumObj;

    }
    // za hotels

}   