var bio = {
  "name": "Zakir Khan",
  "role": "Web Developer",
  "contacts": {
  	"email": "Zakir5050@gmail.com",
  	"github": "Zakir5050",
    "location": "Dallas,Texas",
    "mobile": "2147279299",
    "twitter": "N/A",
    
  },
  "welcomeMessage": "Welcome to my resume!",
  "skills": [
  "CSS", "HTML5", "Bootstrap", "JavaScript", "jQuery", "Python","PHP", "MS Windwos Server", "SQL", "Linux", "Hadoop",
  ],
  "bioPic": "images/fry.jpg"
}

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formattedName + " " + formattedRole);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedMobileobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedTwitterwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

  $("#topContacts, #footerContacts").append(formattedEmail);
  $("#topContacts, #footerContacts").append(formattedGitHub);
  $("#topContacts, #footerContacts").append(formattedLocation);
  $("#topContacts, #footerContacts").append(formattedMobileobile);
  $("#topContacts, #footerContacts").append(formattedTwitterwitter);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
}

var education = {
  schools: [
  {
    "name": "National University",
    "location": "Dhaka",
    "degree": "BA",
    "major": ["Commerce"],
    "dates": "1998",
    "url": "http://www.nu.edu.bd/"
  }
  ],
  onlineCourses: [
  {
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": "11/2014",
    "url": "https://www.udacity.com/course/nd001"
  },
  {
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "dates": "11/2014",
    "url": "https://www.udacity.com/course/ud304"
  },
  {
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": "11/2014",
    "url": "https://www.udacity.com/course/ud804"
  },
  {
    "title": "Intro to jQuery",
    "school": "Udacity",
    "dates": "12/2014",
    "url": "https://www.udacity.com/course/ud245"
  }
  ]  
}

education.display = function(){
  $("#education").append(HTMLschoolStart);
  $("#education").before(HTMLeducationButton);
  for (school in this.schools) {
    var inst = this.schools[school];

    var formattedSchoolName = HTMLschoolName.replace("%data%", inst.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", inst.degree);
    $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", inst.dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", inst.location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", inst.major);
    $(".education-entry:last").append(formattedSchoolMajor);
  }

  $(".education-entry:last").append(HTMLonlineClasses);
  for (course in this.onlineCourses) {
    var inst = this.onlineCourses[course];

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", inst.title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", inst.school);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", inst.dates);
    $(".education-entry:last").append(formattedOnlineDates);
    var formattedOnlineURL = HTMLonlineURL.replace(/%data%/g, inst.url);
    $(".education-entry:last").append(formattedOnlineURL);
    $(".education-entry:last").append($("<hr/>"));
  }
}

var projects = {
  "projects": [
  {
    "title": "Udacity - Mockup to Website",
    "dates": "11/2014",
    "description": "Udacity - Mockup to Website",
    "images": [
    "images/mock.png"
    ]
  }
  ]
}

projects.display = function() {
  for (project in this.projects) {
    $("#projects").append(HTMLprojectStart);

    $("#projects").before(HTMLprojectButton);

    var inst = projects.projects[project];

    var formattedTitle = HTMLprojectTitle.replace("%data%",inst.title);
    var formattedDates = HTMLprojectDates.replace("%data%",inst.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",inst.description);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);

    if (inst.images.length > 0) {
      for (image in inst.images) {
        var formattedImage = HTMLprojectImage.replace("%data%", inst.images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

var work = {
  jobs: [
  {
    "employer": "AT&T",
    "title": "Manager Network Ops",
    "description": "Implement  U-Verse  OS security Patches and vendor fixes on 14K+ servers in entire U-verse network to prevent hackers and meet AT&T gold standard.",
    "dates": "October 2007 - Present",
    "location": "Irving, Texas"
  }
  ]
}

work.display = function() {
  for (job in this.jobs) {
    $("#workExperience").append(HTMLworkStart);

    $("#workExperience").before(HTMLworkButton);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",  work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",  work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

bio.display();
education.display();
projects.display();
work.display();

$(function (){
  $(".toHome").click(function(){
    $("html,body").animate({"scrollTop" : 0},1000);
  });
  $("#workExperienceButton").click( function(){
    $("#workExperience").fadeToggle();
  });
  $("#projectsButton").click( function(){
    $("#projects").fadeToggle();
  });
  $("#educationButton").click( function(){
    $("#education").fadeToggle();
  });
  $("#mapDivButton").click( function(){
    $("#mapDiv").fadeToggle();
  });
});

$("#mapDiv").append(googleMap);
$("#mapDiv").before(HTMLmapButton);