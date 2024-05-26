// Array of user objects
let users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];
  
  // Function to display user cards on page load
  function displayUserCards() {
    const container = document.getElementById("user-cards-container");
  
    // Iterate through each user object and create a card for each
    users.forEach(user => {
      // Create a new div element for the user card
      const card = document.createElement("div");
      card.classList.add("user-card");
  
      // Populate the card with user information
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
      `;
  
      // Append the card to the container
      container.appendChild(card);
    });
  }
  
  // Function to create a new user card
  function createNewUserCard(name, username, email) {
    const container = document.getElementById("user-cards-container");
  
    // Create a new user object
    const newUser = {
      id: users.length + 1,
      name: name,
      username: username,
      email: email,
    };
  
    // Add the new user to the array
    users.push(newUser);
  
    // Create a new div element for the user card
    const card = document.createElement("div");
    card.classList.add("user-card");
  
    // Populate the card with user information
    card.innerHTML = `
      <h3>${newUser.name}</h3>
      <p><strong>Username:</strong> ${newUser.username}</p>
      <p><strong>Email:</strong> ${newUser.email}</p>
    `;
  
    // Append the card to the container
    container.appendChild(card);
  }
  
  // Call the function to display user cards on page load
  displayUserCards();
  