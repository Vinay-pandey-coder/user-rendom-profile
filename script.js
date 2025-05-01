let naam = document.querySelector(".naam")
let email = document.querySelector(".email")
let image = document.querySelector(".image")
let button = document.querySelector(".btn")
let api = 'https://randomuser.me/api/'

user(api).then((data)=>{
    setData(data)
}).catch((err)=>{
    console.log(err);
})


button.addEventListener("click",()=>{
    user(api).then((data)=>{
        setData(data)
    }).catch((err)=>{
        console.log(err);
    })
})

function setData(data){
    naam.textContent = data.naam    
    email.textContent = data.email
    image.src = data.src
}


async function user (api){
  try{
    let rData = await fetch(api);
    let data = await rData.json();
    return{
        naam: `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`,
        email:data.results[0].email,
        src:data.results[0].picture.medium
    }
  }
  catch{
    throw new Error("error in fetching data")
  }
}