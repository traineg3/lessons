"use strict"

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
      .then(() => console.log("Service Worker зареєстровано"))
      .catch((err) => console.log("Помилка: ", err));
  }

