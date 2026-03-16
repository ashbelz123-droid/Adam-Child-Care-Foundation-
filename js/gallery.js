const supabaseClient = supabase.createClient(
"https://plrzyhtkosbgztpaudoz.supabase.co",
"YOUR_PUBLIC_KEY"
)

async function loadGallery(){

const {data}=await supabaseClient
.from("gallery")
.select("*")

const container=document.getElementById("gallery")

container.innerHTML=""

data.forEach(item=>{

const img=document.createElement("img")

img.src=item.image

container.appendChild(img)

})

}

loadGallery()
