var HTMLheaderName = "<h2>%data%";
var HTMLheaderRole = "<small class='orange-text'>%data%</small></h2><hr/>";

var HTMLcontactGeneric = "<li><span class='orange-text'>%contact%</span> <span><strong>%data%</strong></span></li>";
var HTMLmobile = "<li><span class='orange-text'>mobile</span> <span><strong>%data%</strong></span></li>";
var HTMLemail = "<li><span class='orange-text'>email</span> <span><strong>%data%</trong></span></li>";
var HTMLtwitter = "<li><span class='orange-text'>twitter</span> <span><strong>%data%</strong></span></li>";
var HTMLgithub = "<li><span class='orange-text'>github</span> <span><strong>%data%</strong></span></li>";
var HTMLblog = "<li><span class='orange-text'>blog</span> <span><strong>%data%</strong></span></li>";
var HTMLlocation = "<li><span class='orange-text'>location</span> <span><strong>%data%</strong></span></li>";

var HTMLbioPic = "<img src='%data%' class='biopic hidden-xs'>";
var HTMLWelcomeMsg = "<h4 class='hidden-xs'><em>%data%</em></h4>";

var HTMLskillsStart = "<h3 class='text-center orange-text'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li><strong>%data%</strong></li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<span class='badge'>%data%</span>";
var HTMLworkLocation = "<div>%data%</div>";
var HTMLworkDescription = "<p>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='#'>%data%</a>";
var HTMLprojectDates = "<span class='badge'>%data%</span>";
var HTMLprojectDescription = "<p>%data%</p>";
var HTMLprojectImage = "<img class='img-responsive' src='%data%'>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<span class='badge'>%data%</span>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em>Major: %data%</em>"

var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<span class='badge'>%data%</span>";
var HTMLonlineURL = "<br><a href='%data%'>%data%</a>";

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='map'></div>";

var HTMLworkButton = "<div class='row'>\
<button class='btn btn-primary active toHome' role='button'>Home</button> \
<button class='btn btn-primary active' role='button' id='workExperienceButton'>Toggle Work Experience</button>\
</div>";

var HTMLprojectButton = "<div class='row'>\
<button class='btn btn-primary active toHome' role='button'>Home</button> \
<button class='btn btn-primary active' role='button' id='projectsButton'>Toggle Projects</button>\
</div>";

var HTMLeducationButton = "<div class='row'>\
<button class='btn btn-primary active toHome' role='button'>Home</button> \
<button class='btn btn-primary active' role='button' id='educationButton'>Toggle Education</button>\
</div>";

var HTMLmapButton = "<div class='row'>\
<button class='btn btn-primary active toHome' role='button'>Home</button> \
<button class='btn btn-primary active' role='button' id='mapDivButton'>Toggle Map</button>\
</div>";

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

var map;

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  function locationFinder() {

    var locations = [];

    locations.push(bio.contacts.location);

    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  function createMapMarker(placeData) {

    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var name = placeData.formatted_address;
    var bounds = window.mapBounds;

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map,marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  }

  function pinPoster(locations) {
    var service = new google.maps.places.PlacesService(map);

    for (place in locations) {

      var request = {
        query: locations[place]
      }

      service.textSearch(request, callback);
    }
  }

  window.mapBounds = new google.maps.LatLngBounds();

  locations = locationFinder();

  pinPoster(locations);
};

window.addEventListener('load', initializeMap);

window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
});
