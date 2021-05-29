// Let’s see we an api url 
// https://my-json-server.typicode.com/typicode/demo/posts
// Write a sample code to call this url via ajax and print its response

let btn = document.getElementById("btn")


async function TestAPI(){
    const APIData = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    const APIJSON =  await APIData.json()
    document.getElementById("post").innerHTML = JSON.stringify(APIJSON)
    
    
}

btn.addEventListener("click", TestAPI)