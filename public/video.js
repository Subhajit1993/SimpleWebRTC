var video = document.getElementById('video'),
    vendorUrl = window.URL || window.webkitURL;
console.log(vendorUrl)

navigator.getMedia = navigator.getUserMedia|| navigator.webkitGetUserMedia || navigator.mozGetUserMedia;


navigator.getMedia({
    video:true,
    audio:false
}, function (stream) {
    video.srcObject = (stream);
    video.play()
}, function (err) {
    throw err
});