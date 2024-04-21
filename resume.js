//This  is to check whether the user is logged in
if(localStorage.getItem("Username") == null){
    window.location.href = "form.html"
}

var apiUrl = "http://localhost:3000/resume";

var id=0;
var cid = 0;
var response;

    async function getMyData(){
        
        var response = await axios.get(apiUrl);
        var data = response.data[id];
        cid=id;
        console.log(data);
        if(id == 0){
            document.getElementById("prev").classList.add("hide");;
        }
        
        if(id == 5){
            document.getElementById("next").classList.add("hide");;
        }
        
        if(id>0 && id<5){
            document.getElementById("prev").classList.remove("hide");
            document.getElementById("next").classList.remove("hide");
        }
        document.getElementById("cname").innerHTML = data.basics.name;
        document.getElementById("applied-for").innerHTML = data.basics.AppliedFor;
        document.getElementById("mob").innerHTML = data.basics.phone;
        document.getElementById("email").innerHTML = data.basics.email;
        document.getElementById("li").href = data.basics.profiles.url;
        document.getElementById("li").innerHTML = data.basics.profiles.network;

        var techSkill = document.getElementById("tech");
        techSkill.innerHTML = "";
        data.skills.keywords.forEach(element => {
            var skill = document.createElement("li");
            skill.innerHTML = element;
            techSkill.appendChild(skill);
        });
        var hobbies = document.getElementById("hobbies");
        hobbies.innerHTML = "";
        data.interests.hobbies.forEach(element => {
            var hobby = document.createElement("li");
            hobby.innerHTML = element;
            hobbies.appendChild(hobby);
        });

        document.getElementById("comp-name").innerHTML = data.work['Company Name'];
        document.getElementById("comp-pos").innerHTML = data.work.Position;
        document.getElementById("cs-date").innerHTML = data.work['Start Date']
        document.getElementById("ce-date").innerHTML = data.work['End Date']
        document.getElementById("comp-sum").innerHTML = data.work.Summary;
        document.getElementById("p-name").innerHTML = "<b>"+data.projects.name + " : </b>";
        document.getElementById("p-des").innerHTML = data.projects.description;

        document.getElementById("clg").innerHTML = data.education.UG.institute;
        document.getElementById("deg").innerHTML = data.education.UG.course;
        document.getElementById("d-from").innerHTML = data.education.UG['Start Date'];
        document.getElementById("d-to").innerHTML = data.education.UG['End Date'];
        document.getElementById("d-cgpa").innerHTML = data.education.UG.cgpa;

        document.getElementById("s1-ins").innerHTML = data.education['Senior Secondary'].institute;
        document.getElementById("s1-cgpa").innerHTML = data.education['Senior Secondary'].cgpa;
        document.getElementById("s2-ins").innerHTML = data.education['High School'].institute;
        document.getElementById("s2-cgpa").innerHTML = data.education['High School'].cgpa;

        document.getElementById("ic").innerHTML = data.Internship['Company Name'];
        document.getElementById("ip").innerHTML = data.Internship.Position;
        document.getElementById("is").innerHTML = data.Internship['Start Date']
        document.getElementById("ie").innerHTML = data.Internship['End Date']
        document.getElementById("i-sum").innerHTML = data.Internship.Summary;

        var achievement = document.getElementById("achieve");
        achievement.innerHTML = "";
        data.achievements.Summary.forEach( elememt => {
            var ach = document.createElement("li");
            ach.innerHTML = elememt;
            achievement.appendChild(ach);
        })
    }

getMyData();

function logout(){
    console.log(localStorage.clear());
    window.location.href = "form.html";
}

function next(){
    id++;
    getMyData();
}

function prev() {
    id--;
    getMyData();
}

async function findElement(){
    
    var response = await axios.get(apiUrl);
    var searchElement = document.getElementById("search").value;
    console.log(response);
    console.log(searchElement);
    response.data.forEach( temp => {
        console.log(temp.basics.AppliedFor.toLowerCase()+ " "+searchElement.toLowerCase() );
        if(temp.basics.AppliedFor.toLowerCase() === searchElement.toLowerCase()){
            id = temp.id-1;
            getMyData();
        }
    })
    if(id==cid){
        document.getElementById("r1").classList.add("hide");
        document.getElementById("r2").classList.add("hide");
        document.getElementById("r3").classList.add("hide");
        document.getElementById("emoj").classList.remove("hide")
        document.getElementById("next").classList.add("hide");
        document.getElementById("prev").classList.add("hide");
    }
    else{
        document.getElementById("r1").classList.remove("hide");
        document.getElementById("r2").classList.remove("hide");
        document.getElementById("r3").classList.remove("hide");
        document.getElementById("emoj").classList.add("hide");
        document.getElementById("next").classList.remove("hide");
        document.getElementById("prev").classList.remove("hide");
    }
    console.log(id);
    
}