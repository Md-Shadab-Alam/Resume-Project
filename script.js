var About = document.getElementById('about');
var Skill = document.getElementById('skills');
var Education = document.getElementById('Education');
var Projects = document.getElementById('Projects');
var Contact = document.getElementById('contact');


About.addEventListener('click', function(){
    var targetPos=10;
    var currentPos=0;
    var scrollInterval =
    setInterval(function(){
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            return;
        }
        currentPos += 1;
        window.scrollBy(0,10);
    },5)
})


Skill.addEventListener('click', function(){
    var targetPos=60;
    var currentPos=0;
    var scrollInterval =
    setInterval(function(){
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            return;
        }
        currentPos += 1;
        window.scrollBy(0,10);
    },5)
})


Education.addEventListener('click',function(){
    var targetPos=85;
    var currentPos=0;
    var scrollInterval =
    setInterval(function(){
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            return;
        }
        currentPos += 1;
        window.scrollBy(0,10);
    },5)
})


Projects.addEventListener('click',function(){
    var targetPos=152;
    var currentPos=0;
    var scrollInterval =
    setInterval(function(){
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            return;
        }
        currentPos += 1;
        window.scrollBy(0,10);
    },5)
})


Contact.addEventListener('click',function(){
    var targetPos=180;
    var currentPos=0;
    var scrollInterval =
    setInterval(function(){
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            return;
        }
        currentPos += 1;
        window.scrollBy(0,10);
    },5)
})