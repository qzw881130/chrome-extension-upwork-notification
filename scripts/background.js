chrome.runtime.onMessage.addListener(data => {
    // console.log('data', data);
    if (data.type === 'notification') {
        console.log('data.options', data.options);
        chrome.notifications.clear('upwork-notification-id');
        chrome.notifications.create('upwork-notification-id', data.options);
        try{
           
        }catch(e){
            alert('Error: ' + e.message);
        }
    }
});
