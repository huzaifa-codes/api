let div = document.querySelector("#div");
let input1 = document.querySelector("#input");

async function button1() {
  let hi = input1.value;

  try {
    let response = await fetch(`https://api.github.com/users/${hi}`);
    let data = await response.json();

if (data.message === "Not Found") { // Capital N and F
  console.log("User not found. Please try again.");
  div.innerHTML = `<p>User not found. Please try again.</p>`;
  return; // Stop the function if user is not found
}
   

    
      div.innerHTML = `
        <img src="${data.avatar_url}" alt="User Avatar"/>
        <h1>Username: ${data.login}</h1>
        <p>Bio: ${data.bio}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
      `;
    
  } catch (error) {
    console.log(error);
    div.innerHTML = `<p>${error.message}</p>`;
  }
}



