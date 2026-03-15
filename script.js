const SUPABASE_URL = "https://plrzyhtkosbgztpaudoz.supabase.co";

const SUPABASE_KEY = "sb_publishable_iCAQVtvq6NqndBcS2ktKQA_im69KCae";

const supabase = window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);


/* ADD PROJECT */

async function addPost(){

const title = document.getElementById("title").value;

const description = document.getElementById("desc").value;

const imageFile = document.getElementById("image").files[0];

const videoFile = document.getElementById("video").files[0];

let imageUrl="";
let videoUrl="";


if(imageFile){

const imageName =
"images/"+Date.now()+"_"+imageFile.name;

const {data,error}=await supabase.storage
.from("media")
.upload(imageName,imageFile);

if(!error){

imageUrl=
SUPABASE_URL+
"/storage/v1/object/public/media/"+imageName;

}

}


if(videoFile){

const videoName=
"videos/"+Date.now()+"_"+videoFile.name;

const {data,error}=await supabase.storage
.from("media")
.upload(videoName,videoFile);

if(!error){

videoUrl=
SUPABASE_URL+
"/storage/v1/object/public/media/"+videoName;

}

}


await supabase
.from("posts")
.insert([
{
title:title,
description:description,
image:imageUrl,
video:videoUrl
}
]);

alert("Project Published");

}



/* SHOW PROJECTS */

async function showPosts(){

const {data,error}=await supabase
.from("posts")
.select("*")
.order("id",{ascending:false});

const container=
document.getElementById("postList");

if(!container) return;

container.innerHTML="";

data.forEach(post=>{

container.innerHTML+=`

<div class="card">

<h3>${post.title}</h3>

<p>${post.description}</p>

<img src="${post.image}">

<video controls>
<source src="${post.video}">
</video>

<a class="donate-btn"
href="https://wa.me/256740421134">

Donate via WhatsApp

</a>

</div>

`;

});

}

showPosts();
