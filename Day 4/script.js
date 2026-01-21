const textInput = document.getElementById("textInput");
const searchBtn = document.getElementById("searchBtn");
const avatar = document.getElementById("avatar");
const pName = document.getElementById("name");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const publicRepo = document.getElementById("publicRepo");
const profileLink = document.getElementById("profileLink");
const statusMsg = document.getElementById("statusMsg");
const userDetails = document.getElementById("userDetails");
const resultBox = document.getElementById("resultBox");



const findUser = async () => {
    const text = textInput.value.trim();
    if (text === "") return;

    resultBox.style.display = "block";
    userDetails.style.display = "none";

    statusMsg.textContent = "Loading...";
    statusMsg.className = "loading";

    try {
        const URL = `https://api.github.com/users/${text}`;
        const response = await fetch(URL);

        if (!response.ok) {
            statusMsg.textContent = "User not found ";
            statusMsg.className = "error";
            userDetails.style.display = "none";
            return;
        }

        const data = await response.json();

        statusMsg.textContent = "";
        userDetails.style.display = "block";

        avatar.innerHTML = `<img src="${data.avatar_url}" alt="${data.login}" />`;
        pName.textContent = data.name || "No name";
        username.textContent = `@${data.login}`;
        bio.textContent = data.bio || "No bio available";
        followers.textContent = data.followers;
        following.textContent = data.following;
        publicRepo.textContent = data.public_repos;
        profileLink.innerHTML = `<a href="${data.html_url}" target="_blank">${data.html_url}</a>`;

        textInput.value = "";
    } catch (err) {
        statusMsg.textContent = "Something went wrong ⚠️";
        statusMsg.className = "error";
        userDetails.style.display = "none";
    }
};


searchBtn.addEventListener("click", findUser);

textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        findUser();
    }
});
