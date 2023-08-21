//your JS code here. If required.
const element = document.getElementById("browser-info");

const browserName = navigator.userAgent;
const browserVersion = (navigator.appVersion).match(/.*?Version\/(.*?)(?= |$)/);

element.textContent = `You are using ${browserName} ${(browserVersion ? browserVersion[1] : "version")}`