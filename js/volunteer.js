const SUPABASE_URL =
"https://plrzyhtkosbgztpaudoz.supabase.co"

const SUPABASE_KEY =
"sb_publishable_iCAQVtvq6NqndBcS2ktKQA_im69KCae"

const supabaseClient =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
)

async function registerVolunteer(){

const name =
document.getElementById("vname").value

const phone =
document.getElementById("vphone").value

const email =
document.getElementById("vemail").value

const message =
document.getElementById("vmessage").value

const { data, error } =
await supabaseClient
.from("volunteers")
.insert([
{
name:name,
phone:phone,
email:email,
message:message
}
])

if(error){

alert("Something went wrong")

}else{

alert("Thank you for volunteering!")

}

  }
