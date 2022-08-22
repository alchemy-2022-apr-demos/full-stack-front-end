const BASE_URL = 'http://localhost:7890';
//localhost:7890/api/v1/users
export async function signUpUser(userInfo) {
    const resp = await fetch(`http://localhost:7890/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userInfo),
    });
    const data = await resp.json();
    if (resp.ok) {
        return data;
    } else {
        console.error(data.message);
    }
}

export async function redirectIfLoggedIn() {
    // call the /me route
    const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    if (resp.ok) {
        location.replace('./tasks');
    }
    // if the resp is 200
    // redirect to /tasks
    // return null
}
