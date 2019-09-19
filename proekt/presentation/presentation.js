function PresentationLayer() {


    this.buisnesObj = new BuisnessLayer();
    this.displayData = () => {

        var rootDiv = $("#root");
        var rootText = $("<h1>");
        rootText.html("Just choose your destination");
        rootDiv.append(rootText);
        var inputText = $("<input>").attr("id", "search");
        rootDiv.append(inputText);

        var button = $("<button>").attr("id", "btn");
        rootDiv.append(button);
        button.html("search");

button.on("click",async(event)=>{


        // $(window).on("keypress", async (event) => {
            

            // if (event.which === 13) {
                var lastData = await this.buisnesObj.resolveApiData(inputText.val());
                console.log(lastData);
                $("body").html("");
                var container = $("<div>");
                $("body").append(container);
                $("body").css("backgroundColor", "azure");
                var paragraf = $("<p>").text("welcome to " + inputText.val());
                paragraf.css("text-align", "center");
                paragraf.css({
                    color: "blue",
                    fontSize: "40px",
                    textTransform: "uppercase"
                });
                var left = $("<div>").attr("class", "left");
                container.append(left);
                left.append(paragraf);

               
                // console.log("https://opentripmap.com/en/#11.75/" + lastData.lon + "/" + lastData.lat);
                var map = $("<iframe>").attr("src", "https://opentripmap.com/en/#9.5/" + lastData.lat + "/" + lastData.lon);

                left.append(map);
                map.css("width", "500px");
                map.css("height", "400px");
                // container.append(map);
                container.css("display", "flex");

                var menu = $("<div>").attr("class", "menu");
                menu.css("margin-left", "50px");
                menu.css("margin-top", "40px");
                menu.css("color", "blue");
                container.append(menu);
                var bars = $("<h1>").text("Bars").css({
                    border: "2px solid blue",
                    marginBottom: "10px"
                });
                var hotels = $("<h1>").text("Hotels").css({
                    border: "2px solid blue",
                    marginBottom: "10px"
                });
               
                menu.append(bars);
                menu.append(hotels);
                
                bars.on("click", async () => {
                    var data = await this.buisnesObj.resolveBarsData();
                    console.log(data);
                    $("body").html("");
                    $("body").css({

                        margin: "20px"

                    })

                    var root = $("<div>").attr("class", "rootClas");
                    root.css({
                        display: "flex",
                        backgroundImage: "url(background1.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: "0.8",
                        textAlign: "center"


                    })
                    var body = $("body");
                    body.append(root);

                    var leftSide = $("<div>").css("class", "leftSide");
                    leftSide = $("<div>").css({
                        backgroundColor: "azure",
                        fontFamily: "Oswald",
                        textAlign: "left",
                    })
                    var title = $("<h2>").text("Results for Bars in radius of 1km: ");
                    var title1 = $("<h3>").text("Press the code below for additional Bar info :");


                    var rightSide = $("<div>").css("class", "rightSide");
                    root.append(leftSide);
                    root.append(rightSide);
                    leftSide.append(title);
                    leftSide.append(title1);



                    for (var i = 1; i < data.length; i++) {
                        var barName = $('<div>').text(i + "." + data[i].name).attr("class", "barsName");
                        var codeName = $('<span>').text(data[i].code).attr("class", "codeName");
                        codeName.css("color", "blue");

                        leftSide.append(barName);
                        barName.append(codeName);

                    }
                    $(".codeName").on("click", async (event) => {
                        // window.location="../indexBars.html";
                        console.log($(event.target).text());
                        var dataCode = await this.buisnesObj.resolveCodeObj($(event.target).text());

                        console.log(dataCode);
                        // console.log(typeof (dataCode));
                        // $("body").html("");

                        // var image = $('<img>').attr("src", dataCode.image);
                        var image;
                        if (dataCode.image != undefined) {
                            image = $("<a>").attr("href", dataCode.image).text("View Bar image");
                        }
                        else {
                            image = $("<p>").text("No available image for " + dataCode.name);
                        }
                        var longitude = $("<p>").text("Longitude of " + dataCode.name + " is " + dataCode.point.lon).css("color", "blue");
                        var latitude = $("<p>").text("Lattitude of " + dataCode.name + "is" + dataCode.point.lat).css("color", "blue");
                        var rate = $("<p>").text("Rate of the bar is " + dataCode.rate).css("color", "blue");
                        // var barMap = $("<iframe>").attr("src", "https://www.openstreetmap.org/?mlat=41.995537&amp;mlon=21.434052#map=17/41.99614/21.43348");
                        // var barMap = $("<iframe>").attr("src","https://www.google.com/maps/@41.9845181,21.4653982,14.83z");
                        var barMap = $("<iframe>").attr("src", "https://opentripmap.com/en/#17/" + dataCode.point.lat + "/" + dataCode.point.lon);

                        var button = $("<button>").text("BACK");
                        barMap.css({
                            width: "650px",
                            height: "500px"
                        })
                        button.on("click", () => {
                            $("#barDetails").html("");

                        })
                        button.css({
                            position: "absolute",
                            top: "20px",
                            right: "50px",
                            border: "2px solid blue",
                            padding: "5px"
                        })

                        var div = $("<div>").attr("id", "barDetails");
                        rightSide.append(div);

                        div.append(image);
                        div.append(longitude);
                        div.append(latitude);
                        div.append(rate);
                        div.append(barMap);
                        div.append(button);

                        console.log(image);


                    })


                })
                hotels.on("click", async () => {
                    var data = await this.buisnesObj.resolveHotelsData();
                    console.log(data);

                    $("body").html("");
                    var body = $("body");

                    var rootHotels = $("<div>").attr("class", "rootHotels");
                    rootHotels.css({
                        display: "flex",
                        backgroundImage: "url(background1.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: "0.8",
                        textAlign: "center"

                    })
                    body.append(rootHotels);
                    var leftSideHotels = $("<div>").css({
                        backgroundColor: "azure",
                        fontFamily: "Oswald",

                    })
                    var titleHotels = $("<h2>").text("Results for Hotels: ");
                    var titleHotels1 = $("<h3>").text("Press the code for more info:");
                    var rightSideHotels = $("<div>")
                    rootHotels.append(leftSideHotels);
                    rootHotels.append(rightSideHotels);
                    leftSideHotels.append(titleHotels);
                    leftSideHotels.append(titleHotels1);



                    for (var i = 1; i < data.length; i++) {
                        var hotelName = $('<div>').text(i + "." + data[i].name).attr("class", "hotelsName");
                        var hotelCode = $('<span>').text(data[i].xid).attr("class", "codeName");
                        var hotelDistance = $("<span>").text("The distance from center is " + data[i].dist + " meters").attr("class", "distance");
                        leftSideHotels.append(hotelName);
                        leftSideHotels.append(hotelCode);
                        leftSideHotels.append(hotelDistance);

                        hotelCode.css("color", "blue");
                        // hotelDistance.css("color", "red");
                    }

                    $(".codeName").on("click", async (event) => {
                        console.log($(event.target).text());

                        var hotelData = await this.buisnesObj.resolveCodeObj($(event.target).text());
                        console.log(hotelData);
                        var imageHotel;
                        if (hotelData.image != undefined) {
                            imageHotel = $("<a>").attr("href", hotelData.image).text("View Hotels image");
                            // var imageHotel = $("<p>").text("Hotel image:" + hotelData.image);

                        }
                        else {
                            imageHotel = $("<p>").text("No available image for " + hotelData.name);
                        }

                        var bookHere;
                        if (hotelData.url != undefined) {

                            bookHere = $("<a>").attr("href", hotelData.url).text("Book here:");
                            bookHere.css({
                                position: "absolute",
                                top: "15px",
                                right: "50px",
                                border: "2px solid blue",
                                padding: "5px"
                            })
                        }
                        else {
                            bookHere = $("h3").text("No available booking info for " + hotelData.name);
                        }
                        var longitude = $("<p>").text("Longitude of " + hotelData.name + " is " + hotelData.point.lon);
                        var latitude = $("<p>").text("Lattitude of " + hotelData.name + "is" + hotelData.point.lat);
                        var rate = $("<p>").text("The rate of " + hotelData.name + " is " + hotelData.rate);
                        // $("body").html("");
                        // var body = $("body");
                        var buttonHotel = $("<button>").text("BACK");

                        var div = $("<div>").css("id", "hotelDetails");
                        rightSideHotels.append(div);
                        buttonHotel.on("click", () => {
                            div.html("");
                        })
                        buttonHotel.css({
                            position: "absolute",
                            top: "60px",
                            right: "50px",
                            border: "2px solid blue",
                            padding: "5px"

                        })
                        var hotelMap = $("<iframe>").attr("src", "https://opentripmap.com/en/#17/" + hotelData.point.lat + "/" + hotelData.point.lon);

                        // var button = $("<button>").text("BACK");
                        hotelMap.css({
                            width: "650px",
                            height: "500px"
                        })
                        //      div.append(imageHotel);
                        div.append(imageHotel);
                        div.append(longitude);
                        div.append(latitude);
                        div.append(rate);
                        div.append(buttonHotel);
                        div.append(bookHere);
                        div.append(hotelMap);
                        // div.append(hotelDistance);
                        //      console.log(image);
                    })
                })
            
            // }
        // })
    })
    }
}
