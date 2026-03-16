const supabaseClient = supabase.createClient(
"https://plrzyhtkosbgztpaudoz.supabase.co",
"sb_publishable_iCAQVtvq6NqndBcS2ktKQA_im69KCae"
)

async function loadChildren(){

const {data} = await supabaseClient
.from("children")
.select("*")

const container=document.getElementById("childrenContainer")

container.innerHTML=""

data.forEach(child=>{

const card=document.createElement("div")

card.className="child-card"

card.innerHTML=`

<img src="${child.photo}" class="child-photo"><h3>${child.name}</h3><p><b>Age:</b> ${child.age}</p><p><b>School:</b> ${child.school}</p><p><b>Dream:</b> ${child.dream}</p><p>${child.story}</p><button onclick="sponsorChild('${child.name}')">
Sponsor Child
</button>`

container.appendChild(card)

})

}

function sponsorChild(name){

window.open(
"https://wa.me/256761544014?text=Hello I would like to sponsor "+name
)

}

loadChildren()
