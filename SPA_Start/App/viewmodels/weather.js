define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    return {
        displayName: 'Weather',
        City: ko.observable(),
        wMain: ko.observable(),
        wDesc: ko.observable(),
        wLon: ko.observable(),
        wLat: ko.observable(),
        activate: function () {
            var that = this;

            that.getWeather('Coimbatore', function (data) {
                that.City(data.city);
                that.wLat(data.coord.lat);
                that.wLon(data.coord.lon);
                that.wDesc(data.weather[0].description);
                that.wMain(data.weather[0].main);
            });

        },
        getWeather: function (city, callback) {
            var url = 'http://api.openweathermap.org/data/2.5/weather';
            $.ajax({
                dataType: "jsonp",
                url: url,
                jsonCallback: 'jsonp',
                data: { q: city },
                cache: false,
                success: function (data) {
                    data.city = city;
                    callback(data);
                }
            });
        }
    };
});