// 1. API URL
const url = "https://jsonplaceholder.typicode.com/users"

//  2. FETCH USERS FROM THE API URL
function fetchUsers() {
    //  2.1MAKE USE OF THE BROWSER FETCH API
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // 2.2 passing the user data to the renderusers function
            renderUsers(data);
        });
}

// 3. RENDER THE USERS IN THE DOM

function renderUsers(usersData) {
    // console.log(usersData);
    const ul = document.getElementById("user-list-container");
    // console.log(ul);

    //3.1 Render an Li tag for each of the users
    usersData.forEach((user, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;
        // 3.2 Append the current user li tag to the UL tag
        ul.appendChild(li);
    });
}

// 4. Add a search function to the DOM
function searchUsersByUsername() {
    const input = document.getElementById("search")
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();   
    const usersList = ul.querySelectorAll("li");

    // 4.1 Loop through all the users and render the one that match the search
    for (let index = 0; index < usersList.length; index++) {
        const usernameSpanTag = usersList[index].querySelector(".username")
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

        if (isMatch) {
            usersList[index].style.display = "block";
        } else {
            usersList[index].style.display = "none  ";
        }
    }

}

fetchUsers();   
