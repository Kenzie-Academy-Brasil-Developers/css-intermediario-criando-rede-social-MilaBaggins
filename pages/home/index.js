function createPosts(arrUsers, arrPosts ) {

    let insertPostsData = document.querySelector(".posts-section")
    for (let index = 0; index < arrPosts.length; index++) {
        let user = arrUsers.find(user=> user.id == arrPosts[index].user)
        insertPostsData.innerHTML += `<ul>
        <li>
          <section class="profile-section container">
            <img src= ${user.img} alt="Foto de perfil de um homem segurando um gato">
            <div class="profile-info">
              <h3 class="user_name"> ${user.user} </h3>
              <p class="user-ocupation">${user.stack}</p>
            </div>
          </section>
        </li>
        <li>
          <h1 class="h1-posts container"> ${arrPosts[index].title} </h1>
        </li>
        <li>
          <p class="p-posts container">${arrPosts[index].text}</p>
        </li>
      </ul>
      <div class="open-post-like container">
        <button class="open-post-button">Abrir post</button>
        <img src="./assets/img/like.svg" alt="coração cinza" class="img-like">
      </div>`
    }
}
createPosts(users, posts)

function createSugestions(arrUsers, arrPosts ) {

    let insertSugestionData = document.querySelector(".sugestions-container")
    for (let index = 0; index < arrPosts.length; index++) {
        let user = arrUsers.find(user=> user.id == arrPosts[index].user)
        insertSugestionData.innerHTML += `
        <aside class="sugestions_friends container">
          <div class="div-sugestion-friends container">
            <div class="sugestion-desktop-flex">
              <section class="profile-section">
                <img src=${user.img} alt="Foto de perfil de um homem segurando um gato">
                <div class="profile-info">
                  <h3 class="user_name">${user.user}</h3>
                  <p class="user-ocupation">${user.stack}</p>
                </div>
              </section>
              <button class="follow-button">Seguir</button>
            </div>
          </div>
          `
    }
}
createSugestions(users, posts)