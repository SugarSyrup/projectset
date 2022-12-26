const username = document.querySelector(".idInput");
const password = document.querySelector(".passwordInput");

const userForm = document.querySelector("form");

userForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(`${window.location.href}id=${username.value}&pw=${password.value}`);
    await fetch(`${window.location.href}?id=${username.value}&pw=${password.value}`, {
        method: 'POST',
        mode:'cors',
        credentials:'same-origin',
        redirect:'follow'
        //body: JSON.stringify({username:username.value, password:password.value})
    }).then((response) => {
        if(response.redirected) {
            window.location.href = response.url;
        }
    })
})