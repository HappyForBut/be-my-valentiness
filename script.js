(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
  ];
  
  const yesButton = document.querySelector('.yes-button');
  const noButton = document.querySelector('.no-button');
  let messageIndex = 0;
  let noClickCount = 0;
  let stopYesMovement = false;
  
  // Handle "No" button click (grows "Yes" button)
  function handleNoClick() {
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
  
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
  
    noClickCount++;
  
    if (noClickCount >= 7) {
      stopYesMovement = true;
      // Revert "Yes" to its original position (by clearing inline styles)
      resetYesButtonPosition();
    }
  
    // Hide "No" when "Yes" fills the screen
    if (
      yesButton.offsetWidth >= window.innerWidth * 0.9 ||
      yesButton.offsetHeight >= window.innerHeight * 0.9
    ) {
      noButton.style.display = "none";
    }
  }
  
  // Move "Yes" button away until stopYesMovement is true
  yesButton.addEventListener("mouseover", () => {
    if (!stopYesMovement) {
      let maxX = window.innerWidth - yesButton.offsetWidth - 20;
      let maxY = window.innerHeight - yesButton.offsetHeight - 20;
  
      let randomX = Math.max(10, Math.random() * maxX);
      let randomY = Math.max(10, Math.random() * maxY);
  
      // Temporarily position "Yes" absolutely at a random location
      yesButton.style.position = "absolute";
      yesButton.style.left = `${randomX}px`;
      yesButton.style.top = `${randomY}px`;
  
      // After 1 second, revert "Yes" back into the flex container,
      // so it returns to its original (properly centered) position to the left of "No"
      setTimeout(() => {
        if (!stopYesMovement) {
          resetYesButtonPosition();
        }
      }, 1000);
    }
  });
  
  // Revert "Yes" button back to its original layout position
  // (i.e. clear inline styles so the flex container arranges it normally)
  function resetYesButtonPosition() {
    yesButton.style.position = "";
    yesButton.style.left = "";
    yesButton.style.top = "";
  }
  
  // Redirect to "Yes" page when "Yes" is clicked
  function handleYesClick() {
    window.location.href = "yes_page.html";
  }
  
  noButton.addEventListener("click", handleNoClick);
  yesButton.addEventListener("click", handleYesClick);
  