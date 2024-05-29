"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class LogUser {
    constructor(users) {
        this.users = users;
    }
    authenticate(username, password) {
        const user = this.users.find((user) => user.username === username && user.password === password);
        if (!user) {
            console.log("user not found");
        }
        return user !== undefined;
    }
}
const Login = new LogUser(user_1.user1);
const loginform = document.getElementById("login");
loginform.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.getElementById("login-username").value;
    const userPassword = document.getElementById("login-password").value;
    if (Login.authenticate(userName, userPassword)) {
        // console.log("login successfull");
        alert(`welcome ${userName}`);
        window.location.href = "../index.html";
    }
    else {
        console.log("invalid username or password");
    }
});
