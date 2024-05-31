// функция для загрузки видеоролика с YouTube
function loadYouTubeVideo(videoId) {
    const videoContainer = document.getElementById('video-container');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/watch?v=2lbNjNaoB10&ab_channel=%D0%A0%D0%BE%D1%81%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D1%81%D0%A2%D0%92`;
    iframe.frameBorder = '0';
    iframe.allowFullScreen = true;
    videoContainer.appendChild(iframe);
  }
  
  // пример использования функции
  loadYouTubeVideo('2lbNjNaoB10');