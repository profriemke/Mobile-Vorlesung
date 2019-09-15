
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(function(reg) {
      console.log("Service Worker registriert, scope: ", reg.scope);
    }).catch(function(err) {
      console.log("Service Worker nicht registriert: ", err);
    });
  }

  