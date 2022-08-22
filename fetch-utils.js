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
    console.log(resp);
}
