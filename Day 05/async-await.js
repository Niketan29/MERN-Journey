//1
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const run = async () => {
    console.log("Start")

    await delay(2000)

    console.log("After 2 seconds")
}

run();


//2

const fetchUser = async (username) => {

    if(username === ""){
        throw new Error("User name is required...")
    }

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    const user = {
        name : data.name,
        login : data.login,
        followers: data.followers,
        following : data.following,
        repos : data.public_repos
    }

    return user;
}

fetchUser("nexaaman").then(res=>console.log(res)).catch(err=>console.log(err))



//3
const fetchUser1 = async (username) => {

    if(username === ""){
        throw new Error("User name is required...")
    }

    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if(response.status===403){
        throw new Error("Rate limit exceeded. Try again later");
    }
    if(response.status===404){
        throw new Error("User not found");
    }
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    
    const data = await response.json();

    const user = {
        name : data.name,
        login : data.login,
        followers: data.followers,
        following : data.following,
        repos : data.public_repos
    }

    return user;
}

fetchUser1("nexaaman").then(res=>console.log(res)).catch(err=>console.log(err))



//4

const fetchUser2 = async (username) => {

    if(username === ""){
        throw new Error("User name is required...")
    }

    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if(response.status===403){
        throw new Error("Rate limit exceeded. Try again later");
    }
    if(response.status===404){
        throw new Error("User not found");
    }
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    
    const data = await response.json();

    const user = {
        name : data.name,
        login : data.login,
        followers: data.followers,
        following : data.following,
        repos : data.public_repos
    }

    return user;
}

Promise.all([
    fetchUser2("nexaaman"),
    fetchUser2("Niketan29"),
    fetchUser2("damndeepesh")
])
.then(res=>console.log(res))
.catch(err=>console.log(err))