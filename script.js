const fileINput = document.querySelector('#file');
const player = document.querySelector("#player");
const playpauseBTN = document.querySelector(".playpause")
const time = document.querySelector(".time");

player.style.display = 'none';

fileINput.addEventListener('change',()=> {
    const file = fileINput.files[0];

    if (file) {
        const fileURL = URL.createObjectURL(file);
        player.style.display = 'block';
        player.src = fileURL;
        document.querySelector('input').style.display = 'none';

        // Play video funtion
        player.play();5
    }
});


player.addEventListener('timeupdate', () => {
    time.innerHTML = Math.round(player.currentTime);
});

const ctrlIcon = document.querySelector('.fa-solid');
ctrlIcon.classList.add('fa-pause');

playpauseBTN.addEventListener('click', () => {
    playpause()
});

player.addEventListener('click', () => {
    playpause()
    console.log(player.currentTime)
});

function playpause() {
    if (ctrlIcon.classList.contains('fa-pause')) {
        player.pause();
        ctrlIcon.classList.add('fa-play');
        ctrlIcon.classList.remove('fa-pause');
    }
    else if (ctrlIcon.classList.contains('fa-play')) {

        player.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    }
}

document.querySelector('.expand').addEventListener('click',()=>{
    player.style.height = window.innerHeight + 'px';
});  

setInterval(() => {
    document.querySelector('#controlers').style.opacity = 0;
}, 3000);

setInterval(() => {
    player.addEventListener('mousemove',()=>{
            document.querySelector('#controlers').style.opacity = 1;
    });
},1000);