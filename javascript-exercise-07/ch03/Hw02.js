// 2.請用程式算出93784秒，是幾天又幾小時又幾分又幾秒
let sec=93784;
let day= parseInt(sec/86400);
let hr=parseInt(sec%86400/3600);
let min =parseInt(sec%3600/60);
sec =sec%60;
console.log(day+'天'+hr+'小時'+min+'分'+sec+'秒');
