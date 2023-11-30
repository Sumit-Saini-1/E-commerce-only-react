import { SERVER_URL } from "./global";

export async function LoginApi(data) {
    const payload = {
        username: data.username,
        password: data.password
    };
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL+"/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            resolve(response);
        }).catch(function (err) {
            reject(err);
        });
    });
}

export function SignupApi(data) {
    const payload = {
        name: data.name,
        mobile: data.mobile,
        username: data.username,
        password: data.password
    }
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL+"/signup", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            resolve(response);
        }).catch(function (err) {
            reject(err);
        });
    });
}

export function CheckAutentication() {
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL+"/checkAuthentication", {
            credentials: "include",
        }).then(function (response) {
            if (response.status == 200) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }).catch(function (err) {
            console.log(err);
            reject(false);
        });
    });
}

export function LogoutApi() {
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL+"/logout", {
            credentials: "include",
        }).then(function (response) {
            if (response.status == 200) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }).catch(function (err) {
            console.log(err);
            reject(false);
        });
    });
}

export function ChangePasswordApi(data) {
    const payload = {
        npass: data.newPass,
        userId: data.userId
    };
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL+"/changePassword", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            resolve(response);
        }).catch(function (err) {
            reject(err);
        });
    });
}

export function GetAddressApi() {
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL+"/getAddress", {
            credentials: "include"
        }).then(function (response) {
            if (response.status == 200) {
                return response.json();
            }
            else {
                resolve(false);
            }
        }).then(address=>{
            resolve(address);
        }).catch(function (err) {
            reject(err);
        });
    });

}