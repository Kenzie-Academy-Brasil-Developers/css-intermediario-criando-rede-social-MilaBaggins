
function creatModal(post) {
    let userToShow = users.find(user => post.user == user.id)
    const insertModal = document.querySelector('.modal-dom')
    insertModal.innerHTML = `
    <div id="modal-content">
        <img class="backgrorund-opacity" src="./assets/img/black_background.png" alt="">

        <section class="modal">
        <section class="close-modal">
            <div class="button-background">
            <button id="button-x" class="button-close-modal">x</button>
            </div>
        </section>
        <section class="profile-section container">
            <img src=${userToShow.img} alt="Foto de perfil de um homem segurando um gato">
            <div class="profile-info">
            <h3 class="user_name">${userToShow.user}</h3>
            <p class="user-ocupation">${userToShow.stack}</p>
            </div>
        </section>
        <h1 class="h1-posts container">${post.title}</h1>
        <p class="p-posts container">${post.text}</p>
        </section>
    </div>
    `
}

function modalOpen() {
    for (let index = 0; index <posts.length; index++){
        const buttonModal = document.getElementById(posts[index].id_post)
        buttonModal.addEventListener('click', () => {
            creatModal(posts[index])
            modalRemove()
        })
    }
}


function modalRemove() {
    const buttonClose = document.getElementById("button-x")
    buttonClose.addEventListener('click', () => {
        let modalClose = document.getElementById("modal-content")
        modalClose.remove()
    })
}


