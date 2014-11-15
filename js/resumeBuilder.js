var bio = {
    "name": "Chris Hammersley",
    "role": "Director of E-Commerce & Online Marketing",
    "contacts" : {
        "mobile": "206-734-4548",
        "email": "chammers@gmail.com",
        "github": "chris-hammersley",
        "twitter": "mediazombi",
        "location": "Seattle"
        },
    "welcomeMessage": "Hi. I'm an online veteran in the field of taking complex data sets and making them actionable. Then I translate those actions into new front-end design UI.",
    "skills": [
        {
            "Skill": "E-Commerce",
            "Level": "Advanced",
            "How Often": "Daily"
        },
        {
            "Skill": "Google AdWords",
            "Level": "Advanced",
            "How Often": "Daily"
        },
        {
            "Skill": "Google Analytics",
            "Level": "Advanced",
            "How Often": "Daily"
        },
        {
            "Skill": "Search Engine Optimization",
            "Level": "Advanced",
            "How Often": "Monthly"
        },
        {
            "Skill": "Content Strategy",
            "Level": "Advanced",
            "How Often": "Monthly"
        },
        {
            "Skill": "LAMP Technologies",
            "Level": "Intermediate",
            "How Often": "Monthly"
        },

        {
            "Skill": "Javascript",
            "Level": "Beginner",
            "How Often": "Weekly"
        },
        {
            "Skill": "HTML/CSS",
            "Level": "Intermediate",
            "How Often": "Weekly"
        }
        ],
    "pic": "images/bio-pic.jpg"
};

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
            "title": "Words vs. Images App",
            "dates": "October, 2014",
            "description": "Need to stimulate your brain? Words vs Images is an anagram app that challenges you to create words that fit the image displayed.",
            "images": "images/1.jpg"
        },
        {
            "title": "Find Your aRt Map",
            "dates": "November, 2014",
            "description": "Ever wander across a late-night art bazaar and found inspiration? We have, and it's truly remarkable. Now you can eat your art whenever you want with the aRt Map!",
            "images": "images/2.jpg"
        },
        {
            "title": "What Job Does the Future Hold?",
            "dates": "Coming in February, 2015",
            "description": "Predictive text is so passe. Analyze your education, skills, passion &amp job history; then see your 5-year career path!",
            "images": "images/3.jpg"
        },
        {
            "title": "Into the Unknown",
            "dates": "Coming in April, 2015",
            "description": "Skunk Works. R&D. Mad Scientist. Euphemisms for the Unknown. What will you find when you start the app? We can't tell you. You'll have to take a leap of faith...",
            "images": "images/4.jpg"
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
            "description": "Responsible for rapid growth of e-commerce sales for an online training company."
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
        },
        {
            "employer": "Search for Freedom Documentary Film",
            "title": "Co-Producer",
            "location": "New York, NY",
            "dates": "2002-2003",
            "description": "Co-Produced, co-wrote and co-edited a 60-minute documentary by filmmaker Munizae Jahangir."
        },
        {
            "employer": "iBeam/Williams Communication",
            "title": "Manager, Media Training",
            "location": "New York, NY",
            "dates": "2000-2002",
            "description": "Managed rollout of corporate learning management system and all associated multimedia training to 100+ employees worldwide."
        },
        {
            "employer": "APV/Invensys",
            "title": "PM/Technical Trainer",
            "location": "Chicago, IL",
            "dates": "1997-2000",
            "description": "Delivered multiple projects including an e-commerce site for sales of after-market spare parts and the national rollout of a sales force automation tool."
        }
    ]
}

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

// SKILL SUMMARY CALLED FROM NEW ARRAY

$("#header").append(HTMLskillsStart);

bio.display = function() {
    for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill].Skill);
    $("#skills").append(formattedSkill);
    }
}

bio.display();


// DISPLAY WORK DETAILS

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
        $(".project-entry:last").prepend(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
 //       if (projects.projects[project].images.length > 0) {
 //           for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images); 
        $(".project-entry:last").prepend(formattedImage);
 //               }
   //         }
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

// DISPLAY ONLINE COURSE DETAILS (WITHIN EDUCATION LOOP)

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

// BUILD AND DISPLAY SKILLS TABLE
      
    // TABLE HEADER
    var thead = d3.select("thead").selectAll("th")
        .data(d3.keys(bio.skills[0]))
        .enter().append("th").text(function(d){return d});
    // CREATE ROWS
    var tr = d3.select("tbody").selectAll("tr")
        .data(bio.skills).enter().append("tr")
    // CREATE CELLS
    var td = tr.selectAll("td")
        .data(function(d){return d3.values(d)})
        .enter().append("td")
        .text(function(d) {return d})

    // CHANGE BACKGROUND COLOR ALTERNATE ROWS USING JQUERY
    $("tr:even").css("background-color", "#EAE3DE");

// MATCH DIV HEIGHTS

    $("#projects").height($("#workExperience").height());
    $("#skills-table").height($("#education").height());

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