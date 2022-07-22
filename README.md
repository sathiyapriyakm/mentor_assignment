# node- Mentor Assignment APP
<br>

<h3>Deployed URL of the APP</h3>

<a>https://sathya-mentor-assignment-app.herokuapp.com</a>

<h4>1.Write API to create Mentor</h4>

Sample post request:<a>https://sathya-mentor-assignment-app.herokuapp.com/createMentor</a>
post data:{"mentorName":"Sai Mohan"}

sample response:{
    "acknowledged": true,
    "insertedId": "62da4ea8943937c3f6031c58"
}

<h4>2.Write API to create Student</h4>

Sample post request:<a>https://sathya-mentor-assignment-app.herokuapp.com/createStudent</a>
post data:{"studentName":"Nandhini"}

sample response:{
    "acknowledged": true,
    "insertedId": "62da4ef5943937c3f6031c59"
}

<h4>3.Write API to Assign a student to Mentor
    i) Select one mentor and Add multiple Student 
    ii) A student who has a mentor should not be shown in List
</h4>

i)Sample post request:<a>https://sathya-mentor-assignment-app.herokuapp.com/assignMentor</a>
post data:{"mentorName":"Ragav kumar","students":["BoopathiRaja","pavai"]}
sample response:Students are added to mentor

ii) Sample post request:<a>https://sathya-mentor-assignment-app.herokuapp.com/assignMentor</a>
post data:{"mentorName":"Ragav kumar","students":["BoopathiRaja","pavai"]}
sample response:students already have mentor

<h4>4.Write API to Assign or Change Mentor for particular Student
Select One Student and Assign one Mentor
</h4>

i)Sample post request:<a>https://sathya-mentor-assignment-app.herokuapp.com/changeMentor</a>
post data:{"mentorName":"Ragav kumar","students":["BoopathiRaja","pavai"]}
sample response:Students are added to mentor

ii) Sample post request:<a>https://sathya-mentor-assignment-app.herokuapp.com/assignMentor</a>
post data:{"studentName":"Sathiyapriya","mentorName":"Shivaranjini"}
sample response:Mentor changed for student

<h4>5.Write API to show all students for a particular mentor</h4>

i)Sample get  request:<a>https://sathya-mentor-assignment-app.herokuapp.com/getAllStudentsOf/Ragav kumar</a>

sample response:students of Ragav kumar are Nandhini,Sathish,Iniyan,BoopathiRaja,Nandha kumar,Krish,pavai


<h4>5.Home of APP</h4>

i)Sample get  request:<a>https://sathya-mentor-assignment-app.herokuapp.com/</a>

sample response:Welcome to mentor assignment APP




