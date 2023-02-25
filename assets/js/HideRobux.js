const filter = {
  url: [
    {
      urlMatches: "https://www.roblox.com/home",
    },
  ],
};

chrome.webNavigation.onCompleted.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {
      tabId: tab.tabId,
    },
    func: () => {
      let robuxAmount = document.getElementById("nav-robux-amount");
      let robuxBalance = document.getElementById("nav-robux-balance");

      robuxAmount.innerHTML = "hidden";
      robuxBalance.innerHTML = "hidden";
    },
  });
}, filter);

chrome.action.onClicked.addListener((tab) => {
  function updateDOM() {
    let robuxAmount = document.getElementById("nav-robux-amount");
    robuxAmount.innerHTML = "hidden";
  }

  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    func: updateDOM,
  });
});
