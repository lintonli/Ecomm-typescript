"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class RegisterUser {
    constructor(users) {
        this.users = users;
    }
    addUser(username, email, password) {
        if (this.users.find((user) => user.email === email ||
            user.password === password ||
            user.username === username)) {
            console.log("user already exist");
            return false;
        }
        const newUser = { username, email, password };
        console.log(newUser);
        return true;
    }
}
const signuplogic = new RegisterUser(user_1.user2);
const signform = document.getElementById("signup");
signform === null || signform === void 0 ? void 0 : signform.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.getElementById("username")
        .value;
    const userEmail = document.getElementById("email")
        .value;
    const userPassword = document.getElementById("password")
        .value;
    if (signuplogic.addUser(userName, userEmail, userPassword)) {
        alert(`successfully registerd`);
        window.location.href = "../login.html";
    }
    else {
        alert(`user exists`);
    }
});
