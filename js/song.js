console.log("Songs-------------- ")
const Song =[
    {
        img:"https://i.scdn.co/image/ab67616d00001e02f96cd13a7ea4835d4b21ab1a",
        name:"Ragnarok",
        age:"2022",
        spotify:"https://open.spotify.com/track/4ZOFON5uG0tr01Xms9x4sS?si=175395de6e9140d8",
    },
    {
        img:"https://i.scdn.co/image/ab67616d00001e0202d137419106750366c10382",
        name:"Apocalipsis",
        age:"2023",
        spotify:"https://open.spotify.com/track/6qp0DEsMADy5OaRY5UYfwd?si=a0b34db3d5cd47fe",
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
                        <a href="">
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