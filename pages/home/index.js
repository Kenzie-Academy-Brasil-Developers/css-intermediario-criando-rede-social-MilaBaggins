function createPosts(arrUsers, arrPosts) {

  let insertPostsData = document.querySelector(".posts-section")
  insertPostsData.innerHTML = ""
  for (let index = 0; index < arrPosts.length; index++) {
    let user = arrUsers.find(user => user.id == arrPosts[index].user)
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
          <h1 id="h1-posts-title" class="h1-posts container"> ${arrPosts[index].title} </h1>
        </li>
        <li>
          <p id="p-posts-content" class="p-posts container">${arrPosts[index].text}</p>
        </li>
      </ul>
      <div class="open-post-like container">
        <button type="submit" id="${arrPosts[index].id_post}" class="open-post-button">Abrir post</button>
        <img src="./assets/img/like.svg" alt="coração cinza" class="img-like">
      </div>`
  }
  modalOpen()
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
              <button id="follow" type="submit" class="follow-button">Seguir</button>
            </div>
          </div>
        </aside>
          `
          followButtonStyle()
    }
    
    /* unfollowButtonStyle() */
}
createSugestions(users, posts)


function openPostEvent(){
  const postButton = document.getElementById("clickPost")
        postButton.addEventListener('click', () => {
        let catchTitle = document.getElementById('post-title');
        let catchContent = document.getElementById('post-description');
        posts.unshift({
          id_post: 4, 
          user: 1, 
          title:
          catchTitle.value,
          text: catchContent.value,
        })
        postButton.style.backgroundColor = "var(--color-grey-3)"
        postButton.style.color = "var(--color-grey-2)"
        createPosts(users, posts)
        catchTitle.value =""
        catchContent.value =""
    })
}
openPostEvent()


const catchTitle = "";
function postTitle() {
    
    document.getElementById('h1-posts-title').innerHTML = catchTitle;
}
postTitle()


function followButtonStyle() {
  const followButton = document.getElementById("follow")
  followButton.addEventListener('click', () => {
    if(followButton.innerText == "Seguir"){
      followButton.innerText = "Seguindo"
      followButton.style.backgroundColor = "var(--color-blue)"
      followButton.style.color = "var(--color-white-fixed)"
      followButton.style.border = "none"
      followButton.style.padding = "4px 15px 4px 15px"
    }else{
      followButton.innerText = "Seguir"
      followButton.style.backgroundColor = "var(--color-white-fixed)"
      followButton.style.color = "var(--color-grey-1)"
      followButton.style.border = "1px solid var(--color-grey-1)" 
      followButton.style.padding = "3px 20px"
      
    }
    
  })
}


/*  function unfollowButtonStyle() {
  const unfollowButton = document.getElementById("follow")
  unfollowButton.addEventListener('click', () => {
    
  })
}  */