/*==========================
 add to home screen popup js
 ==========================*/
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  deferredPrompt = e;
});

const installapp = document.getElementById("installapp");

if (installapp !== null) {
  installapp.addEventListener("click", async () => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const {outcome} = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        deferredPrompt = null;
      }
    }
  });
}