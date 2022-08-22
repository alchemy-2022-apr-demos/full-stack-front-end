const BASE_URL = 'https://japril-fullstack-backend.herokuapp.com';
//localhost:7890/api/v1/users
export async function signUpUser(userInfo) {
    const resp = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        location.replace('./tasks');
    } else {
        console.error(data.message);
    }
}

export async function getUser() {
    const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    if (resp.ok) {
        const user = await resp.json();
        return user;
    }
}
export async function checkUser() {
    const user = await getUser();
    if (!user) location.replace('../');
}
export async function redirectIfLoggedIn() {
    // call the /me route
    const user = await getUser();
    if (user) {
        location.replace('./tasks');
    }
    // if the resp is 200
    // redirect to /tasks
    // return null
}

export async function logoutUser() {
    const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (resp.ok) {
        location.replace('../');
    }
}
