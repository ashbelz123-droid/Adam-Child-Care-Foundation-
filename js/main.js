/* SUPABASE CONNECTION */

const SUPABASE_URL = "https://plrzyhtkosbgztpaudoz.supabase.co"

const SUPABASE_KEY = "sb_publishable_iCAQVtvq6NqndBcS2ktKQA_im69KCae"

const supabaseClient = supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
)

/* LOAD CHILDREN */

async function loadChildren(){

const { data, error } =
await supabaseClient
.from("children")
.select("*")

if(error){
console.log(error)
return
}

const container =
document.getElementById("children-list")

if(!container) return

data.forEach(child => {

container.innerHTML += `

<div class="card"><img src="${child.photo || 'https://via.placeholder.com/300'}"><h3>${child.name}</h3><p>Age: ${child.age}</p><p>${child.story || ''}</p><a href="https://wa.me/256761544014?text=Hello%20I%20want%20to%20support%20${child.name}">Support This Child

</a></div>`

})

}

/* LOAD GALLERY */

async function loadGallery(){

const { data, error } =
await supabaseClient
.from("gallery")
.select("*")

if(error){
console.log(error)
return
}

const container =
document.getElementById("gallery-preview")

if(!container) return

data.forEach(photo => {

container.innerHTML += `

<div class="card"><img src="${photo.image}"><p>${photo.caption || ''}</p></div>`

})

}

/* LOAD PROGRAMS */

async function loadPrograms(){

const { data, error } =
await supabaseClient
.from("programs")
.select("*")

if(error){
console.log(error)
return
}

const container =
document.getElementById("programs-list")

if(!container) return

data.forEach(program => {

container.innerHTML += `

<div class="card"><h3>${program.title}</h3><p>${program.description}</p></div>`

})

}

/* RUN FUNCTIONS */

loadChildren()
loadGallery()
loadPrograms()
