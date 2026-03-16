const SUPABASE_URL =
"https://plrzyhtkosbgztpaudoz.supabase.co"

const SUPABASE_KEY =
"sb_publishable_iCAQVtvq6NqndBcS2ktKQA_im69KCae"

const supabase =
supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
)

async function addChild(){

const name =
document.getElementById("child_name").value

const age =
document.getElementById("child_age").value

const gender =
document.getElementById("child_gender").value

const school =
document.getElementById("child_school").value

const dream =
document.getElementById("child_dream").value

const story =
document.getElementById("child_story").value

const needs =
document.getElementById("child_needs").value

await supabase
.from("children")
.insert([
{
name,
age,
gender,
school,
dream,
story,
needs
}
])

alert("Child added successfully")

}

async function addProgram(){

const title =
document.getElementById("program_title").value

const description =
document.getElementById("program_desc").value

await supabase
.from("programs")
.insert([
{
title,
description
}
])

alert("Program added")

}

async function uploadGallery(){

const file =
document.getElementById("gallery_file").files[0]

const caption =
document.getElementById("gallery_caption").value

const fileName =
Date.now() + file.name

await supabase
.storage
.from("media")
.upload(fileName,file)

const url =
"https://plrzyhtkosbgztpaudoz.supabase.co/storage/v1/object/public/media/" + fileName

await supabase
.from("gallery")
.insert([
{
image:url,
caption
}
])

alert("Gallery uploaded")

}

async function addEvent(){

const title =
document.getElementById("event_title").value

const description =
document.getElementById("event_desc").value

const file =
document.getElementById("event_media").files[0]

const fileName =
Date.now() + file.name

await supabase
.storage
.from("media")
.upload(fileName,file)

const url =
"https://plrzyhtkosbgztpaudoz.supabase.co/storage/v1/object/public/media/" + fileName

await supabase
.from("events")
.insert([
{
title,
description,
media:url
}
])

alert("Event added")

}

async function uploadDocument(){

const file =
document.getElementById("doc_file").files[0]

const title =
document.getElementById("doc_title").value

const fileName =
Date.now() + file.name

await supabase
.storage
.from("media")
.upload(fileName,file)

const url =
"https://plrzyhtkosbgztpaudoz.supabase.co/storage/v1/object/public/media/" + fileName

await supabase
.from("documents")
.insert([
{
title,
file:url
}
])

alert("Document uploaded")

  }
