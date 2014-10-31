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
    "skills": [
        "E-Commerce", " Online Marketing", " SEO &amp PPC", " Google Analytics", " Data Visualization", " Email Nurturing"],
    "pic": "images/bio-pic.jpg"
};

// NAME, ROLE, PIC & WELCOME MESSAGE

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedPic = HTMLbioPic.replace("%data%", bio.pic);

var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);

// CONTACT INFO

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").prepend(formattedLocation);

// SKILLS

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
   $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
   $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
   $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
   $("#skills").append(formattedSkill);
}

var education = {
    "schools": [
        {
            "name": "The New School",
            "city": "New York, NY",
            "degree": "MA",
            "major": "Media Studies",
            "dates": "2000-2003",
            "url": "http://www.newschool.edu"
        },
        {
            "name": "Loyola University",
            "city": "Chicago, IL",
            "degree": "BA",
            "major": "Communication",
            "dates": "1989-1993",
            "url": "http://www.luc.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-end Web Development",
            "school": "Udacity",
            "dates": "2014-2015",
            "url": "https://www.udacity.com/course/viewer#!/c-nd001"
        },
        {
            "title": "Data Visualization Theory: A Pratical Introduction",
            "school": "University of Washington",
            "dates": "2014-2015",
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

// WORK EXPERIENCE

function displayWork () {
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

displayWork();

// RETURN PROJECTS

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

// INTERNATIONAL NAME
function inName() {
    splitName = bio.name.trim().split(" ");
    console.log(name);
    splitName[1] = splitName[1].toUpperCase();
    splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
    return splitName[0] + " " + splitName[1];
}

$("#main").append(internationalizeButton);