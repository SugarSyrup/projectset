const username = document.querySelector(".idInput");
const password = document.querySelector(".passwordInput");

const formSubmit = document.querySelector(".submit");

formSubmit.addEventListener('click', async (event) => {
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


const joinButton = document.querySelector('p');
joinButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = `${window.location.origin}/auth/join`;
})