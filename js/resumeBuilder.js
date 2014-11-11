var bio = {
    "name": "Chris Hammersley",
    "role": "Director of E-Commerce",
    "contacts" : {
        "mobile": "206-734-4548",
        "email": "chammers@gmail.com",
        "github": "chris-hammersley",
        "twitter": "mediazombi",
        "location": "Seattle"
        },
    "welcomeMessage": "Hi. I'm a veteran in the field of taking complex data sets and making them actionable. Then I translate those actions into new front-end design UI.",
 //   "skills": [
 //       "E-Commerce", "Digital Marketing", "Program Management", "Google Analytics", "Data Visualization", "Email Nurturing"],
    "skills": [
        {name: "E-Commerce", value: 0.8},
        {name: "Digital Marketing", value: 0.6},
        {name: "Program Management", value: 0.8},
        {name: "Google Analytics", value: 0.7},
        {name: "Data Visualization", value: 0.4},
        {name: "Email Nurturing", value: 0.4}
        ],
    "pic": "images/bio-pic.jpg"
};

// BUILD SKILLS CHART
/*   formatSkills = function() {
 //     $('#skills').append(HTMLskillHeader);

      var skills          = bio.skills,
      skillSection        = $('.skills:last'),
      formattedSkillError = '<p>Skill-less at the moment. Check back soon.</p>',
      formattedSkillItem;

      if (skills && skills.length > 0) {
        for (var i in skills) {
          formattedSkillItem = HTMLskillItem.replace('%data%', skills[i][0]).replace('%value%', skills[i][1]).
                                             replace('%style%', (458 * skills[i][1]).toFixed(1));
          
          skillSection.append(formattedSkillItem);
        }
        skillSection.append(HTMLskillFooter);

        return formattedSkillItem;
      } else {
        skillSection.append(formattedSkillError);
        $('#skills').hide();

        return formattedSkillError;
      }
    }(),

var callback = function(){
  $('.item-skills').each(function(){
    newWidth = $(this).parent().width() * $(this).data('percent');
    $(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
  });

$("#skills").ready(callback);

var resize;
window.onresize = function() {
  clearTimeout(resize);
  resize = setTimeout(function(){
    callback();
  }, 100);
};
$('.thumbnail').on('click', function() {
  var index = $(this).attr('data-index');
  $('.item').each(function(i) {
    $(this).removeClass('active');

    if (i == index) {
      $(this).addClass('active');
    }
  });
});
*/

// NAME, ROLE, PIC & WELCOME MESSAGE

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);

// CONTACT INFO TOP & BOTTOM
// need to make this a function
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").prepend(formattedLocation);

// NEW SKILLS
/*
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for (var i = 0; i < bio.skills.length; ++i) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
}
*/

/* SKILLS CODE CALLED FROM ARRAY */
$("#header").append("<h3 id='skillsH3'>Skills at a Glance:</h3>");

bio.display = function() {
    for (skill in bio.skills) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill].name);
    $("#skills").append(formattedSkill);
    /* ORIGINAL SKILLS CODE
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill); */
    }
}

bio.display();

var education = {
    "schools": [
        {
            "name": "The New School",
            "location": "New York, NY",
            "degree": "Master of Arts",
            "major": "Media Studies",
            "dates": "2000-2003"
        },
        {
            "name": "Loyola University",
            "location": "Chicago, IL",
            "degree": "Bachelor of Arts",
            "major": "Communication",
            "dates": "1989-1993"
        }
    ],
    "courses": [
        {
            "title": "Front-end Web Development",
            "school": "Udacity.com",
            "dates": "December 2014",
            "url": "https://www.udacity.com/course/viewer#!/c-nd001"
        },
        {
            "title": "Data Visualization Theory: A Practical Introduction",
            "school": "University of Washington",
            "dates": "December 2014",
            "url": "http://www.pce.uw.edu/courses/data-visualization-theory.html"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Words &amp Pictures App",
            "dates": "October, 2014",
            "description": "Words &amp Pictures is an anagram app.",
            "images": [
                "images/1.jpg",
                "images/2.jpg"
            ]
        },
        {
            "title": "Project 2",
            "dates": "November, 2014",
            "description": "Project 2 is an interactive resume.",
            "images": [
                "images/3.jpg",
                "images/4.jpg"
            ]
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "ClickSafety",
            "title": "Director of E-Commerce &amp Online Marketing",
            "location": "Walnut Creek, CA",
            "dates": "2012 - Current",
            "description": "Responsible for rapid growth of online sales channel."
        },
        {
            "employer": "Ion Training",
            "title": "President/Founder",
            "location": "Seattle, WA",
            "dates": "2008-2012",
            "description": "Managed an educational-based creative content company using storytelling as foundation for connecting businesses &amp brands with their customers."
        },
        {
            "employer": "BrickFactor",
            "title": "President/CEO",
            "location": "New York, NY",
            "dates": "2006-2007",
            "description": "Started a systems integration company focused on search technologies for online retail, technology &amp media industries."
        },
        {
            "employer": "B&ampH Photo Video",
            "title": "VP, New Media",
            "location": "New York, NY",
            "dates": "2003-2006",
            "description": "Managed an online retail research &amp development team tasked with achieving long-term customer retention."
        }
    ]
}

// DISPLAY WORK EXPERIENCE DETAILS

work.display = function() {
    for (job in work.jobs) {
        // creates new div for each job
        $("#workExperience").append(HTMLworkStart);
        // combines employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        // adds in job dates
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        // adds in location
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        // adds in job description
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
        }
    }

work.display();

// DISPLAY PROJECT DETAILS

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        //images are in an array, so code accordingly
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]); 
                $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }

projects.display();

// DISPLAY EDUCATION DETAILS

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }

// DISPLAY ONLINE COURSE DETAILS (SAME LOOP)

        $("#education").append(HTMLonlineClasses);
        for (course in education.courses) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.courses[course].title);
            $(".education-entry:last").append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.courses[course].school);
            $(".education-entry:last").append(formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", education.courses[course].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.courses[course].url);
            $(".education-entry:last").append(formattedURL); 
        }
    }

education.display();

// DISPLAY ONLINE COURSE DETAILS
/*
education.display = function() {
    for (course in education.courses) {
//      $("#online").append(HTMLonlineClasses); this replicates the h3 tag for each course. added new div to index.html
        $("#online").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.courses[course].title);
        $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.courses[course].school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.courses[course].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.courses[course].url);
        $(".education-entry:last").append(formattedURL);    
    }
}

education.display();
*/

// DISPLAY GOOGLE MAP OF LOCATIONS
$("#mapDiv").append(googleMap);

// RETURN WORK LOCATIONS

function locationizer(work_object) {
    var locationArray = [];
    for (job in work_object.jobs) {
        var newLocation = work_object.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

// INTERNATIONAL NAME BUTTON
function inName() {
    splitName = bio.name.trim().split(" ");
    console.log(name);
    splitName[1] = splitName[1].toUpperCase();
    splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
    return splitName[0] + " " + splitName[1];
}

$("#main").append(internationalizeButton);