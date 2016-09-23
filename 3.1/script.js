/**
 * Created by siqi on 9/21/16.
 */

/* Create an object representing a student with the following properties
 * Name (string)
 * ID (string)
 * Program (??)
 * Number of courses taken (??)
 * Enrollment status (??)
 * Classes currently taken (??)
 */

var nuStudent1= {
	name:"Giulia",
	ID:"5432",
	program:"Media Innovation",
	coursesTaken:4,
	enrollmentStatus:"enrolled",
	currentClasses: ["studio 3", "documentary", "visualization"]
}

var nuStudent2= {
	name:"Molly",
	ID:"3244",
	program:"IDV",
	coursesTaken:5,
	enrollmentStatus:"not enrolled",
	currentClasses:0,
}

var nuStudents = [nuStudent1, nuStudent2];
/* Now think about how classes might be represented as a Javascript object */