function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const username = document.getElementById('username').value;
    if (username.length <= 3  || !/[A-Z]/.test(username)) {
        alert('Uesrname must be More than 3 charcters ');
        return;
    }
    if (!email.includes('@')) {
        alert('email must "@" ');
      
        return;
    }
    if (password.length <= 4) {
        alert('password must be mora than 4 leters ')
        return;
    }
    const data = {
        name: name,
        email: email,
        password: password,
        username: username
    };
    fetch('https://66e7e6bbb17821a9d9da704c.mockapi.io/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            alert('Registration successful!');
            console.log('Success:', data);

            window.location.href = 
            'profile.html'
        })
        .catch((error) => {
            alert('Registration failed!');
            console.error('Error:', error);
        });
}

