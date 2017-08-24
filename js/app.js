
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/widgets/Search",
        "dojo/domReady!"
    ], function(
            Map,
            MapView,
            Search
        ) {
        // Code to create the map and view will go here
        var map = new Map({
            basemap: "topo"
            });
        var view = new MapView({
            container: "viewDiv", // Reference to the DOM node that will contain the view - id
            map: map,
            zoom: 3,
            center: [-86.049, 38.485], // longitude, latitude
        });

        var searchWidget = new Search({
            view: view
        });
    
          // Add the search widget to the very top left corner of the view
        view.ui.add(searchWidget, {
            position: "top-left",
            index: 0
        });
        
    });
    