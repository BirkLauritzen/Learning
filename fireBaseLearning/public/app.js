document.addEventListener('DOMContentLoaded', function () {
    const app = firebase.app(); // 'firebase' is available globally
    console.log(app);

    const loginButton = document.querySelector('#login');

    function googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                // Create a new div element to hold the welcome message
                const welcomeMessage = document.createElement('div');
                // Set the text content of the div to the user's display name
                welcomeMessage.textContent = `Hello ${user.displayName}`;
                // Append the welcome message div to the body of the document
                document.body.appendChild(welcomeMessage);
                console.log(user);
            })
            .catch(console.log);
    }

    loginButton.addEventListener('click', googleLogin);
});
