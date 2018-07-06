export function checkUser(credentials) {
    console.log("CREDENTIALS HERE: ", credentials);

    fetch("http://localhost:5000/api/users/login")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
    )

    return {
        type: "SET_CREDENTIALS",
        payload: credentials
    }
}