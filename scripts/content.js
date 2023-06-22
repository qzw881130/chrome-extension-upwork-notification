// document.body.style.backgroundColor = "orange";

console.log('xxxx');

var notice = (msg) => {
    chrome.runtime.sendMessage('', {
        type: 'notification',
        options: {
          title: msg,
          message: msg,
          iconUrl: chrome.runtime.getURL('images/icon-16.png'),
          type: 'basic'
        }
    });
}


var playAudio = () => {
    var audioFiles = [
        "/audio/upwork-new-jobs.mp3",
        "/audio/bird.mp3",
        "/audio/happy.wav",
    ]
    var rnd = parseInt(Math.random()*audioFiles.length);
    console.log('audio rnd:', rnd);
    var url = chrome.runtime.getURL(audioFiles[rnd]);
    console.log('audio url:', url);
    var audioDom = new Audio(url);
    audioDom.type = 'audio/mpeg';
    audioDom.play();
}

var key = 'upwork-notice-lock';
lock = 0;

setInterval(()=>{
    console.log('lock:', lock);
    try{
        if(document.body.innerText.indexOf('There are new jobs') > 0){
            if(!lock){
                console.log('find new jobs', lock, lock == 1);
                lock = 1;
                notice('Upwork published New Jobs!');
                playAudio();
            }
        }else{
            lock = 0;
        }
    }catch(e){
        console.log('timer err', e);
    }
}, 3000);


setTimeout(()=>{
    console.log('send test msg', 'lock=', localStorage.getItem(key));
    playAudio();
    notice('this is test notice')
}, 3000);