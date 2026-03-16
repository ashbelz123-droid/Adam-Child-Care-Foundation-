const supabaseClient = supabase.createClient(
"https://plrzyhtkosbgztpaudoz.supabase.co",
"sb_publishable_iCAQVtvq6NqndBcS2ktKQA_im69KCae"
)

async function registerVolunteer(){

const name=document.getElementById("name").value
const email=document.getElementById("email").value
const phone=document.getElementById("phone").value
const country=document.getElementById("country").value
const message=document.getElementById("message").value

await supabaseClient
.from("volunteers")
.insert([
{name,email,phone,country,message}
])

alert("Thank you for volunteering!")

}
