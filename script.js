let division = document.createElement("div");
division.setAttribute("class","container-fluid");

let navbar = document.createElement("nav");
navbar.setAttribute("class","flex-div");

let division1=document.createElement("div");
division1.setAttribute("class","nav-left");
let itag1=document.createElement("i");
itag1.setAttribute("class","fas fa-bars");
itag1.setAttribute("id","menu-icon");
let itag2=document.createElement("i");
itag2.setAttribute("class","fab fa-youtube");
itag2.setAttribute("id","logo");
let ptag1=document.createElement("p");
ptag1.setAttribute("class","youtube");
ptag1.innerHTML="<b>YouTube</b>";

let division2=document.createElement("div");
division2.setAttribute("class","nav-middle");
 let division2a=document.createElement("div");
 division2a.setAttribute("class","joinsearch");
 let inputtag1=document.createElement("input");
 inputtag1.setAttribute("type","text");
 inputtag1.setAttribute("placeholder","Search");
 inputtag1.setAttribute("id","inputsearch");
 let itag3=document.createElement("i");
 itag3.setAttribute("class","fa fa-search");
 itag3.setAttribute("id","search");
 let itag4=document.createElement("i");
 itag4.setAttribute("class","fas fa-microphone");

let division3=document.createElement("div");
division3.setAttribute("class","nav-right");
let itag5=document.createElement("i");
itag5.setAttribute("class","fas fa-plus-square");
let itag6=document.createElement("i");
itag6.setAttribute("class","far fa-bell");
let imgtag1=document.createElement("img");
imgtag1.setAttribute("src","image/vijayakumar.jpg");
imgtag1.setAttribute("class","user-icon");

division1.append(itag1,itag2,ptag1);
division2a.append(inputtag1,itag3);
division2.append(division2a,itag4);
division3.append(itag5,itag6,imgtag1);
navbar.append(division1,division2,division3);
division.append(navbar);
document.body.append(division);
  
let division4=document.createElement("div");
division4.setAttribute("class","sidebar");

let division4a=document.createElement("div");
division4a.setAttribute("class","shortcut-links");

let atag1=document.createElement("a");
let itag7=document.createElement("i");
itag7.setAttribute("class","fas fa-home");
let ptag2=document.createElement("p");
ptag2.innerHTML="Home";
let atag2=document.createElement("a");
let itag8=document.createElement("i");
itag8.setAttribute("class","fas fa-fire");
let ptag3=document.createElement("p");
ptag3.innerHTML="Explore";
let atag3=document.createElement("a");
let itag9=document.createElement("i");
itag9.setAttribute("class","fab fa-youtube");
let ptag4=document.createElement("p");
ptag4.innerHTML="subscription";
let atag4=document.createElement("a");
let itag10=document.createElement("i");
itag10.setAttribute("class","fas fa-photo-video");
let ptag5=document.createElement("p");
ptag5.innerHTML="Library";
let atag5=document.createElement("a");
let itag11=document.createElement("i");
itag11.setAttribute("class","fas fa-eye");
let ptag6=document.createElement("p");
ptag6.innerHTML="History";
let atag6=document.createElement("a");
let itag12=document.createElement("i");
itag12.setAttribute("class","fas fa-stream");
let ptag7=document.createElement("p");
ptag7.innerHTML="Playlist";
let atag7=document.createElement("a");
let itag13=document.createElement("i");
itag13.setAttribute("class","fas fa-envelope");
let ptag8=document.createElement("p");
ptag8.innerHTML="Messages";
let atag8=document.createElement("a");
let itag14=document.createElement("i");
itag14.setAttribute("class","fas fa-chevron-down");
let ptag9=document.createElement("p");
ptag9.innerHTML="Show More";
let hrtag=document.createElement("hr");

atag1.append(itag7,ptag2);
atag2.append(itag8,ptag3);
atag3.append(itag9,ptag4);
atag4.append(itag10,ptag5);
atag5.append(itag11,ptag6);
atag6.append(itag12,ptag7);
atag7.append(itag13,ptag8);
atag8.append(itag14,ptag9);
division4a.append(atag1,atag2,atag3,atag4,atag5,atag6,atag7,atag8,hrtag);
division4.append(division4a);
division.append(division4);

let division4b=document.createElement("div");
division4b.setAttribute("class","subscribed-list");
let h5tag=document.createElement("h5");
h5tag.innerHTML="SUBSCRIBED";
// let atag9=document.createElement("a");
// let itag15=document.createElement("i");
// itag15.setAttribute("class","fas fa-chevron-down");
// let ptag10=document.createElement("p");
// ptag10.innerHTML="Show More";

division4b.append(h5tag);
division4.append(division4b);

var menuIcon=document.querySelector("#menu-icon");
var sidebar1=document.querySelector(".sidebar");

menuIcon.onclick=function(){
    sidebar1.classList.toggle("small-sidebar");
}

let division5=document.createElement("div");
   division5.setAttribute("class","container-lg");
division.append(division5);   

async function youtubeclone(){
    let youtubedata=await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=UUK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyCEx05ze6PGGH_9Hhdevz0WL_f5uq7v5UQ');
    let youtubers= await youtubedata.json();
    console.log(youtubers.items);
    // console.log(youtubers.items.snippet.thumbnails.high.url);
    // console.log(youtubers.items.snippet.thumbnails.title);
    // console.log(youtubers.items.snippet.thumbnails.videoOwnerChannelTitle);
    let items=youtubers.items;
     items.map((ele)=>{
        var channelPhoto=ele.snippet.thumbnails.high.url;
        console.log(channelPhoto);
        var videoTitle=ele.snippet.title;
        console.log(videoTitle);
        var videoOwner=ele.snippet.videoOwnerChannelTitle;
        console.log(videoOwner);
        division5.innerHTML+=`<div class="row">
                            <div class="card mb-3" style="max-width: 540px;">
                            <div class="row no-gutters">
                            <div class="col-md-8><img src="${channelPhoto}" class="card-img"></div>
                            <div class="col-md-4>
                            <div class="card-body">
                            <p>${videoTitle}</p>
                            <p>${videoOwner}</p>
                            <button type="button">join</button>
                            <button type="button">Subscribe</button>
                            <button type="button"><i class="fas fa-thumbs-up"></i><i class="fas fa-thumbs-down"></i></button>
                            <button type="button"><i class="fas fa-share"></i>share</button>
                            </div>
                            </div>
                            </div>
                            </div>
                           </div>`
     })
}
youtubeclone();

