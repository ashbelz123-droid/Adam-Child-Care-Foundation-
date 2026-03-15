let posts = JSON.parse(localStorage.getItem("posts")) || [];

function showPosts(){

const container = document.getElementById("postList");
container.innerHTML="";

posts.forEach(p=>{

container.innerHTML += `
<div class="card">
<h3>${p.title}</h3>
<p>${p.desc}</p>
<img src="${p.image}">
<video controls>
<source src="${p.video}">
</video>

<a class="donate-btn" href="https://wa.me/256740421134?text=Hello%20Adam%20Child%20Care%20Foundation%2C%20I%20want%20to%20support%20this%20project.">
Support This Project
</a>

</div>
`;

});

}

showPosts();
