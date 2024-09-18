function login() {
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const data = {
      email: email,
      password: password
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
    
      if (data) {
        alert('Login successful!');
        console.log('Success:', data);
        window.location.href = 'profile.html';
      } else {
        alert('Login failed! Please check your credentials.');
      }
    })
    .catch((error) => {
      alert('Login failed! Please check your credentials.');
      console.error('Error:', error);
    });
  }


// function login() {
//     const email = document.getElementById('exampleInputEmail1').value;
//     const password = document.getElementById('exampleInputPassword1').value;

//     const data = {
//         email: email,
//         password: password
//     };

//     fetch('https://66e7e6bbb17821a9d9da704c.mockap1.10/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Response from server:', data); 
//         if (data.success) {
//             alert('Login successful!');
//             window.location.href = 'profile.html';
//         } else {
//             alert('Login failed! Please check your credentials.');
//         }
//     })
//     .catch((error) => {
//         alert('Login failed! Please check your credentials.');
//         console.error('Error:', error);
//     });
// }


