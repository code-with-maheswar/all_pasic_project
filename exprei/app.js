let url = 'http://universities.hipolabs.com/search?country=india&name='
let button = document.querySelector("button")
let inp = document.querySelector("#country");

let city;
                        
button.addEventListener("click",async()=>{
     let getData =await newdata();
     show(getData);
   
});

function show(getData){
    let list = document.querySelector(".list");

    list.innerText = ''
 for( data of getData){
     let li = document.createElement("li");
     let hr = document.createElement("hr")
        li.innerText = data.name;
        list.appendChild(li);
        li.insertAdjacentElement('afterend',hr)
    }

   
}

async function newdata() {
         city = inp.value;
         
         let values= await axios.get(url+city);
          return values.data
}
