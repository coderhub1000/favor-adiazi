const video = document.createElement('video');
video.src =
   'tentacion.mp4'
   video.poster =
   'hand.mp4'
   video.autoplay = false;
   video.controls = true;
   video.muted = false;
   video.height = 240;
   video.width = 320;
   const box =document.getElementById('box');
   box.appendChild(video);
