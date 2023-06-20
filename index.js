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
var btnColors=["grey","yellow"];
var btnCount=0;
btnblinker=function(){
    if(btnCount>=btnColors.length){
        btnCount=0;
    }
    button.style.color=btnColors[btnCount];
    btnCount++;
}
setInterval(btnblinker,500);