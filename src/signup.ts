import { Iuser, user2 } from "./user";

class RegisterUser {
  private users: Iuser[];
  constructor(users: Iuser[]) {
    this.users = users;
  }

  addUser(username: string, email: string, password: string): boolean {
    if (
      this.users.find(
        (user) =>
          user.email === email ||
          user.password === password ||
          user.username === username
      )
    ) {
      console.log("user already exist");

      return false;
    }
    const newUser: Iuser = { username, email, password };
    console.log(newUser);
    return true;
  }
}

const signuplogic = new RegisterUser(user2);
const signform = document.getElementById("signup");
signform?.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = (document.getElementById("username") as HTMLInputElement)
    .value;
  const userEmail = (document.getElementById("email") as HTMLInputElement)
    .value;
  const userPassword = (document.getElementById("password") as HTMLInputElement)
    .value;

  if (signuplogic.addUser(userName, userEmail, userPassword)) {
    alert(`successfully registerd`);
    window.location.href = "../login.html";
  } else {
    alert(`user exists`);
  }
});
