function DataLayer() {
    this.dataLayerdata = {};
    this.geoData = {};
    this.adultData = {};
    this.objData = {};
    this.hotelData = {};
   
    this.persistanceObject = new PersistanceLayer();


    this.populateDataLayerData = async (city) => {
        this.dataLayerdata = await this.persistanceObject.getOpenTripMapData(city);
        // console.log(this.dataLayerdata);
        // console.log(typeof(this.dataLayerdata));
    }
    this.getDataLayerData = () => {
        return this.dataLayerdata;
    }
   
   

    // za BARS:
    this.populateBarsData = async () => {
        var lon = this.dataLayerdata.lon;
        var lat = this.dataLayerdata.lat;
        this.adultData = await this.persistanceObject.getBarsData(lon, lat);
        // console.log(this.adultData.length);
    }
    this.getBarsData = () => {
        return this.adultData;
    }
    // za Code Object
    this.populateCodeObjData = async (code) => {
        this.objData = await this.persistanceObject.getObjCode(code);
        console.log(this.objData);

    }
    this.getObjData = () => {
        return this.objData;
    }

    this.populateHotelsData = async () => {
        var lon = this.dataLayerdata.lon;
        var lat = this.dataLayerdata.lat;
        this.hotelData = await this.persistanceObject.getHotelsData(lon,lat);
        // console.log(this.hotelData);
    }

    this.getHotelData=()=>{
        return this.hotelData;
    }
    this.populateMuseumsData = async () => {
        var lon = this.dataLayerdata.lon;
        var lat = this.dataLayerdata.lat;
        this.museumData = await this.persistanceObject.getMuseumData(lon,lat);
    }
    this.getMuseumData =()=>{
        return this.museumData;
    }

    //  this.populateHotelsData();

}