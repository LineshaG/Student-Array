var Student_array =[];
function submit() {
Student_array.push(document.getElementById("Student1").value);
Student_array.push(document.getElementById("Student2").value);
Student_array.push(document.getElementById("Student3").value);
Student_array.push(document.getElementById("Student4").value);
document.getElementById("Student_names").innerHTML = Student_array; 
document.getElementById("submit_button").style.display ="none";
document.getElementById("sort_button").style.display ="inline-block";
}
function sort() {
    Student_array.sort();
    document.getElementById("Student_names").innerHTML = Student_array; 

}
