window.onload = inicio;



var videos = []; // Lista de videos a reproducir
var videoActual = 0; // Indice del video a reproducir
var tiempoReproduccion = 2; // Segundos designados para reproducir un video
var videoTag; // Etiqueta 'video' en el HTML
var botonPlay; 
var botonStop;



function inicio() {
    videoTag = document.querySelector('video');
    botonPlay = document.querySelector('.play');
    botonStop = document.querySelector('.stop');


    // Agregar videos
    dormir();
    comer();
    verPelicula();
    // caminarPorLaPlaya();


    // Cargando primer video para reproducir en web
    cargarVideo();


    // Agregar Listeners (esuchar eventos)
    videoTag.addEventListener("timeupdate", controlarSegundos, false);
    videoTag.addEventListener('ended', siguienteVideo, false);


}



function dormir() {
    let video = 'dormir.mp4';
    videos.push(video);
}

function comer() {
    let video = 'comida.mp4';
    videos.push(video);
}

function verPelicula() {
    let video = 'cine.mp4';
    videos.push(video);
}




function cargarVideo() {
    videoTag.src = `videos/${videos[videoActual]}`;
}


function reproducir() {

    console.log('Esta pausado el video?', videoTag.paused);

    if(videoTag.paused) {

        // Validacion para reproducir desde el inicio una vez que se reproducieron todos los videos
        
        if(videoActual >=  videos.length) {
            videoActual = 0;
            cargarVideo();
        } 

        videoTag.play();
        botonPlay.src = 'icons/pause.png';
    } else {
        videoTag.pause();
        botonPlay.src = 'icons/play.png';
    }
}

// TODO - Desafios

function controlarSegundos() {
    // TODO - Si el video llega a los segundos designados (variable tiempoReproduccion), 
    // entonces pasar al siguiente video.

    console.log('Segundos reproducidos: ', videoTag.currentTime);


    if (videoTag.currentTime >= tiempoReproduccion) {
        siguienteVideo();
    }
}

function siguienteVideo() {
    videoActual++;
    // cargarVideo();
    // reproducir();

    if (videoActual < videos.length) {
        cargarVideo();
        reproducir();
    } else {
        videoTag.pause();
        botonPlay.src = 'icons/replay.png';
    }
}

function finalizarReproduccion() {
    videoTag.pause();
    videoActual = 0;
    cargarVideo();
    botonPlay.src = 'icons/play.png';
}