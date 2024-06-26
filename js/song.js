console.log("Songs-------------- ")
const Song =[
    {
        img:"img/fotio.jpeg",
        name:"Ragnarok",
        age:"2023",
        spotify:"https://open.spotify.com/track/4ZOFON5uG0tr01Xms9x4sS?si=175395de6e9140d8",
        youtube:"https://www.youtube.com/watch?v=kIjclhqpl7I&list=OLAK5uy_lyZcYtoIjHGeTPXE7ReMosCgVrYPk016c&ab_channel=Pluviam-Topic",
    },
    {
        img:"https://i.scdn.co/image/ab67616d00001e0202d137419106750366c10382",
        name:"Apocalipsis",
        age:"2023",
        spotify:"https://open.spotify.com/track/6qp0DEsMADy5OaRY5UYfwd?si=a0b34db3d5cd47fe",
        youtube:"https://www.youtube.com/watch?v=gfnjOlI9IGY&list=OLAK5uy_m3gGE374lv_nFhy2v_KzXmSevFbF-4WFk&ab_channel=Pluviam-Topic",
    },
    {
        img:"https://i.scdn.co/image/ab67616d00001e02d10eea112855d144ff75fedf",
        name:"Ángel Cazador",
        age:"2023",
        spotify:"https://open.spotify.com/intl-es/album/7yUR9s01638Vp4xF1xJa86?si=9tXBiR_-QOuIygQU8e1jDA",
        youtube:"https://www.youtube.com/watch?v=Uxai3KYuTK8&ab_channel=Pluviam-Topic",
    },
    {
        img:"https://i.scdn.co/image/ab67616d00001e02758b2b71af153a6db8d11ec8",
        name:"Fenix",
        age:"2024",
        spotify:"https://open.spotify.com/intl-es/track/6xwobv4CSVOwQ7jqHE18YJ?si=91c689fef5674864",
        youtube:"https://www.youtube.com/watch?v=4ylKESgK6JE&ab_channel=Pluviam-Topic",
    },
    {
        img:"https://i.scdn.co/image/ab67616d00001e023af79be737b187fc4492aad5",
        name:"Rosas Blancas",
        age:"2024",
        spotify:"https://open.spotify.com/intl-es/album/0tqS8ORWtfycZLaPm6IG43",
        youtube:"https://www.youtube.com/watch?v=9PSFhqibiWw&list=OLAK5uy_k5DbyJfCB6Gsn80ub-N2BkY9_KtBGCNP8&ab_channel=Pluviam-Topic",
    },
];

const songBox = document.getElementById("repertorio");

function ShowSong (song){
    song.forEach(element => {
        songBox.innerHTML += `
                <div class="Song">
                    <img src="${element.img}" alt="">
                    <div class="SongTitle">
                        <h3>${element.name}</h3>
                        <p>${element.age}</p>
                    </div>
                    <div class="SongRedes">
                        <a href="${element.spotify}"target="_blank">
                            <i class="bi bi-spotify"></i>
                        </a>
                        <a href="${element.youtube}" target="_blank">
                            <i class="bi bi-youtube"></i>
                        </a>
                    </div>
                </div>
        `
    });
}


ShowSong(Song);
console.log("Funciona la Funcion de Song")


























console.log("Songs--------------END")