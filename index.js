alert("Welcome to my Portfolio")
//the profile background color changes//
var photo=document.querySelector(".profile");
var colors=["red","orange","yellow","green","blue","indigo","violet"];
var myName=document.querySelector("#intro span");
var count=0;
colorChanger=function(){
    if(count>=colors.length){
        count=0;
    }
    photo.style.background=colors[count];
    count++;
    myName.style.color=colors[count];
}
setInterval(colorChanger,1500)
//the hire button//
var button=document.querySelector("#button a");
var btnColors=["black","red"];
var btnCount=0;
btnblinker=function(){
    if(btnCount>=btnColors.length){
        btnCount=0;
    }
    button.style.background="black";
    button.style.color=btnColors[btnCount];
    btnCount++;
}
setInterval(btnblinker,500);
//the titles display//
var titles1=document.querySelector("#titles1");
var titles=["Wed Developer",".","..","...","Software Engineer",".","..","...","Web Designer",".","..","..."];
var titlescount=0;

titlesChanger=function(){
    if(titlescount>=titles.length){
        titlescount=0;
    }
    titles1.innerHTML=titles[titlescount];
    titlescount++;
}
setInterval(titlesChanger,800);
//services section//
var software=document.querySelector("#Software p");
var button1=document.querySelector(".button1 button");
button1.addEventListener('click',button1Click);
function button1Click(){
    software.style.height="350px";
    button1.style.background="red";
    button1.innerHTML="Show Less";
    software.style.background="darkBlue";
    software.style.border="none";
}
button1.addEventListener('dblclick',buttonClicked);
function buttonClicked(){
    software.style.height="100px";
    button1.style.background="blue";
    button1.innerHTML="Show More";
    software.style.background="";
    software.style.border="";
}

var webDevelopment=document.querySelector("#Developer p");
var button2=document.querySelector(".button2 button");
button2.addEventListener('click',button2Click);
function button2Click(){
    webDevelopment.style.height="350px";
    button2.style.background="red";
    button2.innerHTML="Show Less";
    webDevelopment.style.background="darkBlue";
    webDevelopment.style.border="none";
}

button2.addEventListener('dblclick',button2Clicked);
function button2Clicked(){
    webDevelopment.style.height="100px";
    button2.style.background="blue";
    button2.innerHTML="Show More";
    webDevelopment.style.background="";
    webDevelopment.style.border="";

}
var webDesign=document.querySelector("#Designer p");
var button3=document.querySelector(".button3 button");
button3.addEventListener('click',button3Click);
function button3Click(){
    webDesign.style.height="370px";
    button3.style.background="red";
    button3.innerHTML="Show Less";
    webDesign.style.background="darkBlue";
    webDesign.style.border="none";
}
var serviceContainer=document.querySelector(".servicesContainer")

button3.addEventListener('dblclick',button3Clicked);
function button3Clicked(){
    webDesign.style.height="100px";
    button3.style.background="blue";
    button3.innerHTML="Show More";
    webDesign.style.background="";
    webDesign.style.border="";
}
/*the testimonies section*/
var testimoner=document.querySelector("#testimoniesContainer h3");
var testimony=document.querySelector("#testimoniesContainer p");
testimoners=["@Elizabeth Mwalimu","@Joseph Omondi"];
testimonies=["I have seen many software engineers and web developers<br> but Wilfred Mutwiri is my best engineer so far!",
"This guy knows what he is doing, for all the projests that  I've worked with him<br> I can broadly say that I was more than certified. Thank you Wilfred!"];
var testCounter=0;
allTerstimonies=function(){
    if(testCounter>=testimoners.length){
        testCounter=0;
    }
    testimony.innerHTML=testimonies[testCounter];
testimoner.innerHTML=testimoners[testCounter];
testCounter++;
}
setInterval(allTerstimonies,4000);
/*the callout section*/
var callout=document.querySelector(".callout");
var pcallButton=document.querySelector("#pcall button");
var form=document.querySelector("#formCall");
pcallButton.addEventListener('click',displayForm);
 function displayForm(){
callout.style.height="550px";
form.style.opacity=5;
}
var submit=document.querySelector("#submit");
submit.addEventListener('click',submitForm);
function submitForm(){
    alert("Message sent to Wilfred Mutwiri Successfully.\nKindly Check your email for a response in 48 hours.");
}