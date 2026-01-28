// URL Google Apps Script
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxT8nHig3df56Wyr6joIpu1gMy5p0IzF1x3liCApUH44-cx9MIHAiUBR2UWHvWy6b2L/exec"; 

// Provenance (Referrer)
function detectSource() {
  const ref = document.referrer.toLowerCase();
  if (ref.includes("google.")) return "Google";
  if (ref.includes("linkedin.com")) return "LinkedIn";
  if (ref.includes("github.com")) return "GitHub";
  if (ref.includes("facebook.com")) return "Facebook";
  if (ref.includes("twitter.com") || ref.includes("x.com")) return "X / Twitter";
  if (ref.includes("loicclau.github.io")) return "Vient du meme site";
  return ref ? "Autre site" : "Accès direct";
}

// Date & Heure
function getDateHeure() {
  const now = new Date();
  return {
    date: now.toLocaleDateString("fr-FR"),
    heure: now.toLocaleTimeString("fr-FR")
  };
}

// Appareil & Navigateur
function getDeviceInfo() {
  const ua = navigator.userAgent;

  let device = "PC";
  if (/android/i.test(ua)) device = "Android";
  else if (/iphone|ipad|ipod/i.test(ua)) device = "iOS";

  let browser = "Inconnu";
  if (ua.includes("Edg")) browser = "Edge";
  else if (ua.includes("Chrome")) browser = "Chrome";
  else if (ua.includes("Firefox")) browser = "Firefox";
  else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari";
  return { device, browser };
}

// Envoi des données
function sendVisitData() {
  
  fetch("https://ipinfo.io/json")
    .then(res => res.json())
    .then(data => {
      const time = getDateHeure();
      const deviceInfo = getDeviceInfo();

      const payload = {
        date: time.date,
        heure: time.heure,
        ip: data.ip || "",
        city: data.city || "",
        region: data.region || "",
        country: data.country || "",
        org: data.org || "",
        device: deviceInfo.device,
        browser: deviceInfo.browser,
        source: detectSource()
      };

      fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload)
      });
    })
    .catch(() => {
      // silence total
    });
}
// Lancement auto à la visite
sendVisitData();
