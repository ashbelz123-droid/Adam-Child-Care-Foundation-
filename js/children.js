const supabase = supabase.createClient(
"https://plrzyhtkosbgztpaudoz.supabase.co",
"YOUR_PUBLIC_KEY"
)

async function loadChildren(){

const {data} = await supabase
.from("children")
.select("*")

const container =
document.getElementById("childrenContainer")

data.forEach(child => {

const card = document.createElement("div")

card.className = "child-card"

card.innerHTML = `

<h3>${child.name}</h3><p><strong>Age:</strong> ${child.age}</p><p><strong>School:</strong> ${child.school}</p><p><strong>Dream:</strong> ${child.dream}</p><p>${child.story}</p><button onclick="sponsorChild('${child.name}')">
Sponsor This Child
</button>`

container.appendChild(card)

})

}

function sponsorChild(name){

window.open(
"https://wa.me/256761544014?text=Hello I want to sponsor "+name
)

}

loadChildren()
