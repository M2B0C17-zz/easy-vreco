/*Función initMap, con ella inicializamos nuestro mapa, mostrándolo en el div con id map
	*ZOOM representa el nivel de profundidad de nuestro mapa, entre más zoom más localizado se verá.
	*CENTER contiene la longitud y altitud en que queremos que se muestre nuestro mapa.
*/

  function initMap(){
	  var map = new google.maps.Map(document.getElementById('map'),{

    zoom: 5,
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	});

  var inputL = (document.getElementById('origen'));
    var autocomplete = new google.maps.places.Autocomplete(inputL);
       autocomplete.bindTo('bounds', map);

   var inputR = (document.getElementById('destino'));
    var autocomplete = new google.maps.places.Autocomplete(inputR);
       autocomplete.bindTo('bounds', map);


	/*Dentro de la función initMap(), agregamos la funcion buscar()
		*.getCurrentPosition -> permite al usuario obtener su ubicación actual, el parámetro funcionExito,
		se ejecuta solo cuando el usuario comparte su ubicación, mientras que funcionError se ejecuta
		cuando se produce un error en la geolocalización.
	*/
	function buscar(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}
	document.getElementById("encuentrame").addEventListener("click", buscar);
	var latitud,longitud;

	/*Agregaremos las variables funcionExito, con el que obtendremos nuestra latitud
	o longituf y además crearemos un marcador de nuestra ubicación*/

	var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

	var miUbicacion = new google.maps.Marker({
		position: {lat: latitud, lng:longitud},
		animation: google.maps.Animation.DROP,
		map: map
	});

	/*Aumentaremos la profundidad de visualización de nuestro mapa con map.setZoom y le asignaremos
	un nuevo centro con map.setCenter.
	También añadimos funcionError con un mensaje para el usuario, en caso de que nuestra geolocalización
	falle.
	*/

		map.setZoom(17);
		map.setCenter({lat: latitud,lng: longitud});
	}

	var funcionError = function (error){
		alert("Tenemos un problema con encontrar tu ubicación");
	}

  /* Autocomplete */
  var inicio = (document.getElementById('origen'));
  var autocomplete = new google.maps.places.Autocomplete(inicio);
  autocomplete.bindTo('bounds', map);

  var final = (document.getElementById('destino'));
  var autocomplete = new google.maps.places.Autocomplete(final);
  autocomplete.bindTo('bounds', map);

}
  /*RUTA*/


/*

var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
directionsDisplay.setMap(map);

var onChangeHandler = function() {
  calculateAndDisplayRoute(directionsService, directionsDisplay);
};
document.getElementById("ruta").addEventListener("click",onChangeHandler);

}


  var markerArray = [];

          // Instantiate a directions service.
          var directionsService = new google.maps.DirectionsService;

          // Create a map and center it on Manhattan.
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: {lat: 40.771, lng: -73.974}
          });

          // Create a renderer for directions and bind it to the map.
          var directionsDisplay = new google.maps.DirectionsRenderer({map: map});

          // Instantiate an info window to hold step text.
          var stepDisplay = new google.maps.InfoWindow;

          // Display the route between the initial start and end selections.
          calculateAndDisplayRoute(
              directionsDisplay, directionsService, markerArray, stepDisplay, map);
          // Listen to change events from the start and end lists.
          var onChangeHandler = function() {
            calculateAndDisplayRoute(
                directionsDisplay, directionsService, markerArray, stepDisplay, map);
          };
          document.getElementById('start').addEventListener('change', onChangeHandler);
          document.getElementById('end').addEventListener('change', onChangeHandler);
        }

        function calculateAndDisplayRoute(directionsDisplay, directionsService,
            markerArray, stepDisplay, map) {
          // First, remove any existing markers from the map.
          for (var i = 0; i < markerArray.length; i++) {
            markerArray[i].setMap(null);
          }

          // Retrieve the start and end locations and create a DirectionsRequest using
          // WALKING directions.
          directionsService.route({
            origin: document.getElementById('start').value,
            destination: document.getElementById('end').value,
            travelMode: 'WALKING'
          }, function(response, status) {
            // Route the directions and pass the response to a function to create
            // markers for each step.
            if (status === 'OK') {
              document.getElementById('warnings-panel').innerHTML =
                  '<b>' + response.routes[0].warnings + '</b>';
              directionsDisplay.setDirections(response);
              showSteps(response, markerArray, stepDisplay, map);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }

        function showSteps(directionResult, markerArray, stepDisplay, map) {
          // For each step, place a marker, and add the text to the marker's infowindow.
          // Also attach the marker to an array so we can keep track of it and remove it
          // when calculating new routes.
          var myRoute = directionResult.routes[0].legs[0];
          for (var i = 0; i < myRoute.steps.length; i++) {
            var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
            marker.setMap(map);
            marker.setPosition(myRoute.steps[i].start_location);
            attachInstructionText(
                stepDisplay, marker, myRoute.steps[i].instructions, map);
          }
        }

        function attachInstructionText(stepDisplay, marker, text, map) {
          google.maps.event.addListener(marker, 'click', function() {
            // Open an info window when the marker is clicked on, containing the text
            // of the step.
            stepDisplay.setContent(text);
            stepDisplay.open(map, marker);
          });
  */
