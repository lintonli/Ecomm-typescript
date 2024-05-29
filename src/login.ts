import { Iuser, user1 } from "./user";

class LogUser {
  private users: Iuser[];

  constructor(users: Iuser[]) {
    this.users = users;
  }
  authenticate(username: string, password: string): boolean {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (!user) {
      console.log("user not found");
    }
    return user !== undefined;
  }
}
const Login = new LogUser(user1);

const loginform = document.getElementById("login") as HTMLFormElement;
loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = (
    document.getElementById("login-username") as HTMLInputElement
  ).value;
  const userPassword = (
    document.getElementById("login-password") as HTMLInputElement
  ).value;

  if (Login.authenticate(userName, userPassword)) {
    // console.log("login successfull");
    alert(`welcome ${userName}`);
    window.location.href = "../index.html";
  } else {
    console.log("invalid username or password");
  }
});
