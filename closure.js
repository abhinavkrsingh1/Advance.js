function outer() {
  let name = "Abhinav";
  return function ineer() {
    console.log(name);
  };
}
outer()();

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    return outerVariable;
  };
}

let new1 = outerFunction("Abhinav");
new1();

const AuthModule = (function () {
    
    let users = [];
    let isLoggedIn = false;

    
    function findUser(username) {
        return users.find(user => user.username === username);
    }

    return {
        
        registerUser(username, password) {
            if (findUser(username)) {
                console.log("User already exists!");
                return false;
            }
            users.push({ username, password });
            console.log(`User ${username} registered successfully.`);
            return true;
        },

        
        loginUser(username, password) {
            const user = findUser(username);
            if (user && user.password === password) {
                isLoggedIn = true;
                console.log(`User ${username} logged in successfully.`);
                return true;
            }
            console.log("Invalid username or password.");
            return false;
        },

        
        checkLoginStatus() {
            return isLoggedIn ? "User is logged in." : "User is not logged in.";
        },

        
        logoutUser() {
            if (isLoggedIn) {
                isLoggedIn = false;
                console.log("User logged out successfully.");
            } else {
                console.log("No user is logged in.");
            }
        }
    };
})();


AuthModule.registerUser("abhinav_1", "password123");
AuthModule.loginUser("abhinav_1", "password123");
console.log(AuthModule.checkLoginStatus());
AuthModule.logoutUser();
console.log(AuthModule.checkLoginStatus());
