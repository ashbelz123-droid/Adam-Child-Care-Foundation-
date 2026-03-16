/* SUPABASE CONNECTION */

const SUPABASE_URL = "https://plrzyhtkosbgztpaudoz.supabase.co"

const SUPABASE_KEY = "sb_publishable_iCAQVtvq6NqndBcS2ktKQA_im69KCae"

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

/* LOAD CHILDREN */

async function loadChildren(){

const container = document.getElementById("children-container")

if(!container) return

const { data } = await supabaseClient
.from("children")
.select("*")
.order("created_at", {ascending:false})

container.innerHTML=""

data.forEach(child=>{

const card = document.createElement("div")

card.className="child-card"

card.innerHTML=`

<img src="${child.photo || 'https://via.placeholder.com/300'}"><h3>${child.name}</h3><p>Age: ${child.age}</p><p>${child.school || ""}</p><p>${child.dream || ""}</p><button onclick="supportChild()">Support Child</button>

`

container.appendChild(card)

})

}

/* LOAD PROGRAMS */

async function loadPrograms(){

const container=document.getElementById("programs-container")

if(!container) return

const { data } = await supabaseClient
.from("programs")
.select("*")
.order("created_at",{ascending:false})

data.forEach(program=>{

const card=document.createElement("div")

card.className="card"

card.innerHTML=`

<h3>${program.title}</h3><p>${program.description}</p>`

container.appendChild(card)

})

}

/* LOAD GALLERY */

async function loadGallery(){

const container=document.getElementById("gallery-container")

if(!container) return

const { data } = await supabaseClient
.from("gallery")
.select("*")
.order("created_at",{ascending:false})

data.forEach(item=>{

const card=document.createElement("div")

card.className="child-card"

card.innerHTML=`

<img src="${item.image}"><p>${item.caption || ""}</p>`

container.appendChild(card)

})

}

/* SUPPORT CHILD */

function supportChild(){

window.open("https://wa.me/256761544014?text=Hello I would like to support a child at Adam Child Care Foundation")

}

/* PAGE LOAD */

loadChildren()
loadPrograms()
loadGallery()
let slideIndex = 0;

function slideEvents(){

const slides = document.getElementById("eventSlides")

if(!slides) return

const total = slides.children.length

slideIndex++

if(slideIndex >= total){
slideIndex = 0
}

slides.style.transform = "translateX(-${slideIndex * 100}%)"

}

setInterval(slideEvents,4000)
