const resultElement = document.getElementById('followers');
const follow = document.getElementById('follow');
const likes = document.getElementById('likes');
const name = document.getElementById('name');
const imgElement = document.getElementById('photo');
const imageContainer = document.getElementById('imageContainer');

const options = {
    method: 'GET',
};

fetch('https://ybiapi.fresh-app.com/api/demo_profile', options)
    .then(response => response.json())
    .then(response => {
        name.innerHTML = response.name;
        resultElement.innerHTML = response.followers;
        follow.innerHTML = response.follow;
        likes.innerHTML = response.likes;
        imgElement.src = response.photo;
         response.images_list.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            imageContainer.appendChild(img);
        });
    })
    .catch(err => console.error(err));
