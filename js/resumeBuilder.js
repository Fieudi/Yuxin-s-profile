 var bio = {
	"name" : "Yuxin(Ada) Wen",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "917-912-3711",
		"email" : "yw1420@nyu.edu",//my computer doesn't show any character
		//"github" : "Ada's github",
		"location" : "New York"
	},
	"welcomeMessage" : "Seeking for software engineer position. Working experience on Web application development. Major of computer engineering at master's level with experience in both software and hardware. Advanced on basic computer science knowledge and sogtware design.",
	"skills" : ["JavaScript", "HTML", "CSS", "Java", "JSON", "AJAX"],
	"biopic" : "images/Ada.jpg"
 };

 var education = {
	"schools" : [{
			"name" : "New York University",
			"location" : "New York",
			"degree" : "master",
			"majors" : ["Computer Engineering"],
			"dates" : "Sempterber, 2013 - May, 2015",
			"url" : "http://www.nyu.edu/"
		},
		{
			"name" : "Nanjing University of Aeronautics & Astronautics(NUAA)",
			"location" : "China",
			"degree" : "Bachelor",
			"majors" : ["Engineering in Testing and Control Technologies Instrument"],
			"dates" : "Sempterber, 2009 - June, 2013",
			"url" : "http://iao.nuaa.edu.cn/"
		}],
	"onlineCourses" : [{
			"title" : "Front-End Web Developer",
			"school" : "Udacity", 
			"dates" : "July, 2016", 
			"url" : "https://www.udacity.com/"
		}]
 };
 
 var work = {
	 "jobs" : [{	
			"employer" : "CloudParticle",
			"title" : "Front-end Developer",
			"location" : "MountainView, California",
			"dates" : "May, 2016 - now",
			"description" : "Develop Web Application for start-up companies. Design and develop the layout using CSS3 and HTML5. Design and implement webpage effect using JavaScript/ jQuery. Write application level code to interact with APIs, Web services using AJAX. Optimize the website timing and layout. Communicate with clients to improve the user interface."
		},
		{
			"employer" : "Green Light Career Inc",
			"title" : "Software Developer",
			"location" : "Queens, New York",
			"dates" : "August, 2015 - May, 2016",
			"description" : "Developed and maintain the front-end functionality of websites. Developed web application with JavaScript, HTML and CSS. Tested web applications. Fetched data from server based on description created by users. Displayed the query with table on excel."
		},
		{
			"employer" : "Professor Artan's Lab at NYU",
			"title" : "Design Volunteer",
			"location" : "New York, New York",
			"dates" : "January - May, 2014",
			"description" : "Generated simulation vectors using Python based on circuits and specific algorithm to do test. Performed data analysis by using machine learning tools such as MSTLAB."
		}]
 };
 
 var projects = {
	 "projects" : [{
			"title" : "Classic Arcade Game - Frogger Game (HTML, CSS, JavaScript)",
			"dates" : "April - May, 2016",
			"description" : "Built the classic Frogger game wich has several enemies in different speeds and a player can choose different features. Designed object-Oriented Programming for enemies and players by JavaScript. Timed games in limited time, loaded iamges and game loop functionality. Designed the game UI with HTML5 and CSS3.",
			"images" : ["images/game.png"]
		},
		{
	        "title" : "Web Crawler with Focused Crawling Strategy(Python)",
			"dates" : "January - February, 2015",
			"description" : "Contacted Google Search Engine with Google AJAX Search API. Parsed url links and words in web pages with BeautifulSoup, using BM25 algorithm to calculate url's relevance score. Stored url-score pair into a max-heap data structure. Downloaded page with highest score everytime using urlib Module. Outputted files contain standard metadata: url, visited time , word-length.",
			"images" : ["images/programming.jpg"]
		}]
 };

 var data = '%data%';
 bio.display = function(){	
	 var formattedBiosRole = HTMLheaderRole.replace(data, bio.role);
	 $('#header').prepend(formattedBiosRole);
	 var formattedBiosName = HTMLheaderName.replace(data, bio.name);
	 $('#header').prepend(formattedBiosName);

	 var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	 $('#topContacts, #lets-connect').append(formattedMobile);
	 var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	 $('#topContacts, #lets-connect').append(formattedEmail);
	 //var formmattedGithub = HTMLgithub.replace(data, bio.contacts.github);
	 //$('#topContacts, #lets-connect').append(formmattedGithub);
	 var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
	 $('#topContacts, #lets-connect').append(formattedLocation);
	 
	 var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
	 $('#header').append(formattedBioPic);
	 var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
	 $('#header').append(formattedWelcomeMsg);
	 $('#header').append(HTMLskillsStart);
	 bio.skills.forEach(function(skill){
		var formattedSkills = HTMLskills.replace(data, skill);
		$('#header').append(formattedSkills);
	 });//insert skill in HTMLskillsStart ul
	 
 };
 
 education.display = function(){
	 education.schools.forEach(function(school){
		$('#education').append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace(data, school.name);
		var formattedSchoolDegree = HTMLschoolDegree.replace(data, school.degree);
		var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
		$('.education-entry:last').append(formattedNameDegree);
		var formattedSchoolLocation = HTMLschoolLocation.replace(data, school.location);
	    $('.education-entry:last').append(formattedSchoolLocation);
		var formattedSchoolDates = HTMLschoolDates.replace(data, school.dates);
		$('.education-entry:last').append(formattedSchoolDates);
		for(var major = 0; major < school.majors.length; major ++){
			var formattedSchoolMajor = HTMLschoolMajor.replace(data, school.majors[major]);
			$('.education-entry:last').append(formattedSchoolMajor);
		}
	 });
	 
	 education.onlineCourses.forEach(function(course){
		var formattedOnlineTitle = HTMLonlineTitle.replace(data, course.title);
		$('.education-entry:last').append(formattedOnlineTitle);
		var formattedOnlineDates = HTMLonlineDates.replace(data, course.dates);
		$('.education-entry:last').append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace(data, course.url);
		$('.education-entry:last').append(formattedOnlineURL);
		var formattedOnlineSchool = HTMLonlineSchool.replace(data, course.school);
		$('.education-entry:last').append(formattedOnlineSchool);
	 });
 };
 
 
 work.display = function(){
	 work.jobs.forEach(function(job){ 
		$('#workExperience').append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace(data, job.employer);
		var formattedWorkTitle = HTMLworkTitle.replace(data, job.title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$('.work-entry:last').append(formattedEmployerTitle); 
		var formattedWorkDates = HTMLworkDates.replace(data, job.dates);
		$('.work-entry:last').append(formattedWorkDates);
		var formattedWorkLocation = HTMLworkLocation.replace(data, job.location);
		$('.work-entry:last').append(formattedWorkLocation);
		var formattedWorkDescription = HTMLworkDescription.replace(data, job.description);
		$('.work-entry:last').append(formattedWorkDescription);
     });
 };
 
 projects.display = function(){
	 projects.projects.forEach(function(project){
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace(data, project.title);
		$('.project-entry:last').append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace(data, project.dates);
		$('.project-entry:last').append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace(data, project.description);
		$('.project-entry:last').append(formattedProjectDescription);
		for(var img = 0; img < project.images.length; img ++){
			var formattedProjectImage = HTMLprojectImage.replace(data, project.images[img]);
			$('.project-entry:last').append(formattedProjectImage);
		}
	 });
	 
 };
 
 bio.display();
 education.display();
 work.display();
 projects.display();
 $("#mapDiv").append(googleMap);
