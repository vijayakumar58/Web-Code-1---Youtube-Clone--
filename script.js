let division = document.createElement("div");
division.setAttribute("class","container-lg");
division.setAttribute("id","main");

let division1=document.createElement("div");
division1.setAttribute("class","division1");

let navbar=document.createElement("nav");
 navbar.setAttribute("class","navbar navbar-dark bg-white");

let h1tag=document.createElement("h1");
h1tag.setAttribute("class","topichead");
h1tag.innerHTML="WELCOME TO YOUTUBE APP"

let division2=document.createElement("div");
division2.setAttribute("class","youtubeentry");

let but1=document.createElement("button");
but1.setAttribute("type","submit");
but1.setAttribute("id","page1");
but1.setAttribute("onclick","openyoutube()");

let atag=document.createElement("a");
atag.setAttribute("class","newpage");
atag.innerHTML='<div class="container-lg"></div>';

let itag=document.createElement("i");
itag.setAttribute("class","fab fa-youtube");
itag.setAttribute("id","youfont");

navbar.append(h1tag);
division1.append(navbar);
division.append(division1);
let brtag=document.createElement("br");
but1.append(itag);
division2.append(but1);
 division.append(division2);
document.body.append(division);


async function youtubeData(){
    var you=await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=UUK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyB0CDfq-hhQx57j8S8uH7-SKxYbPohsq-Y`);
    var result=await you.json();
    console.log(result);

    openyoutube=()=>{
         document.getElementById("page1")
    }
    
}
youtubeData();